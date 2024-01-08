// import * as React from "react";
// import { Box, Card, Checkbox, Input, Stack, Typography } from "@mui/material";
// import Button from "@mui/material/Button";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
// import FormControl from "@mui/material/FormControl";
// import OutlinedInput from "@mui/material/OutlinedInput";
// import TextField from "@mui/material/TextField";
// import IconButton from "@mui/material/IconButton";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Switch from "@mui/material/Switch";
// import RadioGroup from "@mui/material/RadioGroup";
// import Radio from "@mui/material/Radio";
// import InputAdornment from "@mui/material/InputAdornment";
// import { margin } from "@mui/system";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
// import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
// import { LocalizationProvider } from "@mui/x-date-pickers";
// import CheckIcon from "@mui/icons-material/Check";
// import SearchIcon from "@mui/icons-material/Search";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import DeleteIcon from "@mui/icons-material/Delete";
// import CloseIcon from "@mui/icons-material/Close";
// import MessageIcon from "@mui/icons-material/Message";
// import AddIcon from "@mui/icons-material/Add";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import mastercard from "../../public/assets/image/mastercard.png";
// import visa from "../../public/assets/image/visa.png";

// export default function AlertDialog() {
//   const [open, setOpen] = React.useState(false);
//   const [openDelete, setOpenDelete] = React.useState(false);
//   const [openAdvertising, setOpenAdvertising] = React.useState(false);
//   const [openAdvertisingTwo, setOpenAdvertisingTwo] = React.useState(false);
//   const [openPropose, setOpenPropose] = React.useState(false);
//   const [openForm, setOpenForm] = React.useState(false);
//   const [openNew, setOpenNew] = React.useState(false);
//   const [openCard, setOpenCard] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const deleteHandleClickOpen = () => {
//     setOpenDelete(true);
//   };

//   const deleteHandleClose = () => {
//     setOpenDelete(false);
//   };

//   const advertisingHandleClickOpen = () => {
//     setOpenAdvertising(true);
//   };

//   const advertisingHandleClose = () => {
//     setOpenAdvertising(false);
//   };

//   const advertisingTwoHandleClickOpen = () => {
//     setOpenAdvertisingTwo(true);
//   };

//   const advertisingTwoHandleClose = () => {
//     setOpenAdvertisingTwo(false);
//   };

//   const proposeHandleClickOpen = () => {
//     setOpenPropose(true);
//   };

//   const proposeHandleClose = () => {
//     setOpenPropose(false);
//   };

//   const formHandleClickOpen = () => {
//     setOpenForm(true);
//   };

//   const formHandleClose = () => {
//     setOpenForm(false);
//   };

//   const newHandleClickOpen = () => {
//     setOpenNew(true);
//   };

//   const newHandleClose = () => {
//     setOpenNew(false);
//   };

//   const cardHandleClickOpen = () => {
//     setOpenCard(true);
//   };

//   const cardHandleClose = () => {
//     setOpenCard(false);
//   };

//   return (
//     <Stack gap={5}>
//       {/* open dialog alert */}
//       <Box>
//         <Button variant="outlined" onClick={handleClickOpen}>
//           Open alert dialog
//         </Button>
//         <Dialog
//           sx={{
//             "& .MuiDialog-container": {
//               "& .MuiPaper-root": {
//                 width: "100%",
//                 maxWidth: "480px",
//               },
//             },
//           }}
//           open={open}
//           onClose={handleClose}
//           aria-labelledby="alert-dialog-title"
//           aria-describedby="alert-dialog-description"
//         >
//           <DialogTitle id="alert-dialog-title" variant="h6">
//             <Box display="flex" alignItems="center" gap={3}>
//               <NotificationsIcon sx={{ alignItems: "center" }} />
//               {" Something we’d like to propose"}
//             </Box>
//             <IconButton
//               aria-label="close"
//               onClick={handleClose}
//               sx={{
//                 position: "absolute",
//                 right: 8,
//                 top: 21,
//               }}
//             >
//               <CloseIcon />
//             </IconButton>
//           </DialogTitle>
//           <DialogContent>
//             <DialogContentText id="alert-dialog-description" variant="body1">
//               <Typography color="greyText">
//                 In today’s net-savvy world it has become common for any business
//                 to have a website which they use mostly
//               </Typography>
//             </DialogContentText>
//           </DialogContent>
//           <DialogActions>
//             <Button
//               variant="contained"
//               color="neutral"
//               onClick={handleClose}
//               size="medium"
//             >
//               Accept
//             </Button>
//             <Button
//               variant="outlined"
//               color="neutralBorder"
//               onClick={handleClose}
//               autoFocus
//               sx={{ border: "1px solid rgba(145, 158, 171, 0.32) " }}
//             >
//               Cancel
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </Box>

//       {/* Delete File */}
//       <Box>
//         <Button variant="outlined" onClick={deleteHandleClickOpen}>
//           Delete File
//         </Button>
//         <Dialog
//           sx={{
//             "& .MuiDialog-container": {
//               "& .MuiPaper-root": {
//                 width: "100%",
//                 maxWidth: "480px",
//               },
//             },
//           }}
//           open={openDelete}
//           onClose={deleteHandleClose}
//           aria-labelledby="delete-dialog-title"
//           aria-describedby="delete-dialog-description"
//         >
//           <DialogTitle id="delete-dialog-title" variant="h6">
//             <Box display="flex" alignItems="center" gap={3}>
//               <DeleteIcon sx={{ alignItems: "center" }} />
//               {" Delete Files?"}
//             </Box>
//             <IconButton
//               aria-label="close"
//               onClick={deleteHandleClose}
//               sx={{
//                 position: "absolute",
//                 right: 8,
//                 top: 21,
//               }}
//             >
//               <CloseIcon />
//             </IconButton>
//           </DialogTitle>
//           <DialogContent>
//             <DialogContentText id="delete-dialog-description" variant="body1">
//               Digital computers use binary code and Boolean logic to store and
//               process information, allowing.
//             </DialogContentText>
//           </DialogContent>
//           <DialogActions>
//             <Button
//               variant="outlined"
//               color="neutralBorder"
//               onClick={deleteHandleClose}
//               sx={{ border: "1px solid rgba(145, 158, 171, 0.32) " }}
//             >
//               Cancel
//             </Button>
//             <Button
//               variant="contained"
//               color="error"
//               onClick={deleteHandleClose}
//               autoFocus
//             >
//               Delete
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </Box>

//       {/* Advertising */}
//       <Box>
//         <Button variant="outlined" onClick={advertisingHandleClickOpen}>
//           Advertising
//         </Button>
//         <Dialog
//           sx={{
//             "& .MuiDialog-container": {
//               "& .MuiPaper-root": {
//                 width: "100%",
//                 maxWidth: "480px",
//               },
//             },
//           }}
//           open={openAdvertising}
//           onClose={advertisingHandleClose}
//           aria-labelledby="advertising-dialog-title"
//           aria-describedby="advertising-dialog-description"
//         >
//           <DialogContent>
//             <Box
//               component="img"
//               sx={{
//                 height: 240,
//                 width: 240,
//                 borderRadius: 50,
//                 display: "block",
//                 margin: "0 auto",
//                 padding: "40px",
//               }}
//               alt="The house from the offer."
//               src="https://shorturl.at/mpJK6"
//             />

//             <Typography variant="h4" textAlign="center">
//               Advertising
//             </Typography>
//             <Typography textAlign="center">
//               In today’s net-savvy world it has become common for any business
//               to have a website which they use mostly
//             </Typography>
//           </DialogContent>
//           <DialogActions>
//             <Button
//               size="large"
//               sx={{ width: "100%" }}
//               variant="contained"
//               color="primary"
//               onClick={advertisingHandleClose}
//               autoFocus
//             >
//               Install
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </Box>

//       {/* Advertising */}
//       <Box>
//         <Button variant="outlined" onClick={advertisingTwoHandleClickOpen}>
//           Advertising
//         </Button>
//         <Dialog
//           sx={{
//             "& .MuiDialog-container": {
//               "& .MuiPaper-root": {
//                 width: "100%",
//                 maxWidth: "480px",
//               },
//             },
//           }}
//           open={openAdvertisingTwo}
//           onClose={advertisingTwoHandleClose}
//           aria-labelledby="advertisingTwo-dialog-title"
//           aria-describedby="advertisingTwo-dialog-description"
//         >
//           <DialogContent>
//             <Box
//               sx={{
//                 padding: "40px",
//               }}
//             >
//               <MessageIcon
//                 sx={{
//                   width: 80,
//                   height: 80,
//                   display: "block",
//                   margin: "0 auto",
//                 }}
//               />
//             </Box>
//             <Typography variant="h4" textAlign="center">
//               Advertising
//             </Typography>
//             <Typography textAlign="center">
//               In today’s net-savvy world it has become common for any business
//               to have a website which they use mostly
//             </Typography>
//           </DialogContent>
//           <DialogActions>
//             <Button
//               fullWidth
//               variant="contained"
//               color="neutral"
//               onClick={advertisingTwoHandleClose}
//             >
//               Accept
//             </Button>
//             <Button
//               fullWidth
//               variant="outlined"
//               color="neutralBorder"
//               sx={{ border: "1px solid rgba(145, 158, 171, 0.32) " }}
//               onClick={advertisingTwoHandleClose}
//               autoFocus
//             >
//               Cancel
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </Box>

//       {/* FORM dialog */}
//       <Box>
//         <Button variant="outlined" onClick={formHandleClickOpen}>
//           Form
//         </Button>
//         <Dialog
//           sx={{
//             "& .MuiDialog-container": {
//               "& .MuiPaper-root": {
//                 width: "100%",
//                 maxWidth: "560px",
//               },
//             },
//           }}
//           open={openForm}
//           onClose={formHandleClose}
//           aria-labelledby="form-dialog-title"
//           aria-describedby="form-dialog-description"
//         >
//           <Box display="flex">
//             <Box
//               component="img"
//               src="https://shorturl.at/bjrsD"
//               sx={{ width: 180 }}
//             />
//             <DialogContent sx={{ padding: 5 }}>
//               <Typography variant="h4">Advertising</Typography>
//               <Typography>
//                 In today’s net-savvy world it has become common for any business
//                 to have a website which they use mostly
//               </Typography>

//               <FormControl
//                 variant="outlined"
//                 sx={{ marginTop: 8, width: "100%" }}
//               >
//                 <OutlinedInput
//                   sx={{
//                     height: "48px",
//                     borderRadius: 2,
//                     borderColor: "rgba(145, 158, 171, 0.20)",
//                   }}
//                   placeholder="your-email@.com"
//                   id="outlined-adornment-weight"
//                   aria-describedby="outlined-weight-helper-text"
//                   inputProps={{
//                     "aria-label": "weight",
//                   }}
//                 />
//                 <Button
//                   variant="contained"
//                   color="neutral"
//                   onClick={formHandleClose}
//                   sx={{
//                     position: "absolute",
//                     width: "64px",
//                     right: 0,
//                     height: 48,
//                   }}
//                 >
//                   Notify
//                 </Button>
//               </FormControl>
//             </DialogContent>
//           </Box>
//         </Dialog>
//       </Box>

//       {/* propose */}
//       <Box>
//         <Button variant="outlined" onClick={proposeHandleClickOpen}>
//           Propose
//         </Button>
//         <Dialog
//           sx={{
//             "& .MuiDialog-container": {
//               "& .MuiPaper-root": {
//                 width: "100%",
//                 maxWidth: "480px",
//               },
//             },
//           }}
//           open={openPropose}
//           onClose={proposeHandleClose}
//           aria-labelledby="propose-dialog-title"
//           aria-describedby="propose-dialog-description"
//         >
//           <Box
//             component="img"
//             src="https://shorturl.at/bjrsD"
//             sx={{ width: "100%" }}
//           />
//           <DialogContent>
//             <Typography variant="h4">Advertising</Typography>
//             <Typography>
//               In today’s net-savvy world it has become common for any business
//               to have a website which they use mostly
//             </Typography>
//           </DialogContent>
//           <DialogActions>
//             <Button
//               size="large"
//               fullWidth
//               variant="contained"
//               color="neutral"
//               onClick={proposeHandleClose}
//             >
//               Accept
//             </Button>
//             <Button
//               size="large"
//               fullWidth
//               variant="outlined"
//               color="neutralBorder"
//               sx={{ border: "1px solid rgba(145, 158, 171, 0.32) " }}
//               onClick={proposeHandleClose}
//               autoFocus
//             >
//               Cancel
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </Box>

//       {/* New Event */}
//       <Box>
//         <Button variant="outlined" onClick={newHandleClickOpen}>
//           New Event
//         </Button>
//         <Dialog
//           sx={{
//             "& .MuiDialog-container": {
//               "& .MuiPaper-root": {
//                 width: "100%",
//                 maxWidth: "480px",
//               },
//             },
//           }}
//           open={openNew}
//           onClose={newHandleClose}
//           aria-labelledby="alert-dialog-title"
//           aria-describedby="alert-dialog-description"
//         >
//           <DialogTitle id="alert-dialog-title" variant="h6">
//             <Box display="flex" alignItems="center" gap={3}>
//               New Event
//             </Box>
//           </DialogTitle>
//           <DialogContent>
//             <Box
//               component="form"
//               sx={{
//                 "& > :not(style)": { mt: 1, width: "100%" },
//               }}
//               noValidate
//               autoComplete="off"
//             >
//               <Stack spacing={3}>
//                 <TextField
//                   sx={{
//                     "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
//                       backgroundColor: "red",
//                     },
//                   }}
//                   id="outlined-basic"
//                   label="Title"
//                   variant="outlined"
//                 />
//                 <TextField
//                   id="outlined-multiline-static"
//                   label="Description"
//                   multiline
//                   rows={4}
//                 />
//                 <FormControlLabel
//                   sx={{ alignItems: "center" }}
//                   control={<Switch />}
//                   label="All Day"
//                   labelPlacement="end"
//                 />
//                 <LocalizationProvider dateAdapter={AdapterDayjs}>
//                   {/* 2 calendars */}
//                   <DemoContainer components={["DateRangePicker"]}>
//                     <DateRangePicker
//                       format="DD - MM - YYYY"
//                       calendars={2}
//                       sx={{
//                         width: "100%",
//                         flexDirection: "column",
//                         "& .MuiMultiInputDateRangeField-separator": {
//                           display: "none",
//                         },
//                       }}
//                     />
//                   </DemoContainer>
//                 </LocalizationProvider>
//                 <RadioGroup
//                   sx={{ gap: 0 }}
//                   row
//                   aria-labelledby="demo-row-radio-buttons-group-label"
//                   name="row-radio-buttons-group"
//                 >
//                   <FormControlLabel
//                     sx={{ margin: 0 }}
//                     value="primary"
//                     control={
//                       <Radio
//                         icon={
//                           <div
//                             style={{
//                               height: 18,
//                               width: 18,
//                               background: "#00A76F",
//                               borderRadius: 15,
//                             }}
//                           ></div>
//                         }
//                         checkedIcon={
//                           <div
//                             style={{
//                               height: 26,
//                               width: 26,
//                               background: "#00A76F",
//                               borderRadius: 15,
//                             }}
//                           >
//                             <CheckIcon sx={{ color: "white" }} />
//                           </div>
//                         }
//                       />
//                     }
//                   />
//                   <FormControlLabel
//                     sx={{ margin: 0 }}
//                     value="info"
//                     control={
//                       <Radio
//                         sx={{
//                           ":hover": {
//                             backgroundColor: "rgba(0, 184, 217, 0.10)",
//                           },
//                         }}
//                         icon={
//                           <div
//                             style={{
//                               height: 18,
//                               width: 18,
//                               background: "#00B8D9",
//                               borderRadius: 15,
//                             }}
//                           ></div>
//                         }
//                         checkedIcon={
//                           <div
//                             style={{
//                               height: 26,
//                               width: 26,
//                               background: "#00B8D9",
//                               borderRadius: 15,
//                             }}
//                           >
//                             <CheckIcon sx={{ color: "white" }} />
//                           </div>
//                         }
//                       />
//                     }
//                   />
//                   <FormControlLabel
//                     sx={{ margin: 0 }}
//                     value="darkblue"
//                     control={
//                       <Radio
//                         icon={
//                           <div
//                             style={{
//                               height: 18,
//                               width: 18,
//                               background: "#003768",
//                               borderRadius: 15,
//                             }}
//                           ></div>
//                         }
//                         checkedIcon={
//                           <div
//                             style={{
//                               height: 26,
//                               width: 26,
//                               background: "#003768",
//                               borderRadius: 15,
//                             }}
//                           >
//                             <CheckIcon sx={{ color: "white" }} />
//                           </div>
//                         }
//                       />
//                     }
//                   />
//                   <FormControlLabel
//                     sx={{ margin: 0 }}
//                     value="warning"
//                     control={
//                       <Radio
//                         sx={{
//                           ":hover": {
//                             backgroundColor: "rgba(255, 171, 0, 0.10)",
//                           },
//                         }}
//                         icon={
//                           <div
//                             style={{
//                               height: 18,
//                               width: 18,
//                               background: "#FFAB00",
//                               borderRadius: 15,
//                             }}
//                           ></div>
//                         }
//                         checkedIcon={
//                           <div
//                             style={{
//                               height: 26,
//                               width: 26,
//                               background: "#FFAB00",
//                               borderRadius: 15,
//                             }}
//                           >
//                             <CheckIcon sx={{ color: "white" }} />
//                           </div>
//                         }
//                       />
//                     }
//                   />
//                   <FormControlLabel
//                     sx={{ margin: 0 }}
//                     value="cream"
//                     control={
//                       <Radio
//                         icon={
//                           <div
//                             style={{
//                               height: 18,
//                               width: 18,
//                               background: "#FFAC82",
//                               borderRadius: 15,
//                             }}
//                           ></div>
//                         }
//                         checkedIcon={
//                           <div
//                             style={{
//                               height: 26,
//                               width: 26,
//                               background: "#FFAC82",
//                               borderRadius: 15,
//                             }}
//                           >
//                             <CheckIcon sx={{ color: "white" }} />
//                           </div>
//                         }
//                       />
//                     }
//                   />
//                   <FormControlLabel
//                     sx={{ margin: 0 }}
//                     value="red"
//                     control={
//                       <Radio
//                         icon={
//                           <div
//                             style={{
//                               height: 18,
//                               width: 18,
//                               background: "#B71D18",
//                               borderRadius: 15,
//                             }}
//                           ></div>
//                         }
//                         checkedIcon={
//                           <div
//                             style={{
//                               height: 26,
//                               width: 26,
//                               background: "#B71D18",
//                               borderRadius: 15,
//                             }}
//                           >
//                             <CheckIcon sx={{ color: "white" }} />
//                           </div>
//                         }
//                       />
//                     }
//                   />
//                 </RadioGroup>
//               </Stack>
//             </Box>
//           </DialogContent>
//           <DialogActions>
//             <Button
//               variant="contained"
//               color="neutral"
//               onClick={newHandleClose}
//             >
//               Save Changes
//             </Button>
//             <Button
//               variant="outlined"
//               color="neutralBorder"
//               sx={{ border: "1px solid rgba(145, 158, 171, 0.32) " }}
//               onClick={newHandleClose}
//               autoFocus
//             >
//               Cancel
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </Box>

//       {/* Card */}
//       <Box>
//         <Button variant="outlined" onClick={cardHandleClickOpen}>
//           Card
//         </Button>
//         <Dialog
//           sx={{
//             "& .MuiDialog-container": {
//               "& .MuiPaper-root": {
//                 width: "100%",
//                 maxWidth: "480px",
//               },
//             },
//           }}
//           open={openCard}
//           onClose={cardHandleClose}
//           aria-labelledby="card-dialog-title"
//           aria-describedby="card-dialog-description"
//         >
//           <DialogTitle
//             id="card-dialog-title"
//             variant="h6"
//             display="flex"
//             justifyContent="space-between"
//           >
//             <Box display="flex" alignItems="center" gap={3}>
//               Card
//             </Box>
//             <Button color="inherit">
//               <AddIcon />
//               Add
//             </Button>
//           </DialogTitle>
//           <DialogContent sx={{ maxHeight: 510 }}>
//             <Box
//               component="form"
//               sx={{
//                 "& > :not(style)": { mt: 1, width: "100%" },
//               }}
//               noValidate
//               autoComplete="off"
//             >
//               <Stack spacing={4}>
//                 <TextField
//                   fullWidth
//                   variant="outlined"
//                   placeholder="Search"
//                   InputProps={{
//                     startAdornment: (
//                       <InputAdornment position="start">
//                         <IconButton aria-label="search">
//                           <SearchIcon />
//                         </IconButton>
//                       </InputAdornment>
//                     ),
//                   }}
//                 />

//                 <Card
//                   elevation={0}
//                   sx={{
//                     padding: 4,
//                     border: "1px solid rgba(145, 158, 171, 0.16)",
//                     borderRadius: 2,
//                     position: "relative",
//                   }}
//                 >
//                   <img src={mastercard} width="35" alt="mastercard" />
//                   <Typography variant="subtitle2">
//                     **** **** **** 5678
//                   </Typography>
//                   <IconButton sx={{ position: "absolute", right: 5, top: 10 }}>
//                     <MoreVertIcon />
//                   </IconButton>
//                 </Card>

//                 <Card
//                   elevation={0}
//                   sx={{
//                     padding: 4,
//                     border: "1px solid rgba(145, 158, 171, 0.16)",
//                     borderRadius: 2,
//                     position: "relative",
//                   }}
//                 >
//                   <img src={visa} width="35" alt="mastercard" />
//                   <Typography variant="subtitle2">
//                     **** **** **** 1234
//                   </Typography>
//                   <IconButton sx={{ position: "absolute", right: 5, top: 10 }}>
//                     <MoreVertIcon />
//                   </IconButton>
//                 </Card>

//                 <Card
//                   elevation={0}
//                   sx={{
//                     padding: 4,
//                     border: "1px solid rgba(145, 158, 171, 0.16)",
//                     borderRadius: 2,
//                     position: "relative",
//                   }}
//                 >
//                   <img src={visa} width="35" alt="mastercard" />
//                   <Typography variant="subtitle2">
//                     **** **** **** 9547
//                   </Typography>
//                   <IconButton sx={{ position: "absolute", right: 5, top: 10 }}>
//                     <MoreVertIcon />
//                   </IconButton>
//                 </Card>

//                 <Card
//                   elevation={0}
//                   sx={{
//                     padding: 4,
//                     border: "1px solid rgba(145, 158, 171, 0.16)",
//                     borderRadius: 2,
//                     position: "relative",
//                   }}
//                 >
//                   <img src={mastercard} width="35" alt="mastercard" />
//                   <Typography variant="subtitle2">
//                     **** **** **** 6589
//                   </Typography>
//                   <IconButton sx={{ position: "absolute", right: 5, top: 10 }}>
//                     <MoreVertIcon />
//                   </IconButton>
//                 </Card>
//               </Stack>
//             </Box>
//           </DialogContent>
//           <DialogActions>
//             <Button
//               variant="contained"
//               color="neutral"
//               onClick={cardHandleClose}
//             >
//               Save Changes
//             </Button>
//             <Button
//               variant="outlined"
//               color="neutralBorder"
//               sx={{ border: "1px solid rgba(145, 158, 171, 0.32) " }}
//               onClick={cardHandleClose}
//               autoFocus
//             >
//               Cancel
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </Box>
//     </Stack>
//   );
// }

import DialogView from "../sections/mui/dialog-view";

// ----------------------------------------------------------------------

export default function DialogPage() {
  return (
    <>
      <DialogView />
    </>
  );
}
