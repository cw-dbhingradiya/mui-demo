import { m } from "framer-motion";

import Masonry from "@mui/lab/Masonry";
import IconButton from "@mui/material/IconButton";
import AccessibilityIcon from "@mui/icons-material/Accessibility";

import { varHover } from "../../Components/animate";

import ComponentBlock from "../component-block";

// ----------------------------------------------------------------------

const COLORS = [
  "inherit",
  "default",
  "primary",
  "secondary",
  "info",
  "success",
  "warning",
  "error",
];

const SIZES = ["small", "medium", "large"];

// ----------------------------------------------------------------------

export default function IconButtons() {
  return (
    <Masonry columns={2} spacing={3}>
      <ComponentBlock title="Base">
        <IconButton color="inherit">
          <AccessibilityIcon />
        </IconButton>

        <IconButton>
          <AccessibilityIcon />
        </IconButton>

        <IconButton color="primary">
          <AccessibilityIcon />
        </IconButton>

        <IconButton color="secondary">
          <AccessibilityIcon />
        </IconButton>

        <IconButton disabled>
          <AccessibilityIcon />
        </IconButton>
      </ComponentBlock>

      <ComponentBlock title="Colors">
        {COLORS.map((color) => (
          <IconButton key={color} color={color}>
            <AccessibilityIcon />
          </IconButton>
        ))}
      </ComponentBlock>

      <ComponentBlock title="Sizes">
        {SIZES.map((size) => (
          <IconButton key={size} size={size} color="info">
            <AccessibilityIcon />
          </IconButton>
        ))}
      </ComponentBlock>

      <ComponentBlock title="With Animate">
        {SIZES.map((size) => (
          <IconButton
            key={size}
            component={m.button}
            whileTap="tap"
            whileHover="hover"
            variants={
              (size === "small" && varHover(1.1, 0.95)) ||
              (size === "large" && varHover(1.08, 0.99)) ||
              varHover()
            }
            size={size}
            color="error"
          >
            <AccessibilityIcon fontSize="inherit" />
          </IconButton>
        ))}
      </ComponentBlock>
    </Masonry>
  );
}
