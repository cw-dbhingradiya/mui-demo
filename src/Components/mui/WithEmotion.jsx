import React from "react";
import { useTheme } from "@emotion/react";
import { themeColor } from "./withEmotion.style";
import { Box, Stack } from "@mui/system";
import { Typography } from "@mui/material";

function WithEmotion() {
  const theme = useTheme();

  return (
    <div className={themeColor(theme)}>
      <h2>With Emotion</h2>
      <Stack direction="row">
        {/* primary */}
        <Stack gap={1} direction="row" mr={5}>
          <Stack>
            <Box className="primarymain" />
          </Stack>
          <Stack alignItems="center" gap={1}>
            <Box className="primarydarker" />
            <Box className="primarydark" />
            <Box className="primarylight" />
            <Box className="primarylighter" />
          </Stack>
        </Stack>

        {/* secondary */}
        <Stack gap={1} direction="row" mr={5}>
          <Stack>
            <Box className="secondarymain" />
          </Stack>
          <Stack alignItems="center" gap={1}>
            <Box className="secondarydarker" />
            <Box className="secondarydark" />
            <Box className="secondarylight" />
            <Box className="secondarylighter" />
          </Stack>
        </Stack>
      </Stack>

      <Stack direction="row" mt={8}>
        {/* info */}
        <Stack gap={1} direction="row" mr={5}>
          <Stack>
            <Box className="infomain" />
          </Stack>
          <Stack alignItems="center" gap={1}>
            <Box className="infodarker" />
            <Box className="infodark" />
            <Box className="infolight" />
            <Box className="infolighter" />
          </Stack>
        </Stack>

        {/* success */}
        <Stack gap={1} direction="row" mr={5}>
          <Stack>
            <Box className="successmain" />
          </Stack>
          <Stack alignItems="center" gap={1}>
            <Box className="successdarker" />
            <Box className="successdark" />
            <Box className="successlight" />
            <Box className="successlighter" />
          </Stack>
        </Stack>

        {/* warning */}
        <Stack gap={1} direction="row" mr={5}>
          <Stack>
            <Box className="warningmain" />
          </Stack>
          <Stack alignItems="center" gap={1}>
            <Box className="warningdarker" />
            <Box className="warningdark" />
            <Box className="warninglight" />
            <Box className="warninglighter" />
          </Stack>
        </Stack>

        {/* error */}
        <Stack gap={1} direction="row" mr={5}>
          <Stack>
            <Box className="errormain" />
          </Stack>
          <Stack alignItems="center" gap={1}>
            <Box className="errordarker" />
            <Box className="errordark" />
            <Box className="errorlight" />
            <Box className="errorlighter" />
          </Stack>
        </Stack>
      </Stack>

      {/* grey */}
      <Stack direction="row" mt={8}>
        <Stack gap={1} direction="row" alignItems="baseline" mr={5}>
          <Box className="grey100" />
          <Box className="grey200" />
          <Box className="grey300" />
          <Box className="grey400" />
          <Box className="grey500" />
          <Box className="grey600" />
          <Box className="grey700" />
          <Box className="grey800" />
          <Box className="grey900" />
        </Stack>
      </Stack>

      {/* <h1>Typography</h1>
      <Typography className="h1">H2 - Almost before we knew it</Typography>
      <Typography className="h2">H1 - Almost before we knew it</Typography>
      <Typography className="h3">H3 - Almost before we knew it</Typography>
      <Typography className="h4">H4 - Almost before we knew it</Typography>
      <Typography className="h5">H5 - Almost before we knew it</Typography>
      <Typography className="h6">H6 - Almost before we knew it</Typography>
      <Typography className="subtitle1">
        subtitle1 - Almost before we knew it
      </Typography>
      <Typography className="subtitle2">
        subtitle2 - Almost before we knew it
      </Typography>
      <Typography className="body1">
        body1 - Almost before we knew it
      </Typography>
      <Typography className="body2">
        body2 - Almost before we knew it
      </Typography>
      <Typography className="caption">
        caption - Almost before we knew it
      </Typography>
      <Typography className="overline">
        overline - Almost before we knew it
      </Typography> */}
    </div>
  );
}

export default WithEmotion;
