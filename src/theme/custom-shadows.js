import { alpha } from "@mui/material/styles";

import { commonColor } from "./color";

// ----------------------------------------------------------------------

export function customShadows(mode) {
  const color = mode === "light" ? commonColor.grey[500] : common.black;

  const transparent = alpha(color, 0.16);

  return {
    //
    primary: `0 8px 16px 0 rgba(0, 167, 111, 0.24)`,
    info: `0 8px 16px 0 rgba(0, 167, 111, 0.24)`,
    secondary: `0 8px 16px 0 ${alpha(secondary.main, 0.24)}`,
    success: `0 8px 16px 0 ${alpha(success.main, 0.24)}`,
    warning: `0 8px 16px 0 ${alpha(warning.main, 0.24)}`,
    error: `0 8px 16px 0 ${alpha(error.main, 0.24)}`,
  };
}
