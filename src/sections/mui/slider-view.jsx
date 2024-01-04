import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Stack, Typography } from "@mui/material";

const marks = [
  {
    value: 0,
    label: "0°C",
  },
  {
    value: 20,
    label: "20°C",
  },
  {
    value: 37,
    label: "37°C",
  },
  {
    value: 100,
    label: "100°C",
  },
];

function valuetext(value) {
  return `${value}°C`;
}

export default function SliderSizes() {
  return (
    <Box sx={{ width: 300 }} gap={5} display="flex" flexDirection="column">
      <Stack spacing={5}>
        <Typography variant="h4">Base</Typography>
        <Slider
          defaultValue={50}
          aria-label="Default"
          valueLabelDisplay="auto"
        />

        <Slider
          track="inverted"
          aria-labelledby="track-inverted-range-slider"
          getAriaValueText={valuetext}
          defaultValue={[20, 80]}
        />
      </Stack>

      <Stack spacing={5}>
        <Typography variant="h4">Marks</Typography>
        <Slider
          aria-label="Temperature"
          defaultValue={30}
          getAriaValueText={valuetext}
          valueLabelDisplay="off"
          step={10}
          marks
          min={10}
          max={110}
        />
        <Slider
          track="inverted"
          aria-labelledby="track-inverted-range-slider"
          defaultValue={[30, 80]}
          getAriaValueText={valuetext}
          valueLabelDisplay="off"
          step={10}
          marks
          min={10}
          max={100}
        />
      </Stack>

      <Stack gap={8}>
        <Typography variant="h4">State</Typography>
        <Slider
          disabled
          aria-label="Temperature"
          defaultValue={30}
          getAriaValueText={valuetext}
          valueLabelDisplay="off"
          step={10}
          marks
          min={10}
          max={110}
        />
        <Slider
          disabled
          track="inverted"
          aria-labelledby="track-inverted-range-slider"
          defaultValue={[30, 80]}
          getAriaValueText={valuetext}
          valueLabelDisplay="off"
          step={10}
          marks
          min={10}
          max={100}
        />
      </Stack>

      <Stack gap={8}>
        <Typography variant="h4">State</Typography>
        <Slider
          track="inverted"
          aria-labelledby="track-inverted-range-slider"
          defaultValue={[30, 80]}
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          step={10}
          marks
          min={10}
          max={100}
        />
        <Slider
          track="inverted"
          aria-labelledby="track-inverted-range-slider"
          defaultValue={[30, 80]}
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          step={10}
          marks
          min={10}
          max={100}
        />
      </Stack>

      <Stack gap={8}>
        <Typography variant="h4">Size</Typography>
        <Slider
          track="inverted"
          aria-labelledby="track-inverted-range-slider"
          defaultValue={[30, 80]}
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          step={10}
          marks
          min={10}
          max={100}
          size="small"
        />
        <Slider
          track="inverted"
          aria-labelledby="track-inverted-range-slider"
          defaultValue={[30, 80]}
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          step={10}
          marks
          min={10}
          max={100}
        />
      </Stack>
    </Box>
  );
}
