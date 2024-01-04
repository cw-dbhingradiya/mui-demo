import * as React from "react";
import { green, pink } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";
import FaceIcon from "@mui/icons-material/Face";
import { Box, Typography } from "@mui/material";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CircleIcon from "@mui/icons-material/Circle";

export default function IconAvatars() {
  return (
    <Stack gap={8}>
      <Stack direction="row">
        {/* Icon */}
        <Stack pr={30} gap={10}>
          <Typography variant="h4">Icon</Typography>
          <Stack direction="row" alignItems="end" gap={8}>
            <Avatar
              sx={{
                width: 24,
                height: 24,
              }}
            >
              <FaceIcon fontSize="16px" />
            </Avatar>
            <Avatar sx={{ bgcolor: `primary.main`, width: 32, height: 32 }}>
              <FaceIcon sx={{ color: "greyDark.contrastText" }} />
            </Avatar>
            <Avatar sx={{ bgcolor: `info.main` }}>
              <FaceIcon sx={{ color: "greyDark.contrastText" }} />
            </Avatar>
            <Avatar sx={{ bgcolor: `success.main`, width: 48, height: 48 }}>
              <FaceIcon sx={{ color: "greyDark.contrastText" }} />
            </Avatar>
            <Avatar sx={{ bgcolor: "warning.main", width: 64, height: 64 }}>
              <FaceIcon color="greyDark" />
            </Avatar>
            <Avatar sx={{ bgcolor: `error.main`, width: 64, height: 64 }}>
              <FaceIcon
                fontSize="large"
                sx={{ color: "greyDark.contrastText" }}
              />
            </Avatar>
          </Stack>

          <Stack direction="row" alignItems="end" spacing={2} gap={8}>
            <Avatar
              variant="rounded"
              sx={{ width: 24, height: 24, borderRadius: 3 }}
            >
              <FaceIcon fontSize="16px" />
            </Avatar>
            <Avatar
              variant="rounded"
              sx={{
                bgcolor: "primary.main",
                width: 32,
                height: 32,
                borderRadius: 3,
              }}
            >
              <FaceIcon sx={{ color: "greyDark.contrastText" }} />
            </Avatar>
            <Avatar
              variant="rounded"
              sx={{ bgcolor: "info.main", borderRadius: 3 }}
            >
              <FaceIcon sx={{ color: "greyDark.contrastText" }} />
            </Avatar>
            <Avatar
              variant="rounded"
              sx={{
                bgcolor: "success.main",
                width: 48,
                height: 48,
                borderRadius: 3,
              }}
            >
              <FaceIcon sx={{ color: "greyDark.contrastText" }} />
            </Avatar>
            <Avatar
              variant="rounded"
              sx={{
                bgcolor: "warning.main",
                width: 64,
                height: 64,
                borderRadius: 3,
              }}
            >
              <FaceIcon color="greyDark" />
            </Avatar>
            <Avatar
              variant="rounded"
              sx={{
                bgcolor: "error.main",
                width: 64,
                height: 64,
                borderRadius: 3,
              }}
            >
              <FaceIcon
                fontSize="large"
                sx={{ color: "greyDark.contrastText" }}
              />
            </Avatar>
          </Stack>

          <Stack direction="row" alignItems="end" spacing={2} gap={8}>
            <Avatar variant="square" sx={{ width: 24, height: 24 }}>
              <FaceIcon fontSize="16px" />
            </Avatar>
            <Avatar
              variant="square"
              sx={{ bgcolor: "primary.main", width: 32, height: 32 }}
            >
              <FaceIcon sx={{ color: "greyDark.contrastText" }} />
            </Avatar>
            <Avatar variant="square" sx={{ bgcolor: "info.main" }}>
              <FaceIcon sx={{ color: "greyDark.contrastText" }} />
            </Avatar>
            <Avatar
              variant="square"
              sx={{ bgcolor: "success.main", width: 48, height: 48 }}
            >
              <FaceIcon sx={{ color: "greyDark.contrastText" }} />
            </Avatar>
            <Avatar
              variant="square"
              sx={{ bgcolor: "warning.main", width: 64, height: 64 }}
            >
              <FaceIcon color="greyDark" />
            </Avatar>
            <Avatar
              variant="square"
              sx={{ bgcolor: "error.main", width: 96, height: 96 }}
            >
              <FaceIcon
                fontSize="large"
                sx={{ color: "greyDark.contrastText" }}
              />
            </Avatar>
          </Stack>
        </Stack>

        {/* Letter */}
        <Stack gap={10}>
          <Typography variant="h4">Letter</Typography>
          <Stack direction="row" alignItems="end" spacing={2} gap={8}>
            <Avatar sx={{ width: 24, height: 24 }}>A</Avatar>
            <Avatar
              sx={{
                bgcolor: "primary.main",
                color: "greyDark.contrastText",
                width: 32,
                height: 32,
              }}
            >
              A
            </Avatar>
            <Avatar
              sx={{ bgcolor: "info.main", color: "greyDark.contrastText" }}
            >
              A
            </Avatar>
            <Avatar
              sx={{
                bgcolor: "success.main",
                color: "greyDark.contrastText",
                width: 48,
                height: 48,
              }}
            >
              A
            </Avatar>
            <Avatar
              sx={{
                bgcolor: "warning.main",
                color: "greyDark.main",
                width: 64,
                height: 64,
              }}
            >
              A
            </Avatar>
            <Avatar
              sx={{
                bgcolor: "error.main",
                color: "greyDark.contrastText",
                width: 64,
                height: 64,
              }}
            >
              A
            </Avatar>
          </Stack>

          <Stack direction="row" alignItems="end" spacing={2} gap={8}>
            <Avatar
              variant="rounded"
              sx={{ width: 24, height: 24, borderRadius: 3 }}
            >
              A
            </Avatar>
            <Avatar
              variant="rounded"
              sx={{
                bgcolor: "primary.main",
                color: "greyDark.contrastText",
                width: 32,
                height: 32,
                borderRadius: 3,
              }}
            >
              A
            </Avatar>
            <Avatar
              variant="rounded"
              sx={{
                bgcolor: "info.main",
                color: "greyDark.contrastText",
                borderRadius: 3,
              }}
            >
              A
            </Avatar>
            <Avatar
              variant="rounded"
              sx={{
                bgcolor: "success.main",
                color: "greyDark.contrastText",
                width: 48,
                height: 48,
                borderRadius: 3,
              }}
            >
              A
            </Avatar>
            <Avatar
              variant="rounded"
              sx={{
                bgcolor: "warning.main",
                color: "greyDark.main",
                width: 64,
                height: 64,
                borderRadius: 3,
              }}
            >
              A
            </Avatar>
            <Avatar
              variant="rounded"
              sx={{
                bgcolor: "error.main",
                color: "greyDark.contrastText",
                width: 64,
                height: 64,
                borderRadius: 3,
              }}
            >
              A
            </Avatar>
          </Stack>

          <Stack direction="row" alignItems="end" spacing={2} gap={8}>
            <Avatar variant="square" sx={{ width: 24, height: 24 }}>
              A
            </Avatar>
            <Avatar
              variant="square"
              sx={{
                bgcolor: "primary.main",
                color: "greyDark.contrastText",
                width: 32,
                height: 32,
              }}
            >
              A
            </Avatar>
            <Avatar
              variant="square"
              sx={{ bgcolor: "info.main", color: "greyDark.contrastText" }}
            >
              A
            </Avatar>
            <Avatar
              variant="square"
              sx={{
                bgcolor: "success.main",
                color: "greyDark.contrastText",
                width: 48,
                height: 48,
              }}
            >
              A
            </Avatar>
            <Avatar
              variant="square"
              sx={{
                bgcolor: "warning.main",
                color: "greyDark.main",
                width: 64,
                height: 64,
              }}
            >
              A
            </Avatar>
            <Avatar
              variant="square"
              sx={{
                bgcolor: "error.main",
                color: "greyDark.contrastText",
                width: 96,
                height: 96,
              }}
            >
              A
            </Avatar>
          </Stack>
        </Stack>
      </Stack>

      <Stack direction="row">
        {/* Image */}
        <Stack pr={30} gap={10}>
          <Typography variant="h4">Image</Typography>
          <Stack direction="row" alignItems="end" gap={8} spacing={2} gap={8}>
            <Avatar
              src="https://shorturl.at/rsCJ4"
              sx={{ width: 24, height: 24 }}
            />
            <Avatar
              src="https://shorturl.at/rsCJ4"
              sx={{ width: 32, height: 32 }}
            />
            <Avatar src="https://shorturl.at/rsCJ4" />
            <Avatar
              src="https://shorturl.at/rsCJ4"
              sx={{ width: 48, height: 48 }}
            />
            <Avatar
              src="https://shorturl.at/rsCJ4"
              sx={{ width: 64, height: 64 }}
            />
          </Stack>

          <Stack direction="row" alignItems="end" spacing={2} gap={8}>
            <Avatar
              src="https://shorturl.at/glnt5"
              variant="rounded"
              sx={{ width: 24, height: 24, borderRadius: 3 }}
            />
            <Avatar
              src="https://shorturl.at/glnt5"
              variant="rounded"
              sx={{
                width: 32,
                height: 32,
                borderRadius: 3,
              }}
            />
            <Avatar
              src="https://shorturl.at/glnt5"
              variant="rounded"
              sx={{ borderRadius: 3 }}
            />
            <Avatar
              src="https://shorturl.at/glnt5"
              variant="rounded"
              sx={{
                width: 48,
                height: 48,
                borderRadius: 3,
              }}
            />
            <Avatar
              src="https://shorturl.at/glnt5"
              variant="rounded"
              sx={{
                width: 64,
                height: 64,
                borderRadius: 3,
              }}
            />
          </Stack>

          <Stack direction="row" alignItems="end" spacing={2} gap={8}>
            <Avatar
              src="https://shorturl.at/bmwSV"
              variant="square"
              sx={{ width: 24, height: 24 }}
            />
            <Avatar
              src="https://shorturl.at/bmwSV"
              variant="square"
              sx={{ width: 32, height: 32 }}
            />
            <Avatar src="https://shorturl.at/bmwSV" variant="square" />
            <Avatar
              src="https://shorturl.at/bmwSV"
              variant="square"
              sx={{ width: 48, height: 48 }}
            />
            <Avatar
              src="https://shorturl.at/bmwSV"
              variant="square"
              sx={{ width: 64, height: 64 }}
            />
          </Stack>
        </Stack>

        {/* Status */}
        <Stack gap={10}>
          <Typography variant="h4">Status</Typography>
          <Stack direction="row" alignItems="end" gap={12} spacing={2}>
            <Badge
              variant="dot"
              color="success"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
            >
              <Avatar
                src="https://shorturl.at/rsCJ4"
                sx={{ width: 24, height: 24 }}
              />
            </Badge>
            <Badge
              color="error"
              badgeContent={<HorizontalRuleIcon sx={{ fontSize: "10px" }} />}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              sx={{
                "& .MuiBadge-standard": {
                  width: 12,
                  height: 12,
                  minWidth: "auto",
                  bottom: 5,
                  right: 5,
                },
              }}
            >
              <Avatar
                src="https://shorturl.at/rsCJ4"
                sx={{ width: 32, height: 32 }}
              />
            </Badge>
            <Badge
              color="greyText"
              badgeContent={
                <CircleIcon sx={{ fontSize: "8px", color: "#fff" }} />
              }
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              sx={{
                "& .MuiBadge-standard": {
                  width: 12,
                  height: 12,
                  minWidth: "auto",
                  bottom: 5,
                  right: 5,
                  background: "#919EAB",
                },
              }}
            >
              <Avatar src="https://shorturl.at/rsCJ4" sx={{}} />
            </Badge>
            <Badge
              color="warning"
              badgeContent={
                <AccessTimeIcon sx={{ color: "#fff", fontSize: "10px" }} />
              }
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              sx={{
                "& .MuiBadge-standard": {
                  width: 14,
                  height: 14,
                  minWidth: "auto",
                  bottom: 5,
                  right: 5,
                },
              }}
            >
              <Avatar
                src="https://shorturl.at/rsCJ4"
                sx={{ width: 48, height: 48 }}
              />
            </Badge>
            <Badge
              variant="dot"
              color="success"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
            >
              <Avatar
                src="https://shorturl.at/rsCJ4"
                sx={{ width: 64, height: 64 }}
              />
            </Badge>
          </Stack>

          <Stack direction="row" alignItems="end" gap={12} spacing={2}>
            <Badge variant="dot" color="success">
              <Avatar
                src="https://shorturl.at/glnt5"
                variant="rounded"
                sx={{ width: 24, height: 24, borderRadius: 3 }}
              />
            </Badge>
            <Badge
              color="error"
              badgeContent={<HorizontalRuleIcon sx={{ fontSize: "10px" }} />}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              sx={{
                "& .MuiBadge-standard": {
                  width: 12,
                  height: 12,
                  minWidth: "auto",
                  top: "-10px",
                  right: 0,
                },
              }}
            >
              <Avatar
                src="https://shorturl.at/glnt5"
                variant="rounded"
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: 3,
                }}
              />
            </Badge>
            <Badge
              color="greyText"
              badgeContent={
                <CircleIcon sx={{ fontSize: "8px", color: "#fff" }} />
              }
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              sx={{
                "& .MuiBadge-standard": {
                  width: 12,
                  height: 12,
                  minWidth: "auto",
                  top: "-10px",
                  right: 0,
                  background: "#919EAB",
                },
              }}
            >
              <Avatar
                src="https://shorturl.at/glnt5"
                variant="rounded"
                sx={{ borderRadius: 3 }}
              />
            </Badge>
            <Badge
              color="warning"
              badgeContent={
                <AccessTimeIcon sx={{ fontSize: 12, color: "#fff" }} />
              }
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              sx={{
                "& .MuiBadge-standard": {
                  width: 14,
                  height: 14,
                  minWidth: "auto",
                  top: "-14px",
                  right: 5,
                },
              }}
            >
              <Avatar
                src="https://shorturl.at/glnt5"
                variant="rounded"
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: 3,
                }}
              />
            </Badge>
            <Badge variant="dot" color="success">
              <Avatar
                src="https://shorturl.at/glnt5"
                variant="rounded"
                sx={{
                  width: 64,
                  height: 64,
                  borderRadius: 3,
                }}
              />
            </Badge>
          </Stack>

          <Stack direction="row" alignItems="end" gap={12} spacing={2}>
            <Badge variant="dot" color="success">
              <Avatar
                src="https://shorturl.at/bmwSV"
                variant="square"
                sx={{ width: 24, height: 24 }}
              />
            </Badge>
            <Badge
              color="error"
              badgeContent={<HorizontalRuleIcon sx={{ fontSize: "10px" }} />}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              sx={{
                "& .MuiBadge-standard": {
                  width: 12,
                  height: 12,
                  minWidth: "auto",
                  top: "-10px",
                  right: 0,
                },
              }}
            >
              <Avatar
                src="https://shorturl.at/bmwSV"
                variant="square"
                sx={{ width: 32, height: 32 }}
              />
            </Badge>
            <Badge
              color="greyText"
              badgeContent={
                <CircleIcon sx={{ fontSize: "8px", color: "#fff" }} />
              }
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              sx={{
                "& .MuiBadge-standard": {
                  width: 12,
                  height: 12,
                  minWidth: "auto",
                  top: "-10px",
                  right: 0,
                  background: "#919EAB",
                },
              }}
            >
              <Avatar src="https://shorturl.at/bmwSV" variant="square" />
            </Badge>
            <Badge
              color="warning"
              badgeContent={
                <AccessTimeIcon sx={{ fontSize: 12, color: "#fff" }} />
              }
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              sx={{
                "& .MuiBadge-standard": {
                  width: 14,
                  height: 14,
                  minWidth: "auto",
                  top: "-14px",
                  right: 5,
                },
              }}
            >
              <Avatar
                src="https://shorturl.at/bmwSV"
                variant="square"
                sx={{ width: 48, height: 48 }}
              />
            </Badge>
            <Badge variant="dot" color="success">
              <Avatar
                src="https://shorturl.at/bmwSV"
                variant="square"
                sx={{ width: 64, height: 64 }}
              />
            </Badge>
          </Stack>
        </Stack>
      </Stack>

      <Stack direction="row">
        {/* Grouped */}
        <Stack pr={30}>
          <Typography variant="h4">Grouped</Typography>
          <Stack direction="row" alignItems="end" spacing={2} gap={10}>
            <AvatarGroup max={4}>
              <Avatar src="https://shorturl.at/rsCJ4" />
              <Avatar src="https://shorturl.at/rsCJ4" />
              <Avatar src="https://shorturl.at/rsCJ4" />
              <Avatar src="https://shorturl.at/rsCJ4" />
              <Avatar src="https://shorturl.at/rsCJ4" />
              <Avatar src="https://shorturl.at/rsCJ4" />
              <Avatar src="https://shorturl.at/rsCJ4" />
              <Avatar src="https://shorturl.at/rsCJ4" />
              <Avatar src="https://shorturl.at/rsCJ4" />
              <Avatar src="https://shorturl.at/rsCJ4" />
              <Avatar src="https://shorturl.at/rsCJ4" />
            </AvatarGroup>

            <AvatarGroup
              max={4}
              sx={{
                "& .MuiAvatar-root": { width: 32, height: 32, fontSize: 12 },
              }}
            >
              <Avatar sizes="small" src="https://shorturl.at/rsCJ4" />
              <Avatar src="https://shorturl.at/rsCJ4" />
              <Avatar src="https://shorturl.at/rsCJ4" />
              <Avatar src="https://shorturl.at/rsCJ4" />
              <Avatar src="https://shorturl.at/rsCJ4" />
              <Avatar src="https://shorturl.at/rsCJ4" />
              <Avatar src="https://shorturl.at/rsCJ4" />
              <Avatar src="https://shorturl.at/rsCJ4" />
              <Avatar src="https://shorturl.at/rsCJ4" />
              <Avatar src="https://shorturl.at/rsCJ4" />
              <Avatar src="https://shorturl.at/rsCJ4" />
            </AvatarGroup>

            <AvatarGroup
              max={4}
              sx={{
                "& .MuiAvatar-root": { width: 24, height: 24, fontSize: 12 },
              }}
            >
              <Avatar sizes="small" src="https://shorturl.at/rsCJ4" />
              <Avatar src="https://shorturl.at/rsCJ4" />
              <Avatar src="https://shorturl.at/rsCJ4" />
              <Avatar src="https://shorturl.at/rsCJ4" />
              <Avatar src="https://shorturl.at/rsCJ4" />
              <Avatar src="https://shorturl.at/rsCJ4" />
              <Avatar src="https://shorturl.at/rsCJ4" />
              <Avatar src="https://shorturl.at/rsCJ4" />
              <Avatar src="https://shorturl.at/rsCJ4" />
              <Avatar src="https://shorturl.at/rsCJ4" />
              <Avatar src="https://shorturl.at/rsCJ4" />
            </AvatarGroup>

            <Stack gap={20} flexDirection="row">
              <Badge
                color="primary"
                variant="dot"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                sx={{
                  "& .MuiBadge-dot": {
                    top: 55,
                    right: 5,
                  },
                }}
              >
                <AvatarGroup>
                  <Avatar
                    src="https://shorturl.at/rsCJ4"
                    sx={{ bottom: "-23px" }}
                  />
                  <Avatar src="https://shorturl.at/rsCJ4" />
                </AvatarGroup>
              </Badge>

              <Badge
                color="error"
                badgeContent={<HorizontalRuleIcon sx={{ fontSize: "10px" }} />}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                sx={{
                  "& .MuiBadge-badge": {
                    width: 12,
                    height: 12,
                    minWidth: "auto",
                    top: 45,
                    right: 5,
                  },
                }}
              >
                <AvatarGroup>
                  <Avatar
                    src="https://shorturl.at/rsCJ4"
                    sx={{ bottom: "-20px", right: "-10px" }}
                  />
                  <Avatar src="https://shorturl.at/rsCJ4" />
                </AvatarGroup>
              </Badge>

              <Badge
                color="warning"
                badgeContent={
                  <AccessTimeIcon sx={{ color: "#fff", fontSize: "10px" }} />
                }
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                sx={{
                  "& .MuiBadge-standard": {
                    width: 14,
                    height: 14,
                    minWidth: "auto",
                    bottom: 5,
                    right: 5,
                  },
                }}
              >
                <AvatarGroup
                  sx={{
                    "& .MuiAvatar-root": { width: 24, height: 24 },
                  }}
                >
                  <Avatar
                    src="https://shorturl.at/rsCJ4"
                    sx={{ bottom: "-13px" }}
                  />
                  <Avatar src="https://shorturl.at/rsCJ4" />
                </AvatarGroup>
              </Badge>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
