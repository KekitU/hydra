import { style } from "@vanilla-extract/css";

import { SPACING_UNIT, vars } from "../../../theme.css";

export const repacks = style({
  display: "flex",
  gap: `${SPACING_UNIT}px`,
  flexDirection: "column",
});

export const repackButton = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  gap: `${SPACING_UNIT}px`,
  color: vars.color.body,
  padding: `${SPACING_UNIT * 2}px`,
  justifyContent: "space-between",
});

export const repackContent = style({
  display: "flex",
  textAlign: "left",
  flexDirection: "column",
  gap: `${SPACING_UNIT}px`,
});

export const repackLinkButton = style({
  top: `${SPACING_UNIT}px`,
  right: `${SPACING_UNIT}px`,
  //  borderColor: vars.color.border,
  width: "40px",
});

export const torrentDataContainer = style({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
});

export const badgesContainer = style({
  display: "flex",
  gap: `${SPACING_UNIT}px`,
  flexWrap: "wrap",
});
