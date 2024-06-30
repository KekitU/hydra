import { dataSource } from "@main/data-source";
import { DownloadSource, Repack } from "@main/entity";
import { downloadSourceSchema } from "@main/events/helpers/validators";
import { downloadSourceRepository } from "@main/repository";
import { RepacksManager } from "@main/services";
import { downloadSourceWorker } from "@main/workers";
import { chunk } from "lodash-es";
import type { EntityManager } from "typeorm";
import type { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import { z } from "zod";

export const insertDownloadsFromSource = async (
  trx: EntityManager,
  downloadSource: DownloadSource,
  downloads: z.infer<typeof downloadSourceSchema>["downloads"]
) => {
  const repacks: QueryDeepPartialEntity<Repack>[] = downloads.map(
    (download) => ({
      title: download.title,
      magnet: download.uris[0],
      fileSize: download.fileSize,
      repacker: downloadSource.name,
      uploadDate: download.uploadDate,
      downloadSource: { id: downloadSource.id },
      repackLinkSource: download.repackLinkSource,
    })
  );

  const downloadsChunks = chunk(repacks, 800);

  for (const chunk of downloadsChunks) {
    await trx
      .getRepository(Repack)
      .createQueryBuilder()
      .insert()
      .values(chunk)
      .updateEntity(false)
      .orIgnore()
      .execute();
  }
};

export const fetchDownloadSourcesAndUpdate = async () => {
  const downloadSources = await downloadSourceRepository.find({
    order: {
      id: "desc",
    },
  });

  const results = await downloadSourceWorker.run(downloadSources, {
    name: "getUpdatedRepacks",
  });

  await dataSource.transaction(async (transactionalEntityManager) => {
    for (const result of results) {
      if (result.etag !== null) {
        await transactionalEntityManager.getRepository(DownloadSource).update(
          { id: result.id },
          {
            etag: result.etag,
            status: result.status,
            downloadCount: result.downloads.length,
          }
        );

        await insertDownloadsFromSource(
          transactionalEntityManager,
          result,
          result.downloads
        );
      }
    }

    await RepacksManager.updateRepacks();
  });
};
