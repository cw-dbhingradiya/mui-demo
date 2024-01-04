import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";

import Chip from "./chip";

// ----------------------------------------------------------------------

export default function ChipView() {
  return (
    <>
      <Container sx={{ my: 10 }}>
        <Box
          gap={5}
          display="grid"
          gridTemplateColumns={{
            xs: "repeat(1, 1fr)",
            md: "repeat(3, 1fr)",
          }}
        >
          <Card>
            <CardHeader title="Filled" sx={{ padding: "24px 24px 0px" }} />
            <CardContent>
              <Chip />
            </CardContent>
          </Card>

          <Card>
            <CardHeader title="Outlined" sx={{ padding: "24px 24px 0px" }} />
            <CardContent>
              <Chip variant="outlined" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader title="Soft" sx={{ padding: "24px 24px 0px" }} />
            <CardContent>
              <Chip variant="soft" />
            </CardContent>
          </Card>
        </Box>
      </Container>
    </>
  );
}
