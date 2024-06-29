import { useTranslation } from "react-i18next";

import { Button, Modal } from "@renderer/components";

import * as styles from "./link-warning-modal.css";

interface LinkWarningModalProps {
  visible: boolean;
  onClose: () => void;
  repacklink: () => string;
}

export function LinkWarningModal({
  onClose,
  visible,
  repacklink,
}: LinkWarningModalProps) {
  const { t } = useTranslation("downloads");

  const handleProceedAndRemember = () => {
    onClose();
  };
  const handleProceeeGame = () => {
    onClose();
  };

  return (
    <Modal
      visible={visible}
      title={"Warning"}
      description={"You are going to external website, be careful and check website's URL in r/Piracy megathread for trustness"}
      onClose={onClose}
    >
      <div className={styles.deleteActionsButtonsCtn}>
        <Button onClick={handleProceedAndRemember} theme="danger">
          {t("Proceed and remember")}
        </Button>
        <Button onClick={handleProceeeGame} theme="danger">
          {t("OK")}
        </Button>
        <Button onClick={onClose} theme="primary">
          {t("cancel")}
        </Button>
      </div>
    </Modal>
  );
}
