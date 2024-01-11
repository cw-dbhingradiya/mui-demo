import * as React from "react";
import Slider from "@mui/material/Slider";
import Container from "@mui/material/Container";
import Masonry from "@mui/lab/Masonry";
import ComponentBlock from "../component-block";

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
    <Container sx={{ my: 10 }}>
      <Masonry columns={{ xs: 1, md: 3 }} spacing={3}>
        <ComponentBlock title="Base">
          <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
          <Slider track="inverted" aria-labelledby="track-inverted-range-slider" getAriaValueText={valuetext} defaultValue={[20, 80]} />
        </ComponentBlock>

        <ComponentBlock title="Mark">
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
        </ComponentBlock>

        <ComponentBlock title="Size">
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
        </ComponentBlock>

        <ComponentBlock title="Disabled">
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
        </ComponentBlock>

        <ComponentBlock title="State">
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
        </ComponentBlock>
      </Masonry>
    </Container>
  );
}
