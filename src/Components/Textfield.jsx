// import * as React from "react";
// import TextField from "@mui/material/TextField";
// import { Stack } from "@mui/system";
// import InputAdornment from "@mui/material/InputAdornment";
// import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
// import ReportProblemIcon from "@mui/icons-material/ReportProblem";
// import InfoIcon from "@mui/icons-material/Info";
// import MenuItem from "@mui/material/MenuItem";
// import { Typography } from "@mui/material";
// import FormControl from "@mui/material/FormControl";
// import InputLabel from "@mui/material/InputLabel";
// import OutlinedInput from "@mui/material/OutlinedInput";
// import IconButton from "@mui/material/IconButton";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import FilledInput from "@mui/material/FilledInput";
// import Input from "@mui/material/Input";

// const currencies = [
//   { value: "USD", label: "$" },
//   { value: "EUR", label: "€" },
//   { value: "BTC", label: "฿" },
//   { value: "JPY", label: "¥" },
//   {
//     value: "Hover",
//     label: "Hover",
//   },
//   {
//     value: "Focused",
//     label: "Focused",
//   },
// ];

// export default function BasicTextFields() {
//   const [showPassword, setShowPassword] = React.useState(false);

//   const handleClickShowPassword = () => setShowPassword((show) => !show);

//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   };

//   return (
//     <Stack gap={8}>
//       <Stack
//         component="form"
//         noValidate
//         sx={{
//           "& .MuiTextField-root": { width: "360px" },
//         }}
//         autoComplete="off"
//       >
//         <Stack direction="row">
//           <Typography variant="h6">State</Typography>
//           <Stack>
//             <Stack direction="row">
//               <TextField id="outlined-basic" label="Label" variant="outlined" />
//               <TextField
//                 id="standard-read-only-input"
//                 label="Label"
//                 defaultValue="Value"
//                 variant="outlined"
//               />
//             </Stack>

//             <Stack direction="row">
//               <TextField
//                 id="outlined-basic"
//                 label="Label"
//                 variant="outlined"
//                 defaultValue="Hovered"
//               />
//               <TextField
//                 id="outlined-basic"
//                 label="Label"
//                 variant="outlined"
//                 defaultValue="Focused |"
//               />
//             </Stack>

//             <Stack direction="row">
//               <TextField
//                 error
//                 id="outlined-error"
//                 label="Label"
//                 variant="outlined"
//               />
//               <TextField
//                 disabled
//                 id="outlined-disabled"
//                 label="Label"
//                 defaultValue="Disabled"
//               />
//             </Stack>
//           </Stack>
//         </Stack>

//         <Stack direction="row">
//           <Typography variant="h6">Adornment</Typography>
//           <FormControl
//             variant="outlined"
//             sx={{
//               "&.MuiFormControl-root": { width: "360px" },
//             }}
//           >
//             <InputLabel htmlFor="outlined-adornment-password">Label</InputLabel>
//             <OutlinedInput
//               defaultValue="Value"
//               id="outlined-adornment-password"
//               type={showPassword ? "text" : "password"}
//               startAdornment={
//                 <InputAdornment position="start">
//                   <AttachMoneyIcon />
//                 </InputAdornment>
//               }
//               endAdornment={
//                 <InputAdornment position="end">
//                   <IconButton
//                     aria-label="toggle password visibility"
//                     onClick={handleClickShowPassword}
//                     onMouseDown={handleMouseDownPassword}
//                     edge="end"
//                   >
//                     {showPassword ? <VisibilityOff /> : <Visibility />}
//                   </IconButton>
//                 </InputAdornment>
//               }
//               label="Password"
//             />
//           </FormControl>

//           <FormControl
//             variant="outlined"
//             sx={{
//               "&.MuiFormControl-root": { width: "360px" },
//             }}
//           >
//             <InputLabel htmlFor="outlined-adornment-password">Label</InputLabel>
//             <OutlinedInput
//               defaultValue="Value"
//               id="outlined-adornment-password"
//               type={showPassword ? "text" : "password"}
//               startAdornment={
//                 <InputAdornment position="start">
//                   <AttachMoneyIcon />
//                 </InputAdornment>
//               }
//               endAdornment={
//                 <InputAdornment position="end">
//                   <IconButton
//                     aria-label="toggle password visibility"
//                     onClick={handleClickShowPassword}
//                     onMouseDown={handleMouseDownPassword}
//                     edge="end"
//                   >
//                     {showPassword ? <VisibilityOff /> : <Visibility />}
//                   </IconButton>
//                 </InputAdornment>
//               }
//               label="Password"
//             />
//           </FormControl>
//         </Stack>

//         <Stack direction="row">
//           <Typography variant="h6">HelpText</Typography>
//           <TextField
//             id="outlined-error-helper-text"
//             label="Label"
//             helperText={
//               <p
//                 style={{
//                   margin: 0,
//                   fontSize: 12,
//                   fontWeight: 400,
//                   display: "flex",
//                   alignItems: "center",
//                   gap: 1,
//                 }}
//               >
//                 <InfoIcon sx={{ fontSize: 20, color: "#637381" }} />
//                 Caption text, description, notification
//               </p>
//             }
//           />
//           <TextField
//             error
//             id="outlined-error-helper-text"
//             label="Label"
//             defaultValue="Incorrect"
//             helperText={
//               <p
//                 style={{
//                   margin: 0,
//                   fontSize: 12,
//                   fontWeight: 400,
//                   display: "flex",
//                   alignItems: "center",
//                   gap: 1,
//                 }}
//               >
//                 <ReportProblemIcon sx={{ fontSize: 20, color: "error.main" }} />
//                 Caption text, description, notification
//               </p>
//             }
//           />
//         </Stack>

//         <Stack direction="row">
//           <Typography variant="h6">Size</Typography>
//           <TextField label="Medium" id="outlined-size-normal" />
//           <TextField label="Small" id="outlined-size-small" size="small" />
//         </Stack>
//       </Stack>

//       <Stack
//         component="form"
//         noValidate
//         autoComplete="off"
//         sx={{
//           "& .MuiTextField-root": { width: "360px" },
//         }}
//       >
//         <Typography variant="h4">Filled</Typography>
//         <Stack direction="row">
//           <Typography variant="h6">State</Typography>
//           <Stack>
//             <Stack direction="row">
//               <TextField id="filled-basic" label="Label" variant="filled" />
//               <TextField
//                 id="filled-read-only-input"
//                 label="Label"
//                 defaultValue="Value"
//                 InputProps={{
//                   readOnly: true,
//                 }}
//                 variant="filled"
//               />
//             </Stack>

//             <Stack direction="row">
//               <TextField id="filled-basic" label="Label" variant="filled" />
//               <TextField id="filled-basic" label="Label" variant="filled" />
//             </Stack>

//             <Stack direction="row">
//               <TextField
//                 error
//                 id="filled-error"
//                 label="Label"
//                 variant="filled"
//                 defaultValue="Incorrect"
//               />
//               <TextField
//                 disabled
//                 id="filled-disabled"
//                 label="Label"
//                 defaultValue="Disabled"
//                 variant="filled"
//               />
//             </Stack>
//           </Stack>
//         </Stack>

//         <Stack direction="row">
//           <Typography variant="h6">Adornment</Typography>
//           <FormControl
//             variant="filled"
//             sx={{
//               "&.MuiFormControl-root": { width: "360px" },
//             }}
//           >
//             <InputLabel htmlFor="filled-adornment-password">Label</InputLabel>
//             <FilledInput
//               defaultValue="Value"
//               id="filled-adornment-password"
//               type={showPassword ? "text" : "password"}
//               startAdornment={
//                 <InputAdornment position="start">
//                   <AttachMoneyIcon />
//                 </InputAdornment>
//               }
//               endAdornment={
//                 <InputAdornment position="end">
//                   <IconButton
//                     aria-label="toggle password visibility"
//                     onClick={handleClickShowPassword}
//                     onMouseDown={handleMouseDownPassword}
//                     edge="end"
//                   >
//                     {showPassword ? <VisibilityOff /> : <Visibility />}
//                   </IconButton>
//                 </InputAdornment>
//               }
//               label="Password"
//             />
//           </FormControl>
//           <FormControl
//             variant="filled"
//             sx={{
//               "&.MuiFormControl-root": { width: "360px" },
//             }}
//           >
//             <InputLabel htmlFor="filled-adornment-password">Label</InputLabel>
//             <FilledInput
//               defaultValue="Value"
//               id="filled-adornment-password"
//               type={showPassword ? "text" : "password"}
//               startAdornment={
//                 <InputAdornment position="start">
//                   <AttachMoneyIcon />
//                 </InputAdornment>
//               }
//               endAdornment={
//                 <InputAdornment position="end">
//                   <IconButton
//                     aria-label="toggle password visibility"
//                     onClick={handleClickShowPassword}
//                     onMouseDown={handleMouseDownPassword}
//                     edge="end"
//                   >
//                     {showPassword ? <VisibilityOff /> : <Visibility />}
//                   </IconButton>
//                 </InputAdornment>
//               }
//               label="Password"
//             />
//           </FormControl>
//         </Stack>

//         <Stack direction="row">
//           <Typography variant="h6">HelpText</Typography>
//           <TextField
//             variant="filled"
//             id="filled-helperText"
//             label="Label"
//             helperText={
//               <p
//                 style={{
//                   margin: 0,
//                   fontSize: 12,
//                   fontWeight: 400,
//                   display: "flex",
//                   alignItems: "center",
//                   gap: 1,
//                 }}
//               >
//                 <InfoIcon sx={{ fontSize: 20, color: "#637381" }} />
//                 Caption text, description, notification
//               </p>
//             }
//           />
//           <TextField
//             variant="filled"
//             error
//             id="filled-error-helperText"
//             label="Label"
//             defaultValue="Incorrect"
//             helperText={
//               <p
//                 style={{
//                   margin: 0,
//                   fontSize: 12,
//                   fontWeight: 400,
//                   display: "flex",
//                   alignItems: "center",
//                   gap: 1,
//                 }}
//               >
//                 <ReportProblemIcon sx={{ fontSize: 20, color: "error.main" }} />
//                 Caption text, description, notification
//               </p>
//             }
//           />
//         </Stack>

//         <Stack direction="row">
//           <Typography variant="h6">Size</Typography>
//           <TextField variant="filled" label="Medium" id="filled-size-normal" />
//           <TextField
//             variant="filled"
//             label="Small"
//             id="filled-size-small"
//             size="small"
//           />
//         </Stack>
//       </Stack>

//       <Stack
//         component="form"
//         noValidate
//         autoComplete="off"
//         sx={{
//           "& .MuiTextField-root": { width: "360px" },
//         }}
//       >
//         <Typography variant="h4">Standard</Typography>
//         <Stack direction="row">
//           <Typography variant="h6">State</Typography>
//           <Stack>
//             <Stack direction="row">
//               <TextField id="standard-basic" label="Label" variant="standard" />
//               <TextField
//                 id="standard-read-only-input"
//                 label="Label"
//                 defaultValue="Value"
//                 InputProps={{
//                   readOnly: true,
//                 }}
//                 variant="standard"
//               />
//             </Stack>

//             <Stack direction="row">
//               <TextField id="standard-basic" label="Label" variant="standard" />
//               <TextField id="standard-basic" label="Label" variant="standard" />
//             </Stack>

//             <Stack direction="row" pb={5}>
//               <TextField
//                 error
//                 id="standard-error"
//                 label="Label"
//                 variant="standard"
//               />
//               <TextField
//                 disabled
//                 id="standard-disabled"
//                 label="Label"
//                 defaultValue="Disabled"
//                 variant="standard"
//               />
//             </Stack>
//           </Stack>
//         </Stack>

//         <Stack direction="row">
//           <Typography variant="h6">Adornment</Typography>
//           <FormControl
//             variant="filled"
//             sx={{
//               "&.MuiFormControl-root": { width: "360px" },
//             }}
//           >
//             <InputLabel htmlFor="filled-adornment-password">Label</InputLabel>
//             <Input
//               defaultValue="Value"
//               id="filled-adornment-password"
//               type={showPassword ? "text" : "password"}
//               startAdornment={
//                 <InputAdornment position="start">
//                   <AttachMoneyIcon />
//                 </InputAdornment>
//               }
//               endAdornment={
//                 <InputAdornment position="end">
//                   <IconButton
//                     aria-label="toggle password visibility"
//                     onClick={handleClickShowPassword}
//                     onMouseDown={handleMouseDownPassword}
//                     edge="end"
//                   >
//                     {showPassword ? <VisibilityOff /> : <Visibility />}
//                   </IconButton>
//                 </InputAdornment>
//               }
//               label="Password"
//             />
//           </FormControl>
//           <FormControl
//             variant="filled"
//             sx={{
//               "&.MuiFormControl-root": { width: "360px" },
//             }}
//           >
//             <InputLabel htmlFor="filled-adornment-password">Label</InputLabel>
//             <Input
//               defaultValue="Value"
//               id="filled-adornment-password"
//               type={showPassword ? "text" : "password"}
//               startAdornment={
//                 <InputAdornment position="start">
//                   <AttachMoneyIcon />
//                 </InputAdornment>
//               }
//               endAdornment={
//                 <InputAdornment position="end">
//                   <IconButton
//                     aria-label="toggle password visibility"
//                     onClick={handleClickShowPassword}
//                     onMouseDown={handleMouseDownPassword}
//                     edge="end"
//                   >
//                     {showPassword ? <VisibilityOff /> : <Visibility />}
//                   </IconButton>
//                 </InputAdornment>
//               }
//               label="Password"
//             />
//           </FormControl>
//         </Stack>

//         <Stack direction="row">
//           <Typography variant="h6">HelpText</Typography>
//           <TextField
//             variant="standard"
//             id="standard-helperText"
//             label="Label"
//             helperText={
//               <p
//                 style={{
//                   margin: 0,
//                   fontSize: 12,
//                   fontWeight: 400,
//                   display: "flex",
//                   alignItems: "center",
//                   gap: 1,
//                 }}
//               >
//                 <InfoIcon sx={{ fontSize: 20, color: "#637381" }} />
//                 Caption text, description, notification
//               </p>
//             }
//           />
//           <TextField
//             variant="standard"
//             error
//             id="standard-error-helperText"
//             label="Label"
//             defaultValue="Incorrect"
//             helperText={
//               <p
//                 style={{
//                   margin: 0,
//                   fontSize: 12,
//                   fontWeight: 400,
//                   display: "flex",
//                   alignItems: "center",
//                   gap: 1,
//                 }}
//               >
//                 <ReportProblemIcon sx={{ fontSize: 20, color: "error.main" }} />
//                 Caption text, description, notification
//               </p>
//             }
//           />
//         </Stack>

//         <Stack direction="row">
//           <Typography variant="h6">Size</Typography>
//           <TextField
//             variant="standard"
//             label="Medium"
//             id="standard-size-normal"
//           />
//           <TextField
//             variant="standard"
//             label="Small"
//             id="standard-size-small"
//             size="small"
//           />
//         </Stack>
//       </Stack>

//       <Stack
//         component="form"
//         noValidate
//         autoComplete="off"
//         sx={{
//           "& .MuiTextField-root": { width: "360px" },
//         }}
//       >
//         <Typography variant="h4">Select</Typography>
//         <Stack direction="row">
//           <Typography variant="h6">Variant</Typography>
//           <TextField
//             select
//             id="outlined-select-currency"
//             label="Label"
//             variant="outlined"
//           >
//             {currencies.map((option) => (
//               <MenuItem key={option.value} value={option.value}>
//                 {option.label}
//               </MenuItem>
//             ))}
//           </TextField>
//           <TextField
//             id="standard-select-currency"
//             label="Label"
//             variant="standard"
//             select
//           >
//             {currencies.map((option) => (
//               <MenuItem key={option.value} value={option.value}>
//                 {option.label}
//               </MenuItem>
//             ))}
//           </TextField>

//           <TextField
//             select
//             id="filled-select-currency"
//             label="Label"
//             variant="filled"
//           >
//             {currencies.map((option) => (
//               <MenuItem key={option.value} value={option.value}>
//                 {option.label}
//               </MenuItem>
//             ))}
//           </TextField>
//         </Stack>

//         <Stack direction="row">
//           <Typography variant="h6">State</Typography>
//           <Stack>
//             <Stack direction="row">
//               <TextField
//                 select
//                 id="outlined-basic"
//                 label="Label"
//                 variant="outlined"
//               >
//                 {currencies.map((option) => (
//                   <MenuItem key={option.value} value={option.value}>
//                     {option.label}
//                   </MenuItem>
//                 ))}
//               </TextField>
//               <TextField
//                 select
//                 id="outlined-basic"
//                 label="Label"
//                 variant="outlined"
//                 defaultValue="EUR"
//               >
//                 {currencies.map((option) => (
//                   <MenuItem key={option.value} value={option.value}>
//                     {option.label}
//                   </MenuItem>
//                 ))}
//               </TextField>
//             </Stack>

//             <Stack direction="row">
//               <TextField
//                 select
//                 id="outlined-basic"
//                 label="Label"
//                 variant="outlined"
//                 defaultValue="Hover"
//               >
//                 {currencies.map((option) => (
//                   <MenuItem key={option.value} value={option.value}>
//                     {option.label}
//                   </MenuItem>
//                 ))}
//               </TextField>
//               <TextField
//                 select
//                 id="outlined-basic"
//                 label="Label"
//                 variant="outlined"
//                 defaultValue="EUR"
//                 defaultValue="Focused"
//               >
//                 {currencies.map((option) => (
//                   <MenuItem key={option.value} value={option.value}>
//                     {option.label}
//                   </MenuItem>
//                 ))}
//               </TextField>
//             </Stack>

//             <Stack direction="row" pb={5}>
//               <TextField
//                 error
//                 select
//                 id="outlined-error"
//                 label="Label"
//                 variant="outlined"
//                 defaultValue="EUR"
//               >
//                 {currencies.map((option) => (
//                   <MenuItem key={option.value} value={option.value}>
//                     {option.label}
//                   </MenuItem>
//                 ))}
//               </TextField>
//               <TextField
//                 disabled
//                 select
//                 id="outlined-disabled"
//                 label="Label"
//                 defaultValue="EUR"
//                 variant="outlined"
//               >
//                 {currencies.map((option) => (
//                   <MenuItem key={option.value} value={option.value}>
//                     {option.label}
//                   </MenuItem>
//                 ))}
//               </TextField>
//             </Stack>
//           </Stack>
//         </Stack>

//         <Stack direction="row">
//           <Typography variant="h6">Adornment</Typography>
//           <TextField
//             select
//             variant="outlined"
//             label="Label"
//             id="outlined-start-adornment"
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <AttachMoneyIcon />
//                 </InputAdornment>
//               ),
//             }}
//           >
//             {currencies.map((option) => (
//               <MenuItem key={option.value} value={option.value}>
//                 {option.label}
//               </MenuItem>
//             ))}
//           </TextField>
//           <TextField
//             select
//             variant="outlined"
//             label="Label"
//             defaultValue="Value"
//             id="outlined-start-adornment"
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <AttachMoneyIcon />
//                 </InputAdornment>
//               ),
//             }}
//           >
//             {currencies.map((option) => (
//               <MenuItem key={option.value} value={option.value}>
//                 {option.label}
//               </MenuItem>
//             ))}
//           </TextField>
//         </Stack>

//         <Stack direction="row">
//           <Typography variant="h6">HelpText</Typography>
//           <TextField
//             select
//             id="outlined-select-helperText-currency"
//             label="Label"
//             variant="outlined"
//             helperText={
//               <p
//                 style={{
//                   margin: 0,
//                   fontSize: 12,
//                   fontWeight: 400,
//                   display: "flex",
//                   alignItems: "center",
//                   gap: 1,
//                 }}
//               >
//                 <InfoIcon sx={{ fontSize: 20, color: "#637381" }} />
//                 Caption text, description, notification
//               </p>
//             }
//           >
//             {currencies.map((option) => (
//               <MenuItem key={option.value} value={option.value}>
//                 {option.label}
//               </MenuItem>
//             ))}
//           </TextField>
//           <TextField
//             variant="filled"
//             error
//             select
//             id="filled-error-helperText"
//             label="Label"
//             defaultValue="EUR"
//             helperText={
//               <p
//                 style={{
//                   margin: 0,
//                   fontSize: 12,
//                   fontWeight: 400,
//                   display: "flex",
//                   alignItems: "center",
//                   gap: 1,
//                 }}
//               >
//                 <ReportProblemIcon sx={{ fontSize: 20, color: "error.main" }} />
//                 Caption text, description, notification
//               </p>
//             }
//           >
//             {currencies.map((option) => (
//               <MenuItem key={option.value} value={option.value}>
//                 {option.label}
//               </MenuItem>
//             ))}
//           </TextField>
//         </Stack>

//         <Stack direction="row">
//           <Typography variant="h6">Size</Typography>
//           <TextField
//             select
//             id="outlined-select-currency"
//             label="Medium"
//             variant="outlined"
//           >
//             {currencies.map((option) => (
//               <MenuItem key={option.value} value={option.value}>
//                 {option.label}
//               </MenuItem>
//             ))}
//           </TextField>
//           <TextField
//             select
//             size="small"
//             id="outlined-select-currency"
//             label="Small"
//             variant="outlined"
//           >
//             {currencies.map((option) => (
//               <MenuItem key={option.value} value={option.value}>
//                 {option.label}
//               </MenuItem>
//             ))}
//           </TextField>
//         </Stack>
//       </Stack>

//       <Stack
//         component="form"
//         sx={{
//           "& .MuiTextField-root": { width: 220 },
//         }}
//         noValidate
//         autoComplete="off"
//       >
//         <Typography variant="h4">Textarea</Typography>
//         <Stack direction="row">
//           <Typography variant="h6">Variant</Typography>
//           <TextField
//             id="outlined-multiline-static"
//             label="Label"
//             multiline
//             rows={4}
//           />
//           <TextField
//             id="filled-multiline-static"
//             label="Label"
//             multiline
//             rows={4}
//             variant="filled"
//           />
//           <TextField
//             id="standard-multiline-static"
//             label="Label"
//             multiline
//             rows={4}
//             variant="standard"
//           />
//         </Stack>

//         <Stack direction="row">
//           <Typography variant="h6">State</Typography>
//           <Stack>
//             <Stack direction="row">
//               <TextField
//                 id="outlined-multiline-static"
//                 label="Label"
//                 multiline
//                 rows={4}
//               />
//               <TextField
//                 id="outlined-multiline-static"
//                 label="Label"
//                 multiline
//                 rows={4}
//                 defaultValue="Value"
//               />
//               <TextField
//                 id="outlined-multiline-static"
//                 label="Label"
//                 multiline
//                 rows={4}
//                 defaultValue="Value (Hovered)"
//               />
//             </Stack>

//             <Stack direction="row">
//               <TextField
//                 id="outlined-multiline-static"
//                 label="Label"
//                 multiline
//                 rows={4}
//                 defaultValue="Value (Focused)"
//               />
//               <TextField
//                 id="outlined-multiline-static"
//                 label="Label"
//                 multiline
//                 disabled
//                 rows={4}
//                 defaultValue="Value (Disabled)"
//               />
//               <TextField
//                 id="outlined-multiline-static"
//                 label="Label"
//                 multiline
//                 error
//                 rows={4}
//                 defaultValue="Value (Incorrect)"
//               />
//             </Stack>

//             <Stack direction="row" pb={5}>
//               <TextField
//                 id="outlined-multiline-static"
//                 label="Label"
//                 multiline
//                 rows={4}
//                 defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy "
//               />
//             </Stack>
//           </Stack>
//         </Stack>

//         <Stack direction="row">
//           <Typography variant="h6">HelpText</Typography>
//           <TextField
//             sx={{
//               width: "360px !important",
//             }}
//             id="outlined-multiline-helperText"
//             label="Label"
//             multiline
//             rows={4}
//             helperText={
//               <p
//                 style={{
//                   margin: 0,
//                   fontSize: 12,
//                   fontWeight: 400,
//                   display: "flex",
//                   alignItems: "center",
//                   gap: 1,
//                 }}
//               >
//                 <InfoIcon sx={{ fontSize: 20, color: "#637381" }} />
//                 Caption text, description, notification
//               </p>
//             }
//           />
//           <TextField
//             sx={{
//               width: "360px !important",
//             }}
//             error
//             multiline
//             rows={4}
//             id="outlined-multiline-error-helperText"
//             label="Label"
//             defaultValue="Incorrect"
//             helperText={
//               <p
//                 style={{
//                   margin: 0,
//                   fontSize: 12,
//                   fontWeight: 400,
//                   display: "flex",
//                   alignItems: "center",
//                   gap: 1,
//                 }}
//               >
//                 <ReportProblemIcon sx={{ fontSize: 20, color: "error.main" }} />
//                 Caption text, description, notification
//               </p>
//             }
//           />
//         </Stack>
//       </Stack>
//     </Stack>
//   );
// }

import TextfieldView from "../sections/textfield-view";

// ----------------------------------------------------------------------

export default function Textfield() {
  return (
    <>
      <TextfieldView />
    </>
  );
}
