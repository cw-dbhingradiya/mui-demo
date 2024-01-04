import React from "react";
import { Box, Stack } from "@mui/system";

function WithSx() {
  return (
    <div>
      <h2>With Sx</h2>
      {/* First Row */}
      <Stack direction="row">
        {/* primary */}
        <Stack gap={1} direction="row" mr={5}>
          <Stack>
            <Box
              sx={{
                bgcolor: `primary.main`,
                width: 372,
                height: 120,
                borderRadius: "8px",
                display: "block",
                boxShadow: "0px 8px 16px 0px #00a76f3d",
              }}
            />
          </Stack>
          <Stack alignItems="center" gap={1}>
            <Box
              sx={{
                bgcolor: `primary.darker`,
                width: 40,
                height: 24,
                borderRadius: "8px",
              }}
            />
            <Box
              sx={{
                bgcolor: `primary.dark`,
                width: 40,
                height: 24,
                borderRadius: "8px",
              }}
            />
            <Box
              sx={{
                bgcolor: `primary.light`,
                width: 40,
                height: 24,
                borderRadius: "8px",
                display: "block",
              }}
            />
            <Box
              sx={{
                bgcolor: `primary.lighter`,
                width: 40,
                height: 24,
                borderRadius: "8px",
              }}
            />
          </Stack>
        </Stack>

        {/* secondary */}
        <Stack direction="row" gap={1}>
          <Stack alignItems="center">
            <Box
              sx={{
                bgcolor: `secondary.main`,
                width: 372,
                height: 120,
                borderRadius: "8px",
                display: "block",
                boxShadow: "0px 8px 16px 0px #8e33ff3d",
              }}
            />
          </Stack>
          <Stack alignItems="center" gap={1}>
            <Box
              sx={{
                bgcolor: `secondary.darker`,
                width: 40,
                height: 24,
                borderRadius: "8px",
              }}
            />
            <Box
              sx={{
                bgcolor: `secondary.dark`,
                width: 40,
                height: 24,
                borderRadius: "8px",
              }}
            />
            <Box
              sx={{
                bgcolor: `secondary.light`,
                width: 40,
                height: 24,
                borderRadius: "8px",
                display: "block",
              }}
            />
            <Box
              sx={{
                bgcolor: `secondary.lighter`,
                width: 40,
                height: 24,
                borderRadius: "8px",
              }}
            />
          </Stack>
        </Stack>
      </Stack>

      {/* secondrow */}
      <Stack direction="row" mt={8}>
        {/* info */}
        <Stack gap={1} direction="row" mr={5}>
          <Stack>
            <Box
              sx={{
                bgcolor: `info.main`,
                width: 142,
                height: 120,
                borderRadius: "8px",
                display: "block",
                boxShadow: "0px 8px 16px 0px #00b8d93d",
              }}
            />
          </Stack>
          <Stack alignItems="center" gap={1}>
            <Box
              sx={{
                bgcolor: `info.darker`,
                width: 40,
                height: 24,
                borderRadius: "8px",
              }}
            />
            <Box
              sx={{
                bgcolor: `info.dark`,
                width: 40,
                height: 24,
                borderRadius: "8px",
              }}
            />
            <Box
              sx={{
                bgcolor: `info.light`,
                width: 40,
                height: 24,
                borderRadius: "8px",
                display: "block",
              }}
            />
            <Box
              sx={{
                bgcolor: `info.lighter`,
                width: 40,
                height: 24,
                borderRadius: "8px",
              }}
            />
          </Stack>
        </Stack>

        {/* success */}
        <Stack direction="row" gap={1} mr={5}>
          <Stack alignItems="center">
            <Box
              sx={{
                bgcolor: `success.main`,
                width: 142,
                height: 120,
                borderRadius: "8px",
                display: "block",
                boxShadow: "0px 8px 16px 0px #22c55e3d",
              }}
            />
          </Stack>
          <Stack alignItems="center" gap={1}>
            <Box
              sx={{
                bgcolor: `success.darker`,
                width: 40,
                height: 24,
                borderRadius: "8px",
              }}
            />
            <Box
              sx={{
                bgcolor: `success.dark`,
                width: 40,
                height: 24,
                borderRadius: "8px",
              }}
            />
            <Box
              sx={{
                bgcolor: `success.light`,
                width: 40,
                height: 24,
                borderRadius: "8px",
                display: "block",
              }}
            />
            <Box
              sx={{
                bgcolor: `success.lighter`,
                width: 40,
                height: 24,
                borderRadius: "8px",
              }}
            />
          </Stack>
        </Stack>

        {/* warning */}
        <Stack direction="row" gap={1} mr={5}>
          <Stack alignItems="center">
            <Box
              sx={{
                bgcolor: `warning.main`,
                width: 142,
                height: 120,
                borderRadius: "8px",
                display: "block",
                boxShadow: "0px 8px 16px 0px #ffab003d",
              }}
            />
          </Stack>
          <Stack alignItems="center" gap={1}>
            <Box
              sx={{
                bgcolor: `warning.darker`,
                width: 40,
                height: 24,
                borderRadius: "8px",
              }}
            />
            <Box
              sx={{
                bgcolor: `warning.dark`,
                width: 40,
                height: 24,
                borderRadius: "8px",
              }}
            />
            <Box
              sx={{
                bgcolor: `warning.light`,
                width: 40,
                height: 24,
                borderRadius: "8px",
                display: "block",
              }}
            />
            <Box
              sx={{
                bgcolor: `warning.lighter`,
                width: 40,
                height: 24,
                borderRadius: "8px",
              }}
            />
          </Stack>
        </Stack>

        {/* error */}
        <Stack direction="row" gap={1} mr={5}>
          <Stack alignItems="center">
            <Box
              sx={{
                bgcolor: `error.main`,
                width: 142,
                height: 120,
                borderRadius: "8px",
                display: "block",
                boxShadow: "0px 8px 16px 0px #ff56303d",
              }}
            />
          </Stack>
          <Stack alignItems="center" gap={1}>
            <Box
              sx={{
                bgcolor: `error.darker`,
                width: 40,
                height: 24,
                borderRadius: "8px",
              }}
            />
            <Box
              sx={{
                bgcolor: `error.dark`,
                width: 40,
                height: 24,
                borderRadius: "8px",
              }}
            />
            <Box
              sx={{
                bgcolor: `error.light`,
                width: 40,
                height: 24,
                borderRadius: "8px",
                display: "block",
              }}
            />
            <Box
              sx={{
                bgcolor: `error.lighter`,
                width: 40,
                height: 24,
                borderRadius: "8px",
              }}
            />
          </Stack>
        </Stack>
      </Stack>

      <Stack direction="row">
        {/* Third */}
        <Stack gap={1} direction="row" alignItems="baseline" mt={8} mr={5}>
          <Stack>
            <Box
              sx={{
                bgcolor: `grey.900`,
                width: 90,
                height: 120,
                borderRadius: "8px",
                display: "block",
              }}
            />
          </Stack>
          <Stack>
            <Box
              sx={{
                bgcolor: `grey.800`,
                width: 90,
                height: 116,
                borderRadius: "8px",
              }}
            />
          </Stack>
          <Stack>
            <Box
              sx={{
                bgcolor: `grey.700`,
                width: 90,
                height: 112,
                borderRadius: "8px",
              }}
            />
          </Stack>
          <Stack alignItems="center" gap={1}>
            <Box
              sx={{
                bgcolor: `grey.600`,
                width: 90,
                height: 108,
                borderRadius: "8px",
                display: "block",
              }}
            />
          </Stack>
          <Stack>
            <Box
              sx={{
                bgcolor: `grey.500`,
                width: 90,
                height: 104,
                borderRadius: "8px",
              }}
            />
          </Stack>
          <Stack>
            <Box
              sx={{
                bgcolor: `grey.400`,
                width: 90,
                height: 100,
                borderRadius: "8px",
              }}
            />
          </Stack>
          <Stack>
            <Box
              sx={{
                bgcolor: `grey.300`,
                width: 90,
                height: 96,
                borderRadius: "8px",
              }}
            />
          </Stack>
          <Stack>
            <Box
              sx={{
                bgcolor: `grey.200`,
                width: 90,
                height: 92,
                borderRadius: "8px",
              }}
            />
          </Stack>
          <Stack>
            <Box
              sx={{
                bgcolor: `grey.100`,
                width: 90,
                height: 88,
                borderRadius: "8px",
              }}
            />
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
}

export default WithSx;
