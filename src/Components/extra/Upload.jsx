// import React, { useState } from "react";
// import Avatar from "@mui/material/Avatar";
// import IconButton from "@mui/material/IconButton";
// import PhotoCamera from "@mui/icons-material/PhotoCamera";
// import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
// import DeleteIcon from "@mui/icons-material/Delete";
// import Box from "@mui/material/Box";
// import { Stack, Typography } from "@mui/material";
// import MultiUpload from "./MultiUpload";

// const AvatarUpload = ({ iserror }) => {
//   const [avatarImage, setAvatarImage] = useState(null);
//   const [avatarImageSec, setAvatarImageSec] = useState(null);
//   const [avatarFull, setAvatarFull] = useState(null);
//   const isError = true;

//   const handleAvatarChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         setAvatarImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const imgHandleAvatarChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         setAvatarImageSec(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const fullHandleAvatarChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         setAvatarFull(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div>
//       <Stack direction="row">
//         <label htmlFor="avatar-upload">
//           <input
//             style={{ display: "none" }}
//             id="avatar-upload"
//             type="file"
//             accept="image/*"
//             onChange={handleAvatarChange}
//           />
//           <Box
//             sx={{
//               width: "144px",
//               height: "144px",
//               border: !isError
//                 ? "1px dashed rgba(145, 158, 171, 0.20)"
//                 : "1px dashed #FF5630",
//               borderRadius: 50,
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             <IconButton
//               sx={{
//                 background: avatarImage ? "#7e7f80" : "#FF563014",
//                 width: "128px",
//                 height: "128px",
//                 position: "relative",
//               }}
//               component="span"
//             >
//               {avatarImage && (
//                 <Avatar
//                   sx={{ width: "80px", height: "80px", opacity: 0.3 }}
//                   alt="Avatar"
//                   src={avatarImage}
//                 />
//               )}
//               <Box>
//                 <PhotoCamera
//                   sx={{
//                     color: avatarImage ? "white" : "#FF5630",
//                     position: "absolute",
//                     top: "25%",
//                     left: "34%",
//                     fontSize: "38px",
//                   }}
//                 />
//                 <Typography
//                   sx={{
//                     color: avatarImage ? "white" : "#FF5630",
//                     fontSize: "12px",
//                     fontStyle: "normal",
//                     position: "absolute",
//                     top: "55%",
//                     width: "100%",
//                     left: 0,
//                   }}
//                 >
//                   Upload photo
//                 </Typography>
//               </Box>
//             </IconButton>
//           </Box>
//         </label>

//         <label htmlFor="avatar-upload-img">
//           <input
//             style={{ display: "none" }}
//             id="avatar-upload-img"
//             type="file"
//             accept="image/*"
//             onChange={imgHandleAvatarChange}
//           />
//           <Box
//             sx={{
//               width: "144px",
//               height: "144px",
//               border: "1px dashed rgba(145, 158, 171, 0.20)",
//               borderRadius: 50,
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             <IconButton
//               sx={{
//                 background: avatarImageSec ? "#7e7f80" : "#919EAB14",
//                 width: "128px",
//                 height: "128px",
//                 position: "relative",
//               }}
//               component="span"
//             >
//               {avatarImageSec && (
//                 <Avatar
//                   sx={{ width: "80px", height: "80px", opacity: 0.3 }}
//                   alt="Avatar"
//                   src={avatarImageSec}
//                 />
//               )}
//               <Box>
//                 <PhotoCamera
//                   sx={{
//                     color: avatarImageSec ? "white" : "#919EAB",
//                     position: "absolute",
//                     top: "25%",
//                     left: "34%",
//                     fontSize: "38px",
//                   }}
//                 />
//                 <Typography
//                   sx={{
//                     color: avatarImageSec ? "white" : "#919EAB",
//                     fontSize: "12px",
//                     fontStyle: "normal",
//                     position: "absolute",
//                     top: "55%",
//                     width: "100%",
//                     left: 0,
//                   }}
//                 >
//                   Upload photo
//                 </Typography>
//               </Box>
//             </IconButton>
//           </Box>
//         </label>
//       </Stack>

//       <Stack mt={8}>
//         <label htmlFor="avatar-upload-full" style={{ width: 740 }}>
//           <input
//             style={{ display: "none" }}
//             id="avatar-upload-full"
//             type="file"
//             accept="image/*"
//             onChange={fullHandleAvatarChange}
//           />

//           <IconButton
//             sx={{
//               background: avatarFull ? "#7e7f80" : "#919EAB14",
//               width: "740px",
//               height: "312px",
//               position: "relative",
//               borderRadius: 2,
//               border: "1px dashed rgba(145, 158, 171, 0.20)",
//             }}
//             component="span"
//           >
//             {avatarFull && (
//               <Avatar
//                 sx={{ width: 724, height: 296, borderRadius: 2 }}
//                 alt="Avatar"
//                 src={avatarFull}
//               />
//             )}
//             {!avatarFull && (
//               <Box>
//                 <PhotoCamera
//                   sx={{
//                     color: avatarFull ? "white" : "#919EAB",
//                     position: "absolute",
//                     top: "15%",
//                     left: "36%",
//                     fontSize: "38px",
//                     width: 200,
//                     height: 150,
//                   }}
//                 />
//                 <Typography
//                   variant="h6"
//                   sx={{
//                     color: avatarFull ? "white" : "#212B36",
//                     fontStyle: "normal",
//                     position: "absolute",
//                     bottom: 70,
//                     width: "100%",
//                     left: 0,
//                   }}
//                 >
//                   Select files
//                 </Typography>
//                 <Typography
//                   sx={{
//                     color: avatarFull ? "white" : "#919EAB",
//                     fontSize: "14px",
//                     fontStyle: "normal",
//                     position: "absolute",
//                     bottom: 40,
//                     width: "100%",
//                     left: 0,
//                   }}
//                 >
//                   Drop files here or click browse thorough your machine
//                 </Typography>
//               </Box>
//             )}
//           </IconButton>
//         </label>
//       </Stack>

//       <Stack mt={8}>
//         <MultiUpload />
//       </Stack>
//     </div>
//   );
// };

// export default AvatarUpload;

import UploadView from "../../sections/extra/upload-view";

// ----------------------------------------------------------------------

export default function UploadPage() {
  return (
    <>
      <UploadView />
    </>
  );
}
