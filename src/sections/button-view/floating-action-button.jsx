import { m } from "framer-motion";

import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import Fab, { fabClasses } from "@mui/material/Fab";

import AccessibilityIcon from "@mui/icons-material/Accessibility";

import ComponentBlock from "../component-block";

// ----------------------------------------------------------------------

const COLORS = [
  "neutral",
  "primary",
  "secondary",
  "info",
  "success",
  "warning",
  "error",
];

const SIZES = ["small", "medium", "large"];

// ----------------------------------------------------------------------

export default function FloatingActionButton() {
  return (
    <Masonry
      columns={2}
      spacing={3}
      sx={{
        [`& .${fabClasses.root}`]: {
          textTransform: "capitalize",
        },
      }}
    >
      <ComponentBlock title="Default" spacing={2}>
        {COLORS.map((color) => (
          <Fab key={color} color={color}>
            <AccessibilityIcon />
          </Fab>
        ))}

        <Box sx={{ display: "block", width: 1, height: 2 }} />

        {COLORS.map((color) => (
          <Fab key={color} color={color} variant="extended">
            <AccessibilityIcon />
            {color}
          </Fab>
        ))}

        <Box sx={{ display: "block", width: 1, height: 2 }} />

        <Fab color="info" disabled>
          <AccessibilityIcon />
        </Fab>

        <Fab color="info" disabled variant="extended">
          <AccessibilityIcon disabled />
        </Fab>
      </ComponentBlock>

      <ComponentBlock title="Outlined" spacing={2}>
        {COLORS.map((color) => (
          <Fab key={color} color={color} variant="outlined">
            <AccessibilityIcon />
          </Fab>
        ))}

        <Box sx={{ display: "block", width: 1, height: 2 }} />

        {COLORS.map((color) => (
          <Fab key={color} color={color} variant="extended">
            <AccessibilityIcon />
            {color}
          </Fab>
        ))}

        <Box sx={{ display: "block", width: 1, height: 2 }} />

        <Fab color="info" disabled variant="outlined">
          <AccessibilityIcon />
        </Fab>

        <Fab color="info" disabled variant="outlinedExtended">
          <AccessibilityIcon disabled />
        </Fab>
      </ComponentBlock>

      <ComponentBlock title="Soft" spacing={2}>
        {COLORS.map((color) => (
          <Fab key={color} color={color} variant="soft">
            <AccessibilityIcon />
          </Fab>
        ))}

        <Box sx={{ display: "block", width: 1, height: 2 }} />

        {COLORS.map((color) => (
          <Fab key={color} color={color} variant="extended">
            <AccessibilityIcon />
            {color}
          </Fab>
        ))}

        <Box sx={{ display: "block", width: 1, height: 2 }} />

        <Fab color="info" disabled variant="soft">
          <AccessibilityIcon />
        </Fab>

        <Fab color="info" disabled variant="extended">
          <AccessibilityIcon disabled />
        </Fab>
      </ComponentBlock>

      <ComponentBlock title="Sizes" spacing={2}>
        {SIZES.map((size) => (
          <Fab key={size} size={size} color="info">
            <AccessibilityIcon />
          </Fab>
        ))}

        <Box sx={{ display: "block", width: 1, height: 2 }} />

        {SIZES.map((size) => (
          <Fab key={size} size={size} color="info" variant="extended">
            <AccessibilityIcon />
            {size}
          </Fab>
        ))}

        <Box sx={{ display: "block", width: 1, height: 2 }} />

        {SIZES.map((size) => (
          <Fab key={size} size={size} color="info" variant="soft">
            <AccessibilityIcon />
          </Fab>
        ))}

        <Box sx={{ display: "block", width: 1, height: 2 }} />

        {SIZES.map((size) => (
          <Fab key={size} size={size} color="info" variant="extended">
            <AccessibilityIcon />
            {size}
          </Fab>
        ))}

        <Box sx={{ display: "block", width: 1, height: 2 }} />

        {SIZES.map((size) => (
          <Fab key={size} size={size} color="info" variant="outlined">
            <AccessibilityIcon />
          </Fab>
        ))}

        <Box sx={{ display: "block", width: 1, height: 2 }} />

        {SIZES.map((size) => (
          <Fab key={size} size={size} color="info" variant="extended">
            <AccessibilityIcon />
            {size}
          </Fab>
        ))}
      </ComponentBlock>

      <ComponentBlock title="With Animate" spacing={2}>
        {SIZES.map((size) => (
          <Fab
            key={size}
            component={m.button}
            whileTap="tap"
            whileHover="hover"
            // variants={
            //   (size === "small" && varHover(1.1, 0.95)) ||
            //   (size === "large" && varHover(1.08, 0.99)) ||
            //   varHover()
            // }
            variant="extended"
            size={size}
            color="info"
          >
            <AccessibilityIcon />
            {size}
          </Fab>
        ))}
      </ComponentBlock>
    </Masonry>
  );
}
