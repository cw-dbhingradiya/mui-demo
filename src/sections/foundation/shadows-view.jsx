import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { customShadows } from "../../theme/custom-shadows";

import ComponentBlock from "../component-block";

// ----------------------------------------------------------------------

export default function ShadowsView() {
  const theme = useTheme();

  const colorShadows = ["primary", "secondary", "info", "success", "warning", "error"];

  return (
    <>
      <Container sx={{ my: 10 }}>
        <Stack spacing={5}>
          <ComponentBlock title="Colors">
            {colorShadows.map((color) => (
              <ShadowCard
                key={color}
                title={color}
                sx={{
                  color: theme.palette[color].contrastText,
                  bgcolor: theme.palette[color].main,
                  boxShadow: customShadows[color],
                }}
              />
            ))}
          </ComponentBlock>
        </Stack>
      </Container>
    </>
  );
}

// ----------------------------------------------------------------------

function ShadowCard({ sx, title }) {
  return (
    <Paper
      sx={{
        padding: 3,
        margin: 1.5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: {
          xs: "calc((100%/2) - 24px)",
          sm: "calc((100%/4) - 24px)",
          md: "calc((100%/6) - 24px)",
        },
        ...sx,
      }}
    >
      <Typography variant="subtitle2" sx={{ textTransform: "capitalize" }}>
        {title}
      </Typography>
    </Paper>
  );
}

ShadowCard.propTypes = {
  sx: PropTypes.object,
  title: PropTypes.string,
};
