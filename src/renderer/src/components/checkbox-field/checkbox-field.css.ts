import { style, styleVariants } from "@vanilla-extract/css";
import { SPACING_UNIT, vars } from "../../theme.css";

export const checkboxField = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: `${SPACING_UNIT}px`,
  cursor: "pointer",
});

const base = style({
  width: "20px",
  height: "20px",
  borderRadius: "4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  transition: "all ease 0.2s",
  border: `solid 1px transparent`,
  ":hover": {
    borderColor: "rgba(255, 255, 255, 0.5)",
  },
  ":active": {
    opacity: vars.opacity.active,
  },
  ":disabled": {
    opacity: vars.opacity.disabled,
    cursor: "not-allowed",
  },
});

export const checkboxThemes = styleVariants({
  primary: [
    base,
    {
      backgroundColor: vars.color.muted,
      ":hover": {
        backgroundColor: "#DADBE1",
      },
      ":disabled": {
        backgroundColor: vars.color.muted,
      },
    },
  ],
  outline: [
    base,
    {
      backgroundColor: "transparent",
      border: `solid 1px ${vars.color.border}`,
      color: vars.color.muted,
      ":hover": {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
      },
      ":disabled": {
        backgroundColor: "transparent",
      },
    },
  ],
  dark: [
    base,
    {
      backgroundColor: vars.color.darkBackground,
      color: "#c0c1c7",
    },
  ],
  danger: [
    base,
    {
      border: `solid 1px #a31533`,
      backgroundColor: "transparent",
      color: "white",
      ":hover": {
        backgroundColor: "#a31533",
      },
    },
  ],
});

export const checkbox = style({
  width: "20px",
  height: "20px",
  borderRadius: "4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  transition: "all ease 0.2s",
  border: `solid 1px ${vars.color.border}`,
  ":hover": {
    borderColor: "rgba(255, 255, 255, 0.5)",
  },
});
export const checkboxInput = style({
  width: "100%",
  height: "100%",
  position: "absolute",
  margin: "0",
  padding: "0",
  opacity: "0",
  cursor: "pointer",
});
export const checkboxLabel = style({
  cursor: "pointer",
});