// import React from "react";
// import { Typography } from "@mui/material";
// import Stack from "@mui/material/Stack";
// import Container from "@mui/material/Container";
// import Grid from "@mui/material/Unstable_Grid2";

// const TYPOGRAPHYS = [
//   { label: "h1. Heading", variant: "h1" },
//   { label: "h2. Heading", variant: "h2" },
//   { label: "h3. Heading", variant: "h3" },
//   { label: "h4. Heading", variant: "h4" },
//   { label: "h5. Heading", variant: "h5" },
//   { label: "h6. Heading", variant: "h6" },
//   {
//     label: "subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur",
//     variant: "subtitle1",
//   },
//   {
//     label: "subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur",
//     variant: "subtitle2",
//   },
//   {
//     label:
//       "body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.",
//     variant: "body1",
//   },
//   {
//     label:
//       "body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.",
//     variant: "body2",
//   },
//   { label: "caption text", variant: "caption" },
//   { label: "overline text", variant: "overline" },
//   { label: "Button", variant: "button" },
// ];

// function TypographyFont() {
//   return (
//     // <div>
//     //   <h1>Typography</h1>
//     //   <Typography variant="h1">H1 - Almost before we knew it</Typography>
//     //   <Typography variant="h2">H2 - Almost before we knew it</Typography>
//     //   <Typography variant="h3">H3 - Almost before we knew it</Typography>
//     //   <Typography variant="h4">H4 - Almost before we knew it</Typography>
//     //   <Typography variant="h5">H5 - Almost before we knew it</Typography>
//     //   <Typography variant="h6">H6 - Almost before we knew it</Typography>
//     //   <Typography variant="subtitle1">subtitle1 - Almost before we knew it</Typography>
//     //   <Typography variant="subtitle2">subtitle2 - Almost before we knew it</Typography>
//     //   <Typography variant="body1">body1 - Almost before we knew it</Typography>
//     //   <Typography variant="body2">body2 - Almost before we knew it</Typography>
//     //   <Typography variant="caption">caption - Almost before we knew it</Typography>
//     //   <Typography variant="overline">overline - Almost before we knew it</Typography>
//     // </div>

//     <>
//       <Container sx={{ my: 10 }}>
//         <Grid xs={12} md={3}>
//           <Typography variant="h6">Default Text</Typography>
//         </Grid>

//         <Grid xs={12} md={9}>
//           <Stack spacing={3}>
//             {TYPOGRAPHYS.map((font) => (
//               <Stack key={font.variant} font={font} />
//             ))}
//           </Stack>
//         </Grid>
//       </Container>
//     </>
//   );
// }

// export default TypographyFont;

import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";

// import { paths } from "src/routes/paths";

// import { useTypography } from "src/components/text-max-line";

// ----------------------------------------------------------------------

const TYPOGRAPHYS = [
  { label: "h1. Heading", variant: "h1" },
  { label: "h2. Heading", variant: "h2" },
  { label: "h3. Heading", variant: "h3" },
  { label: "h4. Heading", variant: "h4" },
  { label: "h5. Heading", variant: "h5" },
  { label: "h6. Heading", variant: "h6" },
  {
    label: "subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur",
    variant: "subtitle1",
  },
  {
    label: "subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur",
    variant: "subtitle2",
  },
  {
    label:
      "body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.",
    variant: "body1",
  },
  {
    label:
      "body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.",
    variant: "body2",
  },
  { label: "caption text", variant: "caption" },
  { label: "overline text", variant: "overline" },
  { label: "Button", variant: "button" },
];

// ----------------------------------------------------------------------

export default function TypographyView() {
  return (
    <>
      <Container sx={{ my: 10 }}>
        <Grid container rowSpacing={5}>
          <Grid xs={12} md={3}>
            <Typography variant="h6">Default Text</Typography>
          </Grid>

          <Grid xs={12} md={9}>
            <Stack spacing={3}>
              {TYPOGRAPHYS.map((font) => (
                <BlockVariant key={font.variant} font={font} />
              ))}
            </Stack>
          </Grid>

          <Grid xs={12} md={3}>
            <Typography variant="h6">Colors Text</Typography>
          </Grid>

          <Grid xs={12} md={9}>
            <Stack spacing={3}>
              {["primary", "secondary", "disabled"].map((color) => (
                <Paper key={color} variant="outlined" sx={{ p: 3, borderRadius: 1 }}>
                  <Typography gutterBottom variant="subtitle1" sx={{ color: `text.${color}` }}>
                    text {color}
                  </Typography>

                  <Typography gutterBottom variant="body2" sx={{ color: `text.${color}` }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </Typography>
                </Paper>
              ))}

              {["primary", "secondary", "info", "warning", "error"].map((color) => (
                <Paper key={color} variant="outlined" sx={{ p: 3, borderRadius: 1 }}>
                  <Typography gutterBottom variant="subtitle1" sx={{ color: `${color}.main` }}>
                    {color}
                  </Typography>

                  <Typography gutterBottom variant="body2" sx={{ color: `${color}.main` }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </Typography>
                </Paper>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

// ----------------------------------------------------------------------

function BlockVariant({ font }) {
  const { variant, label } = font;

  //   const { fontSize, lineHeight, fontWeight, letterSpacing = 0 } = useTypography(variant);

  return (
    <Paper variant="outlined" sx={{ p: 3, borderRadius: 1 }}>
      <Typography variant={variant} gutterBottom mb={0}>
        {label}
      </Typography>
    </Paper>
  );
}

BlockVariant.propTypes = {
  font: PropTypes.object,
};
