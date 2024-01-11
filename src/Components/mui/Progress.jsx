// import * as React from "react";
// import PropTypes from "prop-types";
// import LinearProgress from "@mui/material/LinearProgress";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
// import Stack from "@mui/material/Stack";
// import CircularProgress from "@mui/material/CircularProgress";

// function LinearProgressWithLabel(props) {
//   return (
//     <>
//       <Box mb={8} sx={{ display: "flex", alignItems: "center" }}>
//         <Box sx={{ width: "100%", mr: 1 }}>
//           <LinearProgress color="inherit" variant="determinate" {...props} />
//         </Box>
//         <Box sx={{ minWidth: 35 }}>
//           <Typography variant="body2" color="text.secondary">{`${Math.round(
//             props.value
//           )}%`}</Typography>
//         </Box>
//       </Box>
//       <Box mb={8} sx={{ display: "flex", alignItems: "center" }}>
//         <Box sx={{ width: "100%", mr: 1 }}>
//           <LinearProgress color="primary" variant="determinate" {...props} />
//         </Box>
//         <Box sx={{ minWidth: 35 }}>
//           <Typography variant="body2" color="text.secondary">{`${Math.round(
//             props.value
//           )}%`}</Typography>
//         </Box>
//       </Box>
//       <Box mb={8} sx={{ display: "flex", alignItems: "center" }}>
//         <Box sx={{ width: "100%", mr: 1 }}>
//           <LinearProgress color="secondary" variant="determinate" {...props} />
//         </Box>
//         <Box sx={{ minWidth: 35 }}>
//           <Typography variant="body2" color="text.secondary">{`${Math.round(
//             props.value
//           )}%`}</Typography>
//         </Box>
//       </Box>
//       <Box mb={8} sx={{ display: "flex", alignItems: "center" }}>
//         <Box sx={{ width: "100%", mr: 1 }}>
//           <LinearProgress color="info" variant="determinate" {...props} />
//         </Box>
//         <Box sx={{ minWidth: 35 }}>
//           <Typography variant="body2" color="text.secondary">{`${Math.round(
//             props.value
//           )}%`}</Typography>
//         </Box>
//       </Box>
//       <Box mb={8} sx={{ display: "flex", alignItems: "center" }}>
//         <Box sx={{ width: "100%", mr: 1 }}>
//           <LinearProgress color="success" variant="determinate" {...props} />
//         </Box>
//         <Box sx={{ minWidth: 35 }}>
//           <Typography variant="body2" color="text.secondary">{`${Math.round(
//             props.value
//           )}%`}</Typography>
//         </Box>
//       </Box>
//       <Box mb={8} sx={{ display: "flex", alignItems: "center" }}>
//         <Box sx={{ width: "100%", mr: 1 }}>
//           <LinearProgress color="warning" variant="determinate" {...props} />
//         </Box>
//         <Box sx={{ minWidth: 35 }}>
//           <Typography variant="body2" color="text.secondary">{`${Math.round(
//             props.value
//           )}%`}</Typography>
//         </Box>
//       </Box>
//       <Box mb={8} sx={{ display: "flex", alignItems: "center" }}>
//         <Box sx={{ width: "100%", mr: 1 }}>
//           <LinearProgress color="error" variant="determinate" {...props} />
//         </Box>
//         <Box sx={{ minWidth: 35 }}>
//           <Typography variant="body2" color="text.secondary">{`${Math.round(
//             props.value
//           )}%`}</Typography>
//         </Box>
//       </Box>

//       <Stack mb={8} spacing={2} direction="row">
//         <CircularProgress variant="determinate" value={75} color="inherit" />
//         <CircularProgress variant="determinate" value={75} color="primary" />
//         <CircularProgress variant="determinate" value={75} color="secondary" />
//         <CircularProgress variant="determinate" value={75} color="info" />
//         <CircularProgress variant="determinate" value={75} color="success" />
//         <CircularProgress variant="determinate" value={75} color="warning" />
//         <CircularProgress variant="determinate" value={75} color="error" />
//       </Stack>

//       <Box sx={{ position: "relative", display: "inline-flex" }}>
//         <CircularProgress variant="determinate" {...props} />
//         <Box
//           sx={{
//             top: 0,
//             left: 0,
//             bottom: 0,
//             right: 0,
//             position: "absolute",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <Typography variant="caption" component="div" color="text.secondary">
//             {`${Math.round(props.value)}%`}
//           </Typography>
//         </Box>
//       </Box>
//     </>
//   );
// }

// LinearProgressWithLabel.propTypes = {
//   value: PropTypes.number.isRequired,
// };

// export default function LinearWithValueLabel() {
//   const [progress, setProgress] = React.useState(10);

//   React.useEffect(() => {
//     const timer = setInterval(() => {
//       setProgress((prevProgress) =>
//         prevProgress >= 100 ? 10 : prevProgress + 10
//       );
//     }, 800);
//     return () => {
//       clearInterval(timer);
//     };
//   }, []);

//   return (
//     <Box sx={{ width: "100%" }}>
//       <LinearProgressWithLabel value={50} />
//     </Box>
//   );
// }

import ProgressView from "../../sections/mui/progress-view";

// ----------------------------------------------------------------------

export default function Progress() {
  return (
    <>
      <ProgressView />
    </>
  );
}
