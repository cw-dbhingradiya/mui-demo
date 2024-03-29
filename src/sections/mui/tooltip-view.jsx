import * as React from "react";
import { Stack } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

import ComponentBlock from "../component-block";

const CustomWidthTooltip = styled(({ className, ...props }) => <Tooltip {...props} classes={{ popper: className }} />)({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 200,
  },
});

export default function PositionedTooltips() {
  return (
    <Container sx={{ my: 10 }}>
      <Masonry columns={{ xs: 1, md: 1 }} spacing={3}>
        <ComponentBlock title="Position">
          <Stack direction="row" gap={30}>
            <Tooltip title="Add">
              <Button variant="contained">None</Button>
            </Tooltip>
            <Tooltip title="Add" placement="top" arrow>
              <Button variant="contained" color="info">
                Top
              </Button>
            </Tooltip>
            <Tooltip title="Add" placement="bottom" arrow>
              <Button variant="contained" color="success">
                Bottom
              </Button>
            </Tooltip>
            <Tooltip title="Add" placement="left" arrow>
              <Button variant="contained" color="warning">
                Left
              </Button>
            </Tooltip>
            <Tooltip title="Add" placement="right" arrow>
              <Button variant="contained" color="error">
                Right
              </Button>
            </Tooltip>
          </Stack>
        </ComponentBlock>

        <ComponentBlock title="Contained">
          <Stack direction="row" gap={30}>
            <Tooltip title="Vivamus quis mi. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit.">
              <Button variant="contained">None</Button>
            </Tooltip>
            <Tooltip title="Vivamus quis mi. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit." placement="top" arrow>
              <Button variant="contained" color="secondary">
                Top
              </Button>
            </Tooltip>
            <Tooltip title="Vivamus quis mi. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit." placement="bottom" arrow>
              <Button variant="contained" color="warning">
                Bottom
              </Button>
            </Tooltip>
            <Tooltip title="Vivamus quis mi. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit." placement="left" arrow>
              <Button variant="contained" color="info">
                Left
              </Button>
            </Tooltip>
            <Tooltip title="Vivamus quis mi. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit." placement="right" arrow>
              <Button variant="contained" color="error">
                Right
              </Button>
            </Tooltip>
          </Stack>
        </ComponentBlock>

        <ComponentBlock title="Contained">
          <Stack direction="row" gap={30}>
            <CustomWidthTooltip title="Vivamus quis mi. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit.">
              <Button variant="contained">None</Button>
            </CustomWidthTooltip>
            <CustomWidthTooltip title="Vivamus quis mi. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit." placement="top" arrow>
              <Button variant="contained" color="secondary">
                Top
              </Button>
            </CustomWidthTooltip>
            <CustomWidthTooltip
              title="Vivamus quis mi. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit."
              placement="bottom"
              arrow
            >
              <Button variant="contained" color="warning">
                Bottom
              </Button>
            </CustomWidthTooltip>
            <CustomWidthTooltip title="Vivamus quis mi. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit." placement="left" arrow>
              <Button variant="contained" color="error">
                Left
              </Button>
            </CustomWidthTooltip>
            <CustomWidthTooltip title="Vivamus quis mi. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit." placement="right" arrow>
              <Button variant="contained" color="success">
                Right
              </Button>
            </CustomWidthTooltip>
          </Stack>
        </ComponentBlock>
      </Masonry>
    </Container>
  );
}
