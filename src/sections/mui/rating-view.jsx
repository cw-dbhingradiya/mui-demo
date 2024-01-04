import * as React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import StarIcon from "@mui/icons-material/Star";
import DriveEtaIcon from "@mui/icons-material/DriveEta";

import { Box, Typography } from "@mui/material";

export default function HalfRating() {
  return (
    <Stack gap={10}>
      <Stack spacing={5} direction="row">
        <Rating
          name="default-rating"
          emptyIcon={<StarIcon />}
          defaultValue={null}
        />
        <Rating
          name="one-rating"
          emptyIcon={<StarIcon />}
          defaultValue={1}
          color="warning"
        />
        <Rating
          name="two-rating"
          emptyIcon={<StarIcon />}
          defaultValue={2}
          color="warning"
        />
        <Rating name="three-rating" emptyIcon={<StarIcon />} defaultValue={3} />
        <Rating name="four-rating" emptyIcon={<StarIcon />} defaultValue={4} />
        <Rating name="five-rating" emptyIcon={<StarIcon />} defaultValue={5} />
      </Stack>

      <Box display="flex" alignItems="center">
        <Rating name="enabled" emptyIcon={<StarIcon />} defaultValue={null} />
        <Typography component="legend" pr={5}>
          label
        </Typography>
        <Rating name="enabled" emptyIcon={<StarIcon />} defaultValue={4} />
        <Typography component="legend">label</Typography>
      </Box>

      <Box display="flex" alignItems="center">
        <Typography component="legend">Enabled</Typography>
        <Rating name="enabled" emptyIcon={<StarIcon />} defaultValue={4} />
        <Typography component="legend" pl={5}>
          Disabled
        </Typography>
        <Rating
          name="disabled"
          emptyIcon={<StarIcon />}
          defaultValue={4}
          disabled
        />
      </Box>

      <Box display="flex" alignItems="center">
        <Typography component="legend">Custom Icon</Typography>
        <Rating
          name="enabled"
          icon={<DriveEtaIcon />}
          emptyIcon={<DriveEtaIcon />}
          defaultValue={4}
          precision={0.5}
          sx={{
            color: "info.main",
            "&:hover": { color: "info.dark" },
          }}
        />
      </Box>
    </Stack>
  );
}
