import PropTypes from "prop-types";
// import orderBy from "lodash/orderBy";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

// import ComponentHero from "./component-hero";
import ComponentCard from "./component-card";
import { muiNav, foundationNav } from "./config-navigation";

// ----------------------------------------------------------------------

export default function ComponentsView() {
  return (
    <>
      {/* <ComponentHero /> */}

      <Container sx={{ pt: 10, pb: 15 }}>
        <Stack spacing={3}>
          <Stack spacing={1}>
            <Typography variant="h5">MUI</Typography>
          </Stack>

          <Grid>
            {muiNav.map((item) => (
              <ComponentCard key={item.name} item={item} />
            ))}
          </Grid>
        </Stack>

        <Divider sx={{ borderStyle: "dashed", my: 8 }} />
      </Container>
    </>
  );
}

// ----------------------------------------------------------------------

function Grid({ children }) {
  return (
    <Box
      display="grid"
      gridTemplateColumns={{
        xs: "repeat(2, 1fr)",
        sm: "repeat(3, 1fr)",
        md: "repeat(4, 1fr)",
        lg: "repeat(6, 1fr)",
      }}
      gap={2.5}
    >
      {children}
    </Box>
  );
}

Grid.propTypes = {
  children: PropTypes.node,
};
