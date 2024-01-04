import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import LoadingButton from "@mui/lab/LoadingButton";
import Button, { buttonClasses } from "@mui/material/Button";

import AccessibilityIcon from "@mui/icons-material/Accessibility";

import ComponentBlock from "../../component-block";

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

export default function ButtonVariant({ variant = "text" }) {
  return (
    <Masonry
      columns={2}
      spacing={3}
      sx={{
        [`& .${buttonClasses.root}`]: {
          textTransform: "capitalize",
        },
      }}
    >
      <ComponentBlock title="Base" spacing={1}>
        <Button variant={variant} color="neutral">
          Default
        </Button>

        <Button variant={variant} color="primary">
          Primary
        </Button>

        <Button variant={variant} color="secondary">
          Secondary
        </Button>

        <Button variant={variant} disabled>
          Disabled
        </Button>

        <Button variant={variant}>Link</Button>
      </ComponentBlock>

      <ComponentBlock title="Colors" spacing={1}>
        {COLORS.map((color) => (
          <Button key={color} variant={variant} color={color}>
            {color === "inherit" ? "default" : color}
          </Button>
        ))}
      </ComponentBlock>

      <ComponentBlock title="With Icon & Loading" spacing={1}>
        <Button
          variant={variant}
          color="primary"
          startIcon={<AccessibilityIcon />}
        >
          Icon Left
        </Button>

        <Button
          variant={variant}
          color="primary"
          endIcon={<AccessibilityIcon />}
        >
          Icon Right
        </Button>

        <LoadingButton loading variant={variant}>
          Submit
        </LoadingButton>

        <LoadingButton loading loadingIndicator="Loading..." variant={variant}>
          Fetch data
        </LoadingButton>

        <LoadingButton
          loading
          size="large"
          loadingPosition="start"
          startIcon={<AccessibilityIcon />}
          variant={variant}
          color="neutral"
        >
          Start
        </LoadingButton>

        <LoadingButton
          loading
          size="large"
          loadingPosition="end"
          endIcon={<AccessibilityIcon />}
          variant={variant}
        >
          End
        </LoadingButton>
      </ComponentBlock>

      <ComponentBlock title="Sizes" spacing={1}>
        {SIZES.map((size) => (
          <Button key={size} variant={variant} color="info" size={size}>
            {size}
          </Button>
        ))}

        <Box sx={{ width: 1, height: 16 }} />

        {SIZES.map((size) => (
          <LoadingButton
            key={size}
            loading
            size={size}
            loadingPosition="start"
            startIcon={<AccessibilityIcon />}
            variant={variant}
          >
            {size}
          </LoadingButton>
        ))}

        <Box sx={{ width: 1, height: 16 }} />

        {SIZES.map((size) => (
          <LoadingButton
            key={size}
            loading
            size={size}
            loadingPosition="end"
            endIcon={<AccessibilityIcon />}
            variant={variant}
          >
            {size}
          </LoadingButton>
        ))}
      </ComponentBlock>
    </Masonry>
  );
}

ButtonVariant.propTypes = {
  variant: PropTypes.string,
};
