import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import SvgIcon from "@mui/material/SvgIcon";
import IconButton from "@mui/material/IconButton";
import { Stack, Typography } from "@mui/material";

const buttons = [
  <Button key="one">Left</Button>,
  <Button key="two">Center</Button>,
  <Button key="three">Right</Button>,
];

export default function GroupOrientation() {
  return (
    <Stack gap={8}>
      {/* Contained */}
      <Stack direction="row" gap={5}>
        <Typography variant="subtitle1">Contained</Typography>
        <ButtonGroup
          variant="contained"
          aria-label="neutral button group"
          color="neutral"
        >
          {buttons}
        </ButtonGroup>
        <ButtonGroup
          variant="contained"
          aria-label="primary button group"
          color="primary"
        >
          {buttons}
        </ButtonGroup>
      </Stack>

      {/* Outlined */}
      <Stack direction="row" gap={5}>
        <Typography variant="subtitle1">Outlined</Typography>
        <ButtonGroup
          variant="outlined"
          aria-label="secondary button group"
          color="secondary"
          color="neutralBorder"
        >
          {buttons}
        </ButtonGroup>
        <ButtonGroup
          variant="outlined"
          aria-label="primary button group"
          color="primary"
        >
          {buttons}
        </ButtonGroup>
      </Stack>

      {/* Text */}
      <Stack direction="row" gap={5}>
        <Typography variant="subtitle1">Text</Typography>
        <ButtonGroup
          variant="text"
          aria-label="secondary button group"
          color="buttonDefault"
        >
          {buttons}
        </ButtonGroup>
        <ButtonGroup
          variant="text"
          aria-label="primary button group"
          color="primary"
        >
          {buttons}
        </ButtonGroup>
      </Stack>

      {/* Vertical */}
      <Stack direction="row" gap={5}>
        <Typography variant="subtitle1">Vertical</Typography>
        <ButtonGroup
          orientation="vertical"
          variant="contained"
          aria-label="primary button group"
          color="primary"
        >
          {buttons}
        </ButtonGroup>
        <ButtonGroup
          orientation="vertical"
          aria-label="primary button group"
          color="primary"
        >
          {buttons}
        </ButtonGroup>
        <ButtonGroup
          orientation="vertical"
          variant="text"
          aria-label="primary button group"
          color="primary"
        >
          {buttons}
        </ButtonGroup>
      </Stack>

      {/* Size */}
      <Stack direction="row" gap={5}>
        <Typography variant="subtitle1">Size</Typography>
        <ButtonGroup
          size="large"
          aria-label="large primary button group"
          color="primary"
        >
          {buttons}
        </ButtonGroup>
        <ButtonGroup
          size="medium"
          aria-label="medium primary button group"
          color="primary"
        >
          {buttons}
        </ButtonGroup>
        <ButtonGroup
          size="small"
          aria-label="small primary button group"
          color="primary"
        >
          {buttons}
        </ButtonGroup>
      </Stack>

      {/* vertical Size */}
      <Stack direction="row" gap={5}>
        <ButtonGroup
          size="large"
          orientation="vertical"
          aria-label="large primary button group"
          color="primary"
        >
          {buttons}
        </ButtonGroup>
        <ButtonGroup
          size="medium"
          orientation="vertical"
          aria-label="medium primary button group"
          color="primary"
        >
          {buttons}
        </ButtonGroup>
        <ButtonGroup
          size="small"
          orientation="vertical"
          aria-label="small primary button group"
          color="primary"
        >
          {buttons}
        </ButtonGroup>
      </Stack>
    </Stack>
  );
}
