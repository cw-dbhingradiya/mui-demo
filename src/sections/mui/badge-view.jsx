import * as React from "react";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";
import MailIcon from "@mui/icons-material/Mail";
import Masonry from "@mui/lab/Masonry";
import Container from "@mui/material/Container";

import ComponentBlock from "../component-block";

const COLORS = ["greyBg", "primary", "secondary", "info", "success", "warning", "error"];

export default function SimpleBadge() {
  return (
    <>
      <Container sx={{ my: 10 }}>
        <Masonry columns={{ xs: 1, md: 2 }} spacing={5}>
          <ComponentBlock title="Basic">
            <Stack direction="row" gap={10}>
              {COLORS.map((color) => (
                <Badge key={color} badgeContent={4} color={color}>
                  <MailIcon />
                </Badge>
              ))}
            </Stack>
          </ComponentBlock>

          <ComponentBlock title="Maximum value">
            <Stack direction="row" gap={10}>
              <Badge color="error" badgeContent={99}>
                <MailIcon />
              </Badge>
              <Badge color="error" badgeContent={100}>
                <MailIcon />
              </Badge>
              <Badge color="error" badgeContent={1000} max={999}>
                <MailIcon />
              </Badge>
            </Stack>
          </ComponentBlock>

          <ComponentBlock title="Dot badge">
            <Stack direction="row" gap={10}>
              {COLORS.map((color) => (
                <Badge key={color} badgeContent={4} color={color} variant="dot">
                  <MailIcon />
                </Badge>
              ))}
            </Stack>
          </ComponentBlock>
        </Masonry>
      </Container>
    </>
  );
}
