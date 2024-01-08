import * as React from "react";
import { Box, Card, Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";

export default function FormDialog() {
  const [openForm, setOpenForm] = React.useState(false);

  const formHandleClickOpen = () => {
    setOpenForm(true);
  };

  const formHandleClose = () => {
    setOpenForm(false);
  };

  return (
    <Stack gap={5}>
      <Box>
        <Button variant="outlined" onClick={formHandleClickOpen}>
          Form
        </Button>
        <Dialog
          sx={{
            "& .MuiDialog-container": {
              "& .MuiPaper-root": {
                width: "100%",
                maxWidth: "560px",
              },
            },
          }}
          open={openForm}
          onClose={formHandleClose}
          aria-labelledby="form-dialog-title"
          aria-describedby="form-dialog-description"
        >
          <Box display="flex">
            <Box component="img" src="https://shorturl.at/bjrsD" sx={{ width: 180 }} />
            <DialogContent sx={{ padding: 5 }}>
              <Typography variant="h4">Advertising</Typography>
              <Typography>In today’s net-savvy world it has become common for any business to have a website which they use mostly</Typography>

              <FormControl variant="outlined" sx={{ marginTop: 8, width: "100%" }}>
                <OutlinedInput
                  sx={{
                    height: "48px",
                    borderRadius: 2,
                    borderColor: "rgba(145, 158, 171, 0.20)",
                  }}
                  placeholder="your-email@.com"
                  id="outlined-adornment-weight"
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    "aria-label": "weight",
                  }}
                />
                <Button
                  variant="contained"
                  color="neutral"
                  onClick={formHandleClose}
                  sx={{
                    position: "absolute",
                    width: "64px",
                    right: 0,
                    height: 48,
                  }}
                >
                  Notify
                </Button>
              </FormControl>
            </DialogContent>
          </Box>
        </Dialog>
      </Box>
    </Stack>
  );
}
