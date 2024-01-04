import * as React from "react";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";
import MailIcon from "@mui/icons-material/Mail";

const COLORS = [
  "greyBg",
  "primary",
  "secondary",
  "info",
  "success",
  "warning",
  "error",
];

export default function SimpleBadge() {
  return (
    <>
      <Stack gap={10} p={10}>
        <Stack direction="row" gap={10}>
          {COLORS.map((color) => (
            <Badge key={color} badgeContent={4} color={color}>
              <MailIcon />
            </Badge>
          ))}
        </Stack>

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

        <Stack direction="row" gap={10}>
          {COLORS.map((color) => (
            <Badge key={color} badgeContent={4} color={color} variant="dot">
              <MailIcon />
            </Badge>
          ))}
        </Stack>
      </Stack>
    </>
  );
}
