// import * as React from "react";
// import Chip from "@mui/material/Chip";
// import Stack from "@mui/material/Stack";
// import Avatar from "@mui/material/Avatar";
// import { Box, Typography } from "@mui/material";
// import DriveEtaIcon from "@mui/icons-material/DriveEta";

// export default function BasicChips() {
//   const handleDelete = () => {
//     console.info("You clicked the delete icon.");
//   };
//   return (
//     <Stack gap={8}>
//       <Stack gap={5}>
//         <Typography variant="h4">Filled</Typography>
//         <Stack direction="row">
//           <Typography pr={5}>Text</Typography>
//           <Chip label="Default" variant="filled" color="buttonDefault" />
//           <Chip label="Primary" color="primary" />
//           <Chip label="Secondary" color="secondary" />
//           <Chip label="Info" color="info" />
//           <Chip label="Success" color="success" />
//           <Chip label="Warning" color="warning" />
//           <Chip label="Error" color="error" />
//         </Stack>

//         <Stack direction="row">
//           <Typography pr={5}>On Delete</Typography>
//           <Chip onDelete={handleDelete} label="Default" color="buttonDefault" />
//           <Chip onDelete={handleDelete} label="Primary" color="primary" />
//           <Chip onDelete={handleDelete} label="Secondary" color="secondary" />
//           <Chip onDelete={handleDelete} label="Info" color="info" />
//           <Chip onDelete={handleDelete} label="Success" color="success" />
//           <Chip onDelete={handleDelete} label="Warning" color="warning" />
//           <Chip onDelete={handleDelete} label="Error" color="error" />
//         </Stack>

//         <Stack direction="row">
//           <Typography pr={5}>Icon</Typography>
//           <Chip
//             icon={<DriveEtaIcon />}
//             label="Default"
//             onDelete={handleDelete}
//             color="buttonDefault"
//           />
//           <Chip
//             icon={<DriveEtaIcon />}
//             onDelete={handleDelete}
//             label="Primary"
//             color="primary"
//           />
//           <Chip
//             icon={<DriveEtaIcon />}
//             onDelete={handleDelete}
//             label="Secondary"
//             color="secondary"
//           />
//           <Chip
//             icon={<DriveEtaIcon />}
//             onDelete={handleDelete}
//             label="Info"
//             color="info"
//           />
//           <Chip
//             icon={<DriveEtaIcon />}
//             onDelete={handleDelete}
//             label="Success"
//             color="success"
//           />
//           <Chip
//             icon={<DriveEtaIcon />}
//             onDelete={handleDelete}
//             label="Warning"
//             color="warning"
//           />
//           <Chip
//             icon={<DriveEtaIcon />}
//             onDelete={handleDelete}
//             label="Error"
//             color="error"
//           />
//         </Stack>

//         <Stack direction="row">
//           <Typography pr={5}>Avatar</Typography>
//           <Chip
//             avatar={<Avatar src="https://shorturl.at/sKOVW" />}
//             label="Default"
//             onDelete={handleDelete}
//             color="buttonDefault"
//           />
//           <Chip
//             avatar={<Avatar src="https://shorturl.at/sKOVW" />}
//             onDelete={handleDelete}
//             label="Primary"
//             color="primary"
//           />
//           <Chip
//             avatar={<Avatar src="https://shorturl.at/sKOVW" />}
//             onDelete={handleDelete}
//             label="Secondary"
//             color="secondary"
//           />
//           <Chip
//             avatar={<Avatar src="https://shorturl.at/sKOVW" />}
//             onDelete={handleDelete}
//             label="Info"
//             color="info"
//           />
//           <Chip
//             avatar={<Avatar src="https://shorturl.at/sKOVW" />}
//             onDelete={handleDelete}
//             label="Success"
//             color="success"
//           />
//           <Chip
//             avatar={<Avatar src="https://shorturl.at/sKOVW" />}
//             onDelete={handleDelete}
//             label="Warning"
//             color="warning"
//           />
//           <Chip
//             avatar={<Avatar src="https://shorturl.at/sKOVW" />}
//             onDelete={handleDelete}
//             label="Error"
//             color="error"
//           />
//         </Stack>

//         <Stack direction="row">
//           <Typography pr={5}>Size</Typography>
//           <Chip onDelete={handleDelete} label="Medium" color="primary" />
//           <Chip
//             onDelete={handleDelete}
//             label="small"
//             color="primary"
//             size="small"
//           />
//         </Stack>

//         <Stack direction="row">
//           <Typography pr={5}>State</Typography>
//           <Chip onDelete={handleDelete} label="Enabled" color="primary" />
//           <Chip
//             onDelete={handleDelete}
//             label="Disabled"
//             color="greyLight"
//             disabled
//           />
//         </Stack>
//       </Stack>

//       <Stack gap={5}>
//         <Typography variant="h4">Outlined</Typography>
//         <Stack direction="row">
//           <Typography pr={5}>Text</Typography>
//           <Chip variant="outlined" label="Default" color="default" />
//           <Chip variant="outlined" label="Primary" color="primary" />
//           <Chip variant="outlined" label="Secondary" color="secondary" />
//           <Chip variant="outlined" label="Info" color="info" />
//           <Chip variant="outlined" label="Success" color="success" />
//           <Chip variant="outlined" label="Warning" color="warning" />
//           <Chip variant="outlined" label="Error" color="error" />
//         </Stack>

//         <Stack direction="row">
//           <Typography pr={5}>On Delete</Typography>
//           <Chip
//             variant="outlined"
//             onDelete={handleDelete}
//             label="Default"
//             color="default"
//           />
//           <Chip
//             variant="outlined"
//             onDelete={handleDelete}
//             label="Primary"
//             color="primary"
//           />
//           <Chip
//             variant="outlined"
//             onDelete={handleDelete}
//             label="Secondary"
//             color="secondary"
//           />
//           <Chip
//             variant="outlined"
//             onDelete={handleDelete}
//             label="Info"
//             color="info"
//           />
//           <Chip
//             variant="outlined"
//             onDelete={handleDelete}
//             label="Success"
//             color="success"
//           />
//           <Chip
//             variant="outlined"
//             onDelete={handleDelete}
//             label="Warning"
//             color="warning"
//           />
//           <Chip
//             variant="outlined"
//             onDelete={handleDelete}
//             label="Error"
//             color="error"
//           />
//         </Stack>

//         <Stack direction="row">
//           <Typography pr={5}>Icon</Typography>
//           <Chip
//             variant="outlined"
//             icon={<DriveEtaIcon />}
//             label="Default"
//             onDelete={handleDelete}
//             color="default"
//           />
//           <Chip
//             variant="outlined"
//             icon={<DriveEtaIcon />}
//             onDelete={handleDelete}
//             label="Primary"
//             color="primary"
//           />
//           <Chip
//             variant="outlined"
//             icon={<DriveEtaIcon />}
//             onDelete={handleDelete}
//             label="Secondary"
//             color="secondary"
//           />
//           <Chip
//             variant="outlined"
//             icon={<DriveEtaIcon />}
//             onDelete={handleDelete}
//             label="Info"
//             color="info"
//           />
//           <Chip
//             variant="outlined"
//             icon={<DriveEtaIcon />}
//             onDelete={handleDelete}
//             label="Success"
//             color="success"
//           />
//           <Chip
//             variant="outlined"
//             icon={<DriveEtaIcon />}
//             onDelete={handleDelete}
//             label="Warning"
//             color="warning"
//           />
//           <Chip
//             variant="outlined"
//             icon={<DriveEtaIcon />}
//             onDelete={handleDelete}
//             label="Error"
//             color="error"
//           />
//         </Stack>

//         <Stack direction="row">
//           <Typography pr={5}>Avatar</Typography>
//           <Chip
//             variant="outlined"
//             avatar={<Avatar src="https://shorturl.at/sKOVW" />}
//             label="Default"
//             onDelete={handleDelete}
//             color="default"
//           />
//           <Chip
//             variant="outlined"
//             avatar={<Avatar src="https://shorturl.at/sKOVW" />}
//             onDelete={handleDelete}
//             label="Primary"
//             color="primary"
//           />
//           <Chip
//             variant="outlined"
//             avatar={<Avatar src="https://shorturl.at/sKOVW" />}
//             onDelete={handleDelete}
//             label="Secondary"
//             color="secondary"
//           />
//           <Chip
//             variant="outlined"
//             avatar={<Avatar src="https://shorturl.at/sKOVW" />}
//             onDelete={handleDelete}
//             label="Info"
//             color="info"
//           />
//           <Chip
//             variant="outlined"
//             avatar={<Avatar src="https://shorturl.at/sKOVW" />}
//             onDelete={handleDelete}
//             label="Success"
//             color="success"
//           />
//           <Chip
//             variant="outlined"
//             avatar={<Avatar src="https://shorturl.at/sKOVW" />}
//             onDelete={handleDelete}
//             label="Warning"
//             color="warning"
//           />
//           <Chip
//             variant="outlined"
//             avatar={<Avatar src="https://shorturl.at/sKOVW" />}
//             onDelete={handleDelete}
//             label="Error"
//             color="error"
//           />
//         </Stack>

//         <Stack direction="row">
//           <Typography pr={5}>Size</Typography>
//           <Chip
//             variant="outlined"
//             onDelete={handleDelete}
//             label="Medium"
//             color="primary"
//           />
//           <Chip
//             variant="outlined"
//             onDelete={handleDelete}
//             label="small"
//             color="primary"
//             size="small"
//           />
//         </Stack>

//         <Stack direction="row">
//           <Typography pr={5}>State</Typography>
//           <Chip
//             variant="outlined"
//             onDelete={handleDelete}
//             label="Enabled"
//             color="primary"
//           />
//           <Chip
//             variant="outlined"
//             onDelete={handleDelete}
//             label="Disabled"
//             color="default"
//             disabled
//           />
//         </Stack>
//       </Stack>

//       <Stack gap={5}>
//         <Typography variant="h4">Soft</Typography>
//         <Stack direction="row">
//           <Typography pr={5}>Text</Typography>
//           <Chip label="Default" variant="filled" color="buttonDefault" />
//           <Chip
//             label="Primary"
//             sx={{ bgcolor: "primary.soft", color: "primary.dark" }}
//           />
//           <Chip
//             label="Secondary"
//             sx={{ bgcolor: "secondary.soft", color: "secondary.dark" }}
//           />
//           <Chip
//             label="Info"
//             sx={{ bgcolor: "info.soft", color: "info.dark" }}
//           />
//           <Chip
//             label="Success"
//             sx={{ bgcolor: "success.soft", color: "success.dark" }}
//           />
//           <Chip
//             label="Warning"
//             sx={{ bgcolor: "warning.soft", color: "warning.dark" }}
//           />
//           <Chip
//             label="Error"
//             sx={{ bgcolor: "error.soft", color: "error.dark" }}
//           />
//         </Stack>

//         <Stack direction="row">
//           <Typography pr={5}>On Delete</Typography>
//           <Chip onDelete={handleDelete} label="Default" color="buttonDefault" />
//           <Chip
//             onDelete={handleDelete}
//             label="Primary"
//             sx={{
//               bgcolor: "primary.soft",
//               color: "primary.dark",
//               "& .MuiChip-deleteIcon": {
//                 color: "primary.dark",
//                 opacity: 0.48,
//               },
//             }}
//           />
//           <Chip
//             onDelete={handleDelete}
//             label="Secondary"
//             sx={{
//               bgcolor: "secondary.soft",
//               color: "secondary.dark",
//               "& .MuiChip-deleteIcon": {
//                 color: "secondary.dark",
//                 opacity: 0.48,
//               },
//             }}
//           />
//           <Chip
//             onDelete={handleDelete}
//             label="Info"
//             sx={{
//               bgcolor: "info.soft",
//               color: "info.dark",
//               "& .MuiChip-deleteIcon": {
//                 color: "info.dark",
//                 opacity: 0.48,
//               },
//             }}
//           />
//           <Chip
//             onDelete={handleDelete}
//             label="Success"
//             sx={{
//               bgcolor: "success.soft",
//               color: "success.dark",
//               "& .MuiChip-deleteIcon": {
//                 color: "success.dark",
//                 opacity: 0.48,
//               },
//             }}
//           />
//           <Chip
//             onDelete={handleDelete}
//             label="Warning"
//             sx={{
//               bgcolor: "warning.soft",
//               color: "warning.dark",
//               "& .MuiChip-deleteIcon": {
//                 color: "warning.dark",
//                 opacity: 0.48,
//               },
//             }}
//           />
//           <Chip
//             onDelete={handleDelete}
//             label="Error"
//             sx={{
//               bgcolor: "error.soft",
//               color: "error.dark",
//               "& .MuiChip-deleteIcon": {
//                 color: "error.dark",
//                 opacity: 0.48,
//               },
//             }}
//           />
//         </Stack>

//         <Stack direction="row">
//           <Typography pr={5}>Icon</Typography>
//           <Chip
//             icon={<DriveEtaIcon />}
//             label="Default"
//             onDelete={handleDelete}
//             color="buttonDefault"
//           />
//           <Chip
//             icon={<DriveEtaIcon />}
//             onDelete={handleDelete}
//             label="Primary"
//             sx={{
//               bgcolor: "primary.soft",
//               color: "primary.dark",
//               "& .MuiChip-deleteIcon": {
//                 color: "primary.dark",
//                 opacity: 0.48,
//               },
//             }}
//           />
//           <Chip
//             icon={<DriveEtaIcon />}
//             onDelete={handleDelete}
//             label="Secondary"
//             sx={{
//               bgcolor: "secondary.soft",
//               color: "secondary.dark",
//               "& .MuiChip-deleteIcon": {
//                 color: "secondary.dark",
//                 opacity: 0.48,
//               },
//             }}
//           />
//           <Chip
//             icon={<DriveEtaIcon />}
//             onDelete={handleDelete}
//             label="Info"
//             sx={{
//               bgcolor: "info.soft",
//               color: "info.dark",
//               "& .MuiChip-deleteIcon": {
//                 color: "info.dark",
//                 opacity: 0.48,
//               },
//             }}
//           />
//           <Chip
//             icon={<DriveEtaIcon />}
//             onDelete={handleDelete}
//             label="Success"
//             sx={{
//               bgcolor: "success.soft",
//               color: "success.dark",
//               "& .MuiChip-deleteIcon": {
//                 color: "success.dark",
//                 opacity: 0.48,
//               },
//             }}
//           />
//           <Chip
//             icon={<DriveEtaIcon />}
//             onDelete={handleDelete}
//             label="Warning"
//             sx={{
//               bgcolor: "warning.soft",
//               color: "warning.dark",
//               "& .MuiChip-deleteIcon": {
//                 color: "warning.dark",
//                 opacity: 0.48,
//               },
//             }}
//           />
//           <Chip
//             icon={<DriveEtaIcon />}
//             onDelete={handleDelete}
//             label="Error"
//             sx={{
//               bgcolor: "error.soft",
//               color: "error.dark",
//               "& .MuiChip-deleteIcon": {
//                 color: "error.dark",
//                 opacity: 0.48,
//               },
//             }}
//           />
//         </Stack>

//         <Stack direction="row">
//           <Typography pr={5}>Avatar</Typography>
//           <Chip
//             avatar={<Avatar src="https://shorturl.at/sKOVW" />}
//             label="Default"
//             onDelete={handleDelete}
//             color="buttonDefault"
//           />
//           <Chip
//             avatar={<Avatar src="https://shorturl.at/sKOVW" />}
//             onDelete={handleDelete}
//             label="Primary"
//             sx={{
//               bgcolor: "primary.soft",
//               color: "primary.dark",
//               "& .MuiChip-deleteIcon": {
//                 color: "primary.dark",
//                 opacity: 0.48,
//               },
//             }}
//           />
//           <Chip
//             avatar={<Avatar src="https://shorturl.at/sKOVW" />}
//             onDelete={handleDelete}
//             label="Secondary"
//             sx={{
//               bgcolor: "secondary.soft",
//               color: "secondary.dark",
//               "& .MuiChip-deleteIcon": {
//                 color: "secondary.dark",
//                 opacity: 0.48,
//               },
//             }}
//           />
//           <Chip
//             avatar={<Avatar src="https://shorturl.at/sKOVW" />}
//             onDelete={handleDelete}
//             label="Info"
//             sx={{
//               bgcolor: "info.soft",
//               color: "info.dark",
//               "& .MuiChip-deleteIcon": {
//                 color: "info.dark",
//                 opacity: 0.48,
//               },
//             }}
//           />
//           <Chip
//             avatar={<Avatar src="https://shorturl.at/sKOVW" />}
//             onDelete={handleDelete}
//             label="Success"
//             sx={{
//               bgcolor: "success.soft",
//               color: "success.dark",
//               "& .MuiChip-deleteIcon": {
//                 color: "success.dark",
//                 opacity: 0.48,
//               },
//             }}
//           />
//           <Chip
//             avatar={<Avatar src="https://shorturl.at/sKOVW" />}
//             onDelete={handleDelete}
//             label="Warning"
//             sx={{
//               bgcolor: "warning.soft",
//               color: "warning.dark",
//               "& .MuiChip-deleteIcon": {
//                 color: "warning.dark",
//                 opacity: 0.48,
//               },
//             }}
//           />
//           <Chip
//             avatar={<Avatar src="https://shorturl.at/sKOVW" />}
//             onDelete={handleDelete}
//             label="Error"
//             sx={{
//               bgcolor: "error.soft",
//               color: "error.dark",
//               "& .MuiChip-deleteIcon": {
//                 color: "error.dark",
//                 opacity: 0.48,
//               },
//             }}
//           />
//         </Stack>

//         <Stack direction="row">
//           <Typography pr={5}>Size</Typography>
//           <Chip
//             onDelete={handleDelete}
//             label="Medium"
//             sx={{
//               bgcolor: "primary.soft",
//               color: "primary.dark",
//               "& .MuiChip-deleteIcon": {
//                 color: "primary.dark",
//                 opacity: 0.48,
//               },
//             }}
//           />
//           <Chip
//             onDelete={handleDelete}
//             label="small"
//             size="small"
//             sx={{
//               bgcolor: "primary.soft",
//               color: "primary.dark",
//               "& .MuiChip-deleteIcon": {
//                 color: "primary.dark",
//                 opacity: 0.48,
//               },
//             }}
//           />
//         </Stack>

//         <Stack direction="row">
//           <Typography pr={5}>State</Typography>
//           <Chip
//             onDelete={handleDelete}
//             label="Enabled"
//             sx={{
//               bgcolor: "primary.soft",
//               color: "primary.dark",
//               "& .MuiChip-deleteIcon": {
//                 color: "primary.dark",
//                 opacity: 0.48,
//               },
//             }}
//           />
//           <Chip
//             onDelete={handleDelete}
//             label="Disabled"
//             color="greyLight"
//             disabled
//           />
//         </Stack>
//       </Stack>
//     </Stack>
//   );
// }

import ChipView from "../../sections/mui/chip-view";

// ----------------------------------------------------------------------

export default function Chip() {
  return (
    <>
      <ChipView />
    </>
  );
}
