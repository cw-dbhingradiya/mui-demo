import React from "react";
import { Box, Stack } from "@mui/system";
import Container from "@mui/material/Container";
import Masonry from "@mui/lab/Masonry";

import ComponentBlock from "../component-block";

function WithSx() {
  return (
    <div>
      {/* <h2>With Sx</h2> */}

      <Container sx={{ my: 10 }}>
        <Masonry columns={{ xs: 1, sm: 3 }} spacing={5}>
          <ComponentBlock title="Primary">
            <Box
              sx={{
                bgcolor: `primary.lighter`,
                width: 330,
                height: 70,
                borderRadius: 2,
                paddingLeft: 5,
              }}
            >
              Lighter <br />
              Hex #C8FAD6
            </Box>
            <Box
              sx={{
                bgcolor: `primary.light`,
                width: 330,
                height: 70,
                borderRadius: 2,
                paddingLeft: 5,
              }}
            >
              Light <br />
              Hex #5BE49B
            </Box>

            <Box
              sx={{
                bgcolor: `primary.main`,
                width: 330,
                height: 70,
                borderRadius: 2,
                paddingLeft: 5,
                color: "white",
              }}
            >
              Dark <br /> Hex #007867
            </Box>
            <Box
              sx={{
                bgcolor: `primary.dark`,
                width: 330,
                height: 70,
                borderRadius: 2,
                paddingLeft: 5,
                color: "white",
              }}
            >
              Dark <br /> Hex #007867
            </Box>
            <Box
              sx={{
                bgcolor: `primary.darker`,
                width: 330,
                height: 70,
                borderRadius: 2,
                paddingLeft: 5,
                color: "white",
              }}
            >
              Darker <br /> Hex #004B50
            </Box>
          </ComponentBlock>

          <ComponentBlock title="Secondary">
            <Box
              sx={{
                bgcolor: `secondary.lighter`,
                width: 330,
                height: 70,
                borderRadius: 2,
                paddingLeft: 5,
              }}
            >
              Lighter <br /> Hex #EFD6FF
            </Box>
            <Box
              sx={{
                bgcolor: `secondary.light`,
                width: 330,
                height: 70,
                borderRadius: 2,
                paddingLeft: 5,
                display: "block",
              }}
            >
              Light <br />
              Hex #C684FF
            </Box>
            <Box
              sx={{
                bgcolor: `secondary.main`,
                width: 330,
                height: 70,
                borderRadius: 2,
                paddingLeft: 5,
                color: "white",
              }}
            >
              Main <br />
              Hex #8E33FF
            </Box>
            <Box
              sx={{
                bgcolor: `secondary.dark`,
                width: 330,
                height: 70,
                borderRadius: 2,
                paddingLeft: 5,
                color: "white",
              }}
            >
              Dark <br />
              Hex #5119B7
            </Box>
            <Box
              sx={{
                bgcolor: `secondary.darker`,
                width: 330,
                height: 70,
                borderRadius: 2,
                paddingLeft: 5,
                color: "white",
              }}
            >
              Darker <br />
              Hex #27097A
            </Box>
          </ComponentBlock>

          <ComponentBlock title="Info">
            <Box
              sx={{
                bgcolor: `info.lighter`,
                width: 330,
                height: 70,
                borderRadius: 2,
                paddingLeft: 5,
              }}
            >
              Lighter <br />
              Hex #CAFDF5
            </Box>
            <Box
              sx={{
                bgcolor: `info.light`,
                width: 330,
                height: 70,
                borderRadius: 2,
                paddingLeft: 5,

                display: "block",
              }}
            >
              Light <br />
              Hex #61F3F3
            </Box>
            <Box
              sx={{
                bgcolor: `info.main`,
                width: 330,
                height: 70,
                borderRadius: 2,
                paddingLeft: 5,
                color: "white",
              }}
            >
              Main <br />
              Hex #00B8D9
            </Box>
            <Box
              sx={{
                bgcolor: `info.dark`,
                width: 330,
                height: 70,
                borderRadius: 2,
                paddingLeft: 5,
                color: "white",
              }}
            >
              Dark <br />
              Hex #006C9C
            </Box>
            <Box
              sx={{
                bgcolor: `info.darker`,
                width: 330,
                height: 70,
                borderRadius: 2,
                paddingLeft: 5,
                color: "white",
              }}
            >
              Darker <br />
              Hex #003768
            </Box>
          </ComponentBlock>

          <ComponentBlock title="Success">
            <Box
              sx={{
                bgcolor: `success.lighter`,
                width: 330,
                height: 70,
                borderRadius: 2,
                paddingLeft: 5,
              }}
            >
              Lighter <br /> Hex #D3FCD2
            </Box>
            <Box
              sx={{
                bgcolor: `success.light`,
                width: 330,
                height: 70,
                borderRadius: 2,
                paddingLeft: 5,

                display: "block",
              }}
            >
              Light <br /> Hex #77ED8B
            </Box>
            <Box
              sx={{
                bgcolor: `success.main`,
                width: 330,
                height: 70,
                borderRadius: 2,
                paddingLeft: 5,
                color: "white",
              }}
            >
              Main <br /> Hex #22C55E
            </Box>
            <Box
              sx={{
                bgcolor: `success.dark`,
                width: 330,
                height: 70,
                borderRadius: 2,
                paddingLeft: 5,
                color: "white",
              }}
            >
              Dark <br /> Hex #118D57
            </Box>
            <Box
              sx={{
                bgcolor: `success.darker`,
                width: 330,
                height: 70,
                borderRadius: 2,
                paddingLeft: 5,
                color: "white",
              }}
            >
              Darker <br />
              Hex #065E49
            </Box>
          </ComponentBlock>

          <ComponentBlock title="Warning">
            <Box
              sx={{
                bgcolor: `warning.lighter`,
                width: 330,
                height: 70,
                borderRadius: 2,
                paddingLeft: 5,
              }}
            >
              Lighter <br /> Hex #FFF5CC
            </Box>
            <Box
              sx={{
                bgcolor: `warning.light`,
                width: 330,
                height: 70,
                borderRadius: 2,
                paddingLeft: 5,

                display: "block",
              }}
            >
              Light <br /> Hex #FFD666
            </Box>
            <Box
              sx={{
                bgcolor: `warning.main`,
                width: 330,
                height: 70,
                borderRadius: 2,
                paddingLeft: 5,
                color: "white",
              }}
            >
              Main <br /> Hex #FFAB00
            </Box>
            <Box
              sx={{
                bgcolor: `warning.dark`,
                width: 330,
                height: 70,
                borderRadius: 2,
                paddingLeft: 5,
                color: "white",
              }}
            >
              Dark <br /> Hex #B76E00
            </Box>
            <Box
              sx={{
                bgcolor: `warning.darker`,
                width: 330,
                height: 70,
                borderRadius: 2,
                paddingLeft: 5,
                color: "white",
              }}
            >
              Darker <br /> Hex #7A4100
            </Box>
          </ComponentBlock>

          <ComponentBlock title="Error">
            <Box
              sx={{
                bgcolor: `error.lighter`,
                width: 330,
                height: 70,
                borderRadius: 2,
                paddingLeft: 5,
              }}
            >
              Lighter <br /> Hex #FFE9D5
            </Box>
            <Box
              sx={{
                bgcolor: `error.light`,
                width: 330,
                height: 70,
                borderRadius: 2,
                paddingLeft: 5,

                display: "block",
              }}
            >
              Light <br /> Hex #FFAC82
            </Box>
            <Box
              sx={{
                bgcolor: `error.main`,
                width: 330,
                height: 70,
                borderRadius: 2,
                paddingLeft: 5,
              }}
            >
              Main <br /> Hex #FF5630
            </Box>
            <Box
              sx={{
                bgcolor: `error.dark`,
                width: 330,
                height: 70,
                borderRadius: 2,
                paddingLeft: 5,
                color: "white",
              }}
            >
              Dark <br /> Hex #B71D18
            </Box>
            <Box
              sx={{
                bgcolor: `error.darker`,
                width: 330,
                height: 70,
                borderRadius: 2,
                paddingLeft: 5,
                color: "white",
              }}
            >
              Darker <br /> Hex #7A0916
            </Box>
          </ComponentBlock>

          <ComponentBlock title="Grey">
            <Box
              sx={{
                bgcolor: `grey.900`,
                width: 330,
                height: 70,
                borderRadius: 2,
                paddingLeft: 5,
                color: "white",
              }}
            >
              900 <br /> Hex #161C24
            </Box>

            <Box
              sx={{
                bgcolor: `grey.800`,
                width: 330,
                height: 70,
                borderRadius: 2,
                paddingLeft: 5,
                color: "white",
              }}
            >
              800 <br /> Hex #212B36
            </Box>

            <Box
              sx={{
                bgcolor: `grey.700`,
                width: 330,
                height: 70,
                borderRadius: 2,
                paddingLeft: 5,
                color: "white",
              }}
            >
              700 <br /> Hex #454F5B
            </Box>

            <Box
              sx={{
                bgcolor: `grey.600`,
                width: 330,
                height: 70,
                borderRadius: 2,
                paddingLeft: 5,
                color: "white",
              }}
            >
              600 <br /> Hex #637381
            </Box>

            <Box
              sx={{
                bgcolor: `grey.500`,
                width: 330,
                height: 70,
                borderRadius: 2,
                paddingLeft: 5,
              }}
            >
              500 <br /> Hex #919EAB
            </Box>

            <Box
              sx={{
                bgcolor: `grey.400`,
                width: 330,
                height: 70,
                borderRadius: 2,
                paddingLeft: 5,
              }}
            >
              400 <br /> Hex #C4CDD5
            </Box>

            <Box
              sx={{
                bgcolor: `grey.300`,
                width: 330,
                height: 70,
                borderRadius: 2,
                paddingLeft: 5,
              }}
            >
              300 <br /> Hex #DFE3E8
            </Box>

            <Box
              sx={{
                bgcolor: `grey.200`,
                width: 330,
                height: 70,
                borderRadius: 2,
                paddingLeft: 5,
              }}
            >
              200 <br /> Hex #F4F6F8
            </Box>

            <Box
              sx={{
                bgcolor: `grey.100`,
                width: 330,
                height: 70,
                borderRadius: 2,
                paddingLeft: 5,
              }}
            >
              100 <br /> Hex #F9FAFB
            </Box>
          </ComponentBlock>
        </Masonry>
      </Container>
    </div>
  );
}

export default WithSx;
