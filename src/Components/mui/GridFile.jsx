import { Box, Stack } from "@mui/system";
import React from "react";
import { useTheme } from "@emotion/react";
import { themeColor } from "./withEmotion.style";

function Gridfile() {
  const theme = useTheme();
  return (
    <div className={themeColor(theme)} style={{ opacity: 0.1 }}>
      <Stack direction="row" gap={6} mt={8}>
        <Box className="errormain" />
        <Box className="errormain" />
        <Box className="errormain" />
        <Box className="errormain" />
        <Box className="errormain" />
        <Box className="errormain" />
        <Box className="errormain" />
        <Box className="errormain" />
        <Box className="errormain" />
        <Box className="errormain" />
        <Box className="errormain" />
        <Box className="errormain" />
      </Stack>

      <Stack direction="row" gap={8} mt={8}>
        <Box className="successmain" />
        <Box className="successmain" />
        <Box className="successmain" />
        <Box className="successmain" />
        <Box className="successmain" />
        <Box className="successmain" />
        <Box className="successmain" />
        <Box className="successmain" />
        <Box className="successmain" />
        <Box className="successmain" />
        <Box className="successmain" />
        <Box className="successmain" />
      </Stack>

      <Stack direction="row" gap={20} mt={8}>
        <Box className="infomain shadow" />
        <Box className="infomain" />
        <Box className="infomain" />
        <Box className="infomain" />
        <Box className="infomain" />
        <Box className="infomain" />
        <Box className="infomain" />
        <Box className="infomain" />
        <Box className="infomain" />
        <Box className="infomain" />
        <Box className="infomain" />
        <Box className="infomain" />
      </Stack>
    </div>
  );
}

export default Gridfile;
