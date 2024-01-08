import * as React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function AdvertisingDialog() {
  const [openAdvertising, setOpenAdvertising] = React.useState(false);

  const advertisingHandleClickOpen = () => {
    setOpenAdvertising(true);
  };

  const advertisingHandleClose = () => {
    setOpenAdvertising(false);
  };

  return (
    <Stack gap={5}>
      {/* open dialog alert */}

      <Box>
        <Button variant="outlined" onClick={advertisingHandleClickOpen}>
          Advertising
        </Button>
        <Dialog
          sx={{
            "& .MuiDialog-container": {
              "& .MuiPaper-root": {
                width: "100%",
                maxWidth: "480px",
              },
            },
          }}
          open={openAdvertising}
          onClose={advertisingHandleClose}
          aria-labelledby="advertising-dialog-title"
          aria-describedby="advertising-dialog-description"
        >
          <DialogContent>
            <Box
              component="img"
              sx={{
                height: 240,
                width: 240,
                borderRadius: 50,
                display: "block",
                margin: "0 auto",
                padding: "40px",
              }}
              alt="The house from the offer."
              src="https://shorturl.at/mpJK6"
            />

            <Typography variant="h4" textAlign="center">
              Advertising
            </Typography>
            <Typography textAlign="center">
              In today’s net-savvy world it has become common for any business to have a website which they use mostly
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button size="large" sx={{ width: "100%" }} variant="contained" color="primary" onClick={advertisingHandleClose} autoFocus>
              Install
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Stack>
  );
}
