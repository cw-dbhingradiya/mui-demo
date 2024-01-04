import { useState } from "react";

import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import CheckIcon from "@mui/icons-material/Check";

import ComponentBlock from "../component-block";

// ----------------------------------------------------------------------

const COLORS = [
  "standard",
  "primary",
  "secondary",
  "info",
  "success",
  "warning",
  "error",
];

const SIZES = ["small", "medium", "large"];

// ----------------------------------------------------------------------

export default function ToggleButtons() {
  const [alignment, setAlignment] = useState("left");

  const [formats, setFormats] = useState(() => ["bold", "italic"]);

  const [view, setView] = useState("list");

  const [selected, setSelected] = useState(true);

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  const handleChange = (event, nextView) => {
    setView(nextView);
  };

  const viewContent = [
    <ToggleButton key="list" value="list">
      <FormatAlignLeftIcon />
    </ToggleButton>,
    <ToggleButton key="module" value="module">
      <FormatAlignCenterIcon />
    </ToggleButton>,
    <ToggleButton key="quilt" value="quilt">
      <FormatAlignRightIcon />
    </ToggleButton>,
  ];

  const alignContent = [
    <ToggleButton key="left" value="left">
      <FormatAlignLeftIcon />
    </ToggleButton>,
    <ToggleButton key="center" value="center">
      <FormatAlignCenterIcon />
    </ToggleButton>,
    <ToggleButton key="right" value="right">
      <FormatAlignRightIcon />
    </ToggleButton>,
  ];

  const formatContent = [
    <ToggleButton key="bold" value="bold">
      <FormatAlignLeftIcon />
    </ToggleButton>,
    <ToggleButton key="italic" value="italic">
      <FormatAlignCenterIcon />
    </ToggleButton>,
    <ToggleButton key="underlined" value="underlined">
      <FormatAlignRightIcon />
    </ToggleButton>,
    <ToggleButton key="color" value="color" disabled>
      <FormatAlignRightIcon />
    </ToggleButton>,
  ];

  return (
    <Masonry columns={3} spacing={4}>
      <ComponentBlock title="Exclusive selection">
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          color="primary"
        >
          {alignContent}
        </ToggleButtonGroup>
      </ComponentBlock>

      <ComponentBlock title="Multiple selection">
        <ToggleButtonGroup value={formats} onChange={handleFormat}>
          {formatContent}
        </ToggleButtonGroup>
      </ComponentBlock>

      <ComponentBlock title="Colors">
        {COLORS.map((color) => (
          <ToggleButtonGroup
            exclusive
            key={color}
            color={color}
            value={view}
            onChange={handleChange}
          >
            {viewContent}
          </ToggleButtonGroup>
        ))}

        <Box sx={{ display: "block", width: 1, height: 16 }} />

        {COLORS.map((color) => (
          <ToggleButton
            key={color}
            color={color}
            value="check"
            selected={selected}
            onChange={() => {
              setSelected(!selected);
            }}
          >
            <CheckIcon />
          </ToggleButton>
        ))}
      </ComponentBlock>

      <ComponentBlock title="Vertical & Standalone buttons">
        <ToggleButtonGroup
          orientation="vertical"
          value={view}
          exclusive
          onChange={handleChange}
          color="secondary"
        >
          {viewContent}
        </ToggleButtonGroup>

        <ToggleButton
          value="check"
          selected={selected}
          onChange={() => {
            setSelected(!selected);
          }}
        >
          <CheckIcon />
        </ToggleButton>
      </ComponentBlock>

      <ComponentBlock title="Sizes">
        {SIZES.map((size) => (
          <ToggleButton key={size} size={size} value="check">
            <CheckIcon />
          </ToggleButton>
        ))}

        {SIZES.map((size) => (
          <ToggleButtonGroup
            exclusive
            key={size}
            size={size}
            value={alignment}
            onChange={handleAlignment}
            color="primary"
          >
            {alignContent}
          </ToggleButtonGroup>
        ))}
      </ComponentBlock>

      <ComponentBlock title="Disabled">
        <ToggleButton value="check" disabled>
          <CheckIcon />
        </ToggleButton>

        <ToggleButton value="check" disabled selected>
          <CheckIcon />
        </ToggleButton>

        <ToggleButtonGroup value="left" exclusive>
          {alignContent}
        </ToggleButtonGroup>

        <ToggleButtonGroup disabled value="left" exclusive>
          {alignContent}
        </ToggleButtonGroup>
      </ComponentBlock>
    </Masonry>
  );
}
