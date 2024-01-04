// import * as React from "react";
// import Stack from "@mui/material/Stack";
// import Box from "@mui/material/Stack";
// import Paper from "@mui/material/Stack";
// import Button from "@mui/material/Button";
// import Fab from "@mui/material/Fab";
// import IconButton from "@mui/material/IconButton";
// import ToggleButton from "@mui/material/ToggleButton";
// import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
// import { Typography } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";
// import SendIcon from "@mui/icons-material/Send";
// import AccessibilityIcon from "@mui/icons-material/Accessibility";
// import EditIcon from "@mui/icons-material/Edit";
// import SettingsIcon from "@mui/icons-material/Settings";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import CloudIcon from "@mui/icons-material/Cloud";

// const COLORS = [
//   "neutral",
//   "primary",
//   "secondary",
//   "info",
//   "success",
//   "warning",
//   "error",
// ];

// const SIZES = ["small", "medium", "large"];

// export default function ColorButtons() {
//   const [alignment, setAlignment] = React.useState("web");
//   const [secondary, setSecondary] = React.useState("secondary");
//   const [small, setSmall] = React.useState("small");
//   const [medium, setMedium] = React.useState("medium");
//   const [large, setLarge] = React.useState("large");
//   const [view, setView] = React.useState("list");

//   const ListHandleChange = (event, nextView) => {
//     setView(nextView);
//   };

//   const handleChange = (event, newAlignment) => {
//     setAlignment(newAlignment);
//   };

//   const secondaryHandleChange = (event, newAlignment) => {
//     setSecondary(newAlignment);
//   };

//   const smallHandleChange = (event, newAlignment) => {
//     setSmall(newAlignment);
//   };

//   const mediumHandleChange = (event, newAlignment) => {
//     setMedium(newAlignment);
//   };

//   const largeHandleChange = (event, newAlignment) => {
//     setLarge(newAlignment);
//   };

//   return (
//     <Paper gap={6}>
//       {/* Contained Button */}
//       <Box gap={5}>
//         <Typography variant="h5">Contained Button</Typography>
//         <Stack direction="row" gap={6} alignItems="center">
//           <Typography>Color</Typography>

//           <Stack title="Colors" spacing={1} flexDirection="unset">
//             {COLORS.map((color) => (
//               <Button
//                 key={color}
//                 color={color}
//                 size="large"
//                 variant="contained"
//               >
//                 {color === "neutral" ? "default" : color}
//               </Button>
//             ))}
//           </Stack>
//         </Stack>
//         <Stack direction="row" gap={6} alignItems="center">
//           <Typography>States</Typography>
//           <Button variant="contained" size="large" color="primary">
//             Enabled
//           </Button>
//           <Button
//             variant="contained"
//             color="primary"
//             size="large"
//             sx={{
//               "&:hover": {
//                 backgroundColor: "#007867",
//                 boxShadow: "0px 8px 16px 0px rgba(0, 167, 111, 0.24)",
//               },
//             }}
//           >
//             Hover
//           </Button>
//           <Button variant="contained" size="large" color="error" disabled>
//             Disabled
//           </Button>
//         </Stack>
//         <Stack direction="row" gap={6} alignItems="center">
//           <Typography>Icon</Typography>
//           <Button
//             variant="contained"
//             size="large"
//             color="primary"
//             startIcon={<DeleteIcon />}
//           >
//             Start Icon
//           </Button>
//           <Button
//             variant="contained"
//             size="large"
//             color="primary"
//             endIcon={<SendIcon />}
//           >
//             End Icon
//           </Button>
//         </Stack>
//         <Stack direction="row" gap={6} alignItems="center">
//           <Typography>Size</Typography>

//           <Stack spacing={1} flexDirection="unset">
//             {SIZES.map((size) => (
//               <Button key={size} size={size} variant="contained">
//                 {size === "neutral" ? "default" : size}
//               </Button>
//             ))}
//           </Stack>
//         </Stack>
//       </Box>

//       {/*  Outlined Button */}
//       <Box gap={5}>
//         <Typography variant="h5">Outlined Button</Typography>
//         <Stack direction="row" gap={6} alignItems="center">
//           <Typography>Color</Typography>
//           <Stack title="Colors" spacing={1} flexDirection="unset">
//             {COLORS.map((color) => (
//               <Button key={color} color={color} size="large" variant="outlined">
//                 {color === "neutral" ? "default" : color}
//               </Button>
//             ))}
//           </Stack>
//         </Stack>
//         <Stack direction="row" gap={6} alignItems="center">
//           <Typography>States</Typography>
//           <Button variant="outlined" size="large" color="primary">
//             Enabled
//           </Button>
//           <Button
//             variant="outlined"
//             size="large"
//             color="primary"
//             sx={{
//               backgroundColor: "#00A76F14",
//               color: "#00A76F",
//               "&:hover": {
//                 backgroundColor: "#007867",
//                 boxShadow: "0px 8px 16px 0px rgba(0, 167, 111, 0.24)",
//                 color: "#fff",
//               },
//             }}
//           >
//             Hover
//           </Button>
//           <Button variant="outlined" size="large" color="error" disabled>
//             Disabled
//           </Button>
//         </Stack>
//         <Stack direction="row" gap={6} alignItems="center">
//           <Typography>Icon</Typography>
//           <Button
//             variant="outlined"
//             size="large"
//             color="primary"
//             startIcon={<DeleteIcon />}
//           >
//             Start Icon
//           </Button>
//           <Button
//             variant="outlined"
//             size="large"
//             color="primary"
//             endIcon={<SendIcon />}
//           >
//             End Icon
//           </Button>
//         </Stack>
//         <Stack direction="row" gap={6} alignItems="center">
//           <Typography>Size</Typography>
//           <Stack spacing={1} flexDirection="unset">
//             {SIZES.map((size) => (
//               <Button key={size} size={size} variant="outlined">
//                 {size === "neutral" ? "default" : size}
//               </Button>
//             ))}
//           </Stack>
//         </Stack>
//       </Box>

//       {/*  Text Button */}
//       <Box gap={5}>
//         <Typography variant="h5">Text Button</Typography>
//         <Stack direction="row" gap={6} alignItems="center">
//           <Typography>Color</Typography>
//           <Stack title="Colors" spacing={1} flexDirection="unset">
//             {COLORS.map((color) => (
//               <Button key={color} color={color} size="large" variant="text">
//                 {color === "neutral" ? "default" : color}
//               </Button>
//             ))}
//           </Stack>
//         </Stack>
//         <Stack direction="row" gap={6} alignItems="center">
//           <Typography>States</Typography>
//           <Button variant="text" size="large" color="primary">
//             Enabled
//           </Button>
//           <Button
//             variant="text"
//             size="large"
//             color="primary"
//             sx={{
//               backgroundColor: "#00A76F14",
//               color: "#00A76F",
//               "&:hover": {
//                 backgroundColor: "#007867",
//                 boxShadow: "0px 8px 16px 0px rgba(0, 167, 111, 0.24)",
//                 color: "#fff",
//               },
//             }}
//           >
//             Hover
//           </Button>
//           <Button variant="text" size="large" color="error" disabled>
//             Disabled
//           </Button>
//         </Stack>
//         <Stack direction="row" gap={6} alignItems="center">
//           <Typography>Icon</Typography>
//           <Button
//             variant="text"
//             size="large"
//             color="primary"
//             startIcon={<DeleteIcon />}
//           >
//             Start Icon
//           </Button>
//           <Button
//             variant="text"
//             size="large"
//             color="primary"
//             endIcon={<SendIcon />}
//           >
//             End Icon
//           </Button>
//         </Stack>
//         <Stack direction="row" gap={6} alignItems="center">
//           <Typography>Size</Typography>
//           <Stack spacing={1} flexDirection="unset">
//             {SIZES.map((size) => (
//               <Button key={size} size={size} variant="text">
//                 {size === "neutral" ? "default" : size}
//               </Button>
//             ))}
//           </Stack>
//         </Stack>
//       </Box>

//       {/*  Icon Button */}
//       <Box gap={5}>
//         <Typography variant="h5">Icon Button</Typography>
//         <Stack direction="row" gap={6} alignItems="center">
//           <Typography>Color</Typography>
//           <IconButton aria-label="delete">
//             <AccessibilityIcon />
//           </IconButton>
//           <Stack spacing={1} flexDirection="unset">
//             {COLORS.map((color) => (
//               <IconButton key={color} color={color} aria-label="delete">
//                 <AccessibilityIcon />
//               </IconButton>
//             ))}
//           </Stack>
//         </Stack>
//         <Stack direction="row" gap={6} alignItems="center">
//           <Typography>States</Typography>
//           <IconButton variant="text" color="primary">
//             <AccessibilityIcon />
//           </IconButton>
//           <IconButton
//             variant="text"
//             color="primary"
//             sx={{
//               backgroundColor: "#00A76F14",
//               "&:hover": {
//                 backgroundColor: "primary.dark",
//                 boxShadow: "0px 8px 16px 0px rgba(0, 167, 111, 0.24)",
//                 color: "#fff",
//               },
//             }}
//           >
//             <AccessibilityIcon />
//           </IconButton>
//           <IconButton variant="text" color="error" disabled>
//             <AccessibilityIcon />
//           </IconButton>
//         </Stack>
//         <Stack direction="row" gap={6} alignItems="center">
//           <Typography>Size</Typography>
//           <IconButton aria-label="delete" size="small">
//             <AccessibilityIcon fontSize="inherit" />
//           </IconButton>
//           <IconButton aria-label="delete" size="large">
//             <AccessibilityIcon />
//           </IconButton>
//           <IconButton aria-label="delete" size="large">
//             <AccessibilityIcon fontSize="inherit" />
//           </IconButton>
//         </Stack>
//       </Box>

//       {/*  Floating Action Button */}
//       <Box gap={5}>
//         <Typography variant="h5">Floating Action Button</Typography>
//         {/* color */}
//         <Stack direction="row" gap={6} alignItems="center">
//           <Typography>Color</Typography>
//           <Stack spacing={1} flexDirection="unset">
//             {COLORS.map((color) => (
//               <Fab key={color} color={color} variant="contained">
//                 <EditIcon />
//               </Fab>
//             ))}
//           </Stack>
//           {/*  variant - extended */}
//           <Stack spacing={1} flexDirection="unset">
//             {COLORS.map((color) => (
//               <Fab key={color} color={color} variant="extended">
//                 {color}
//               </Fab>
//             ))}
//           </Stack>
//         </Stack>

//         {/* States */}
//         <Stack direction="row" gap={6} alignItems="center">
//           <Typography>States</Typography>

//           <Fab
//             color="primary"
//             aria-label="add"
//             sx={{
//               boxShadow: "0px 8px 16px 0px rgba(0, 167, 111, 0.24)",
//             }}
//           >
//             <EditIcon />
//           </Fab>

//           <Fab color="primary" aria-label="add">
//             <EditIcon />
//           </Fab>
//           <Fab color="primary" aria-label="add" disabled>
//             <EditIcon />
//           </Fab>
//           <Fab
//             color="primary"
//             variant="extended"
//             aria-label="add"
//             sx={{
//               boxShadow: "0px 8px 16px 0px rgba(0, 167, 111, 0.24)",
//             }}
//           >
//             Enabled
//           </Fab>

//           <Fab color="primary" variant="extended" aria-label="add">
//             Hovered
//           </Fab>
//           <Fab color="primary" variant="extended" aria-label="add" disabled>
//             Disabled
//           </Fab>
//         </Stack>

//         {/* Size */}
//         <Stack direction="row" gap={6} alignItems="center">
//           <Typography>Size</Typography>
//           <Stack spacing={1} flexDirection="unset">
//             {SIZES.map((size) => (
//               <Fab key={size} size={size} color="primary" variant="contained">
//                 <EditIcon />
//               </Fab>
//             ))}
//           </Stack>

//           <Stack spacing={1} flexDirection="unset">
//             {SIZES.map((size) => (
//               <Fab key={size} size={size} color="primary" variant="extended">
//                 {size}
//               </Fab>
//             ))}
//           </Stack>
//         </Stack>
//       </Box>

//       {/* Toggle Buttons */}
//       <Box gap={5}>
//         <Typography variant="h5">Toggle Buttons</Typography>

//         {/* Color */}
//         <Stack direction="row" gap={6} alignItems="center">
//           <Typography>Color</Typography>
//           <ToggleButton value="Edit" color="neutralBorder">
//             <EditIcon />
//           </ToggleButton>
//           <ToggleButton value="Edit" color="primary" selected>
//             <EditIcon />
//           </ToggleButton>
//           <ToggleButton value="Edit" color="secondary" selected>
//             <EditIcon />
//           </ToggleButton>
//           <ToggleButton value="Edit" color="info" selected>
//             <EditIcon />
//           </ToggleButton>
//           <ToggleButton value="Edit" color="success" selected>
//             <EditIcon />
//           </ToggleButton>
//           <ToggleButton value="Edit" color="warning" selected>
//             <EditIcon />
//           </ToggleButton>
//           <ToggleButton value="Edit" color="error" selected>
//             <EditIcon />
//           </ToggleButton>
//         </Stack>

//         {/* States */}
//         <Stack direction="row" gap={6} alignItems="center">
//           <Typography>States</Typography>
//           <ToggleButton value="Edit" color="primary" size="small" selected>
//             <EditIcon />
//           </ToggleButton>
//           <ToggleButton
//             value="Edit"
//             color="primary"
//             selected
//             sx={{
//               "&:hover": {
//                 backgroundColor: "#007867",
//                 boxShadow: "0px 8px 16px 0px rgba(0, 167, 111, 0.24)",
//               },
//             }}
//           >
//             <EditIcon />
//           </ToggleButton>
//           <ToggleButton value="Edit" disabled>
//             <EditIcon />
//           </ToggleButton>
//         </Stack>

//         {/* Size */}
//         <Stack direction="row" gap={6} alignItems="center">
//           <Typography>Size</Typography>
//           <ToggleButton value="Edit" color="primary" size="small" selected>
//             <EditIcon />
//           </ToggleButton>
//           <ToggleButton value="Edit" color="primary" selected>
//             <EditIcon />
//           </ToggleButton>
//           <ToggleButton value="Edit" color="primary" size="large" selected>
//             <EditIcon />
//           </ToggleButton>
//         </Stack>
//       </Box>

//       {/* Toggle Buttons Group */}
//       <Box gap={5}>
//         <Typography variant="h5">Toggle Buttons Group</Typography>

//         {/* Color */}
//         <Stack direction="row" gap={6} alignItems="center">
//           <Typography>Color</Typography>
//           <ToggleButtonGroup
//             color="primary"
//             value={alignment}
//             exclusive
//             onChange={handleChange}
//             aria-label="Platform"
//           >
//             <ToggleButton value="web">
//               <CloudIcon />
//             </ToggleButton>
//             <ToggleButton value="android">
//               <SettingsIcon />
//             </ToggleButton>
//             <ToggleButton value="ios">
//               <NotificationsIcon />
//             </ToggleButton>
//           </ToggleButtonGroup>

//           <ToggleButtonGroup
//             color="secondary"
//             value={secondary}
//             exclusive
//             onChange={secondaryHandleChange}
//             aria-label="Platform"
//           >
//             <ToggleButton value="secondary">
//               <CloudIcon />
//             </ToggleButton>
//             <ToggleButton value="android">
//               <SettingsIcon />
//             </ToggleButton>
//             <ToggleButton value="ios">
//               <NotificationsIcon />
//             </ToggleButton>
//           </ToggleButtonGroup>
//         </Stack>

//         {/* Size */}
//         <Stack direction="row" gap={6} alignItems="center">
//           <Typography>Size</Typography>
//           <ToggleButtonGroup
//             color="primary"
//             size="small"
//             value={small}
//             exclusive
//             onChange={smallHandleChange}
//             aria-label="Platform"
//           >
//             <ToggleButton value="web">
//               <CloudIcon />
//             </ToggleButton>
//             <ToggleButton value="android">
//               <SettingsIcon />
//             </ToggleButton>
//             <ToggleButton value="ios">
//               <NotificationsIcon />
//             </ToggleButton>
//           </ToggleButtonGroup>

//           <ToggleButtonGroup
//             color="primary"
//             value={medium}
//             exclusive
//             onChange={mediumHandleChange}
//             aria-label="Platform"
//           >
//             <ToggleButton value="secondary">
//               <CloudIcon />
//             </ToggleButton>
//             <ToggleButton value="android">
//               <SettingsIcon />
//             </ToggleButton>
//             <ToggleButton value="ios">
//               <NotificationsIcon />
//             </ToggleButton>
//           </ToggleButtonGroup>

//           <ToggleButtonGroup
//             color="primary"
//             size="large"
//             value={large}
//             exclusive
//             onChange={largeHandleChange}
//             aria-label="Platform"
//           >
//             <ToggleButton value="secondary">
//               <CloudIcon />
//             </ToggleButton>
//             <ToggleButton value="android">
//               <SettingsIcon />
//             </ToggleButton>
//             <ToggleButton value="ios">
//               <NotificationsIcon />
//             </ToggleButton>
//           </ToggleButtonGroup>
//         </Stack>

//         {/* Label */}
//         <Stack direction="row" gap={6} alignItems="center">
//           <Typography>Label</Typography>
//           <ToggleButtonGroup
//             color="primary"
//             size="small"
//             value={small}
//             exclusive
//             onChange={smallHandleChange}
//             aria-label="Platform"
//           >
//             <ToggleButton value="web">
//               <CloudIcon /> <Box>Label</Box>
//             </ToggleButton>
//             <ToggleButton value="android">
//               <SettingsIcon /> <Box>Label</Box>
//             </ToggleButton>
//             <ToggleButton value="ios">
//               <NotificationsIcon /> <Box>Label</Box>
//             </ToggleButton>
//           </ToggleButtonGroup>

//           <ToggleButtonGroup
//             color="secondary"
//             value={medium}
//             exclusive
//             onChange={mediumHandleChange}
//             aria-label="Platform"
//           >
//             <ToggleButton value="secondary">
//               <CloudIcon /> <Box>Label</Box>
//             </ToggleButton>
//             <ToggleButton value="android">
//               <SettingsIcon /> <Box>Label</Box>
//             </ToggleButton>
//             <ToggleButton value="ios">
//               <NotificationsIcon /> <Box>Label</Box>
//             </ToggleButton>
//           </ToggleButtonGroup>
//         </Stack>

//         {/* Vertical */}
//         <Stack direction="row" gap={6}>
//           <Typography>Vertical</Typography>
//           <ToggleButtonGroup
//             color="primary"
//             size="large"
//             orientation="vertical"
//             value={view}
//             exclusive
//             onChange={ListHandleChange}
//           >
//             <ToggleButton value="list" aria-label="list">
//               <CloudIcon />
//             </ToggleButton>
//             <ToggleButton value="module" aria-label="module">
//               <SettingsIcon />
//             </ToggleButton>
//             <ToggleButton value="quilt" aria-label="quilt">
//               <NotificationsIcon />
//             </ToggleButton>
//           </ToggleButtonGroup>

//           <ToggleButtonGroup
//             color="primary"
//             orientation="vertical"
//             value={view}
//             exclusive
//             onChange={ListHandleChange}
//           >
//             <ToggleButton value="list" aria-label="list">
//               <CloudIcon />
//             </ToggleButton>
//             <ToggleButton value="module" aria-label="module">
//               <SettingsIcon />
//             </ToggleButton>
//             <ToggleButton value="quilt" aria-label="quilt">
//               <NotificationsIcon />
//             </ToggleButton>
//           </ToggleButtonGroup>

//           <ToggleButtonGroup
//             color="primary"
//             size="small"
//             orientation="vertical"
//             value={view}
//             exclusive
//             onChange={ListHandleChange}
//           >
//             <ToggleButton value="list" aria-label="list">
//               <CloudIcon />
//             </ToggleButton>
//             <ToggleButton value="module" aria-label="module">
//               <SettingsIcon />
//             </ToggleButton>
//             <ToggleButton value="quilt" aria-label="quilt">
//               <NotificationsIcon />
//             </ToggleButton>
//           </ToggleButtonGroup>
//         </Stack>
//       </Box>
//     </Paper>
//   );
// }

import ButtonView from "../sections/button-view";

// ----------------------------------------------------------------------

export default function ButtonPage() {
  return (
    <>
      <ButtonView />
    </>
  );
}
