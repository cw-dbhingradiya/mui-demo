import * as React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContentText from "@mui/material/DialogContentText";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack gap={5}>
      {/* open dialog alert */}
      <Box>
        <Button variant="outlined" onClick={handleClickOpen}>
          Open alert dialog
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
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title" variant="h6">
            <Box display="flex" alignItems="center" gap={3}>
              <NotificationsIcon sx={{ alignItems: "center" }} />
              {" Something we’d like to propose"}
            </Box>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 21,
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description" variant="body1">
              <Typography color="greyText">
                In today’s net-savvy world it has become common for any business to have a website which they use mostly
              </Typography>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" color="neutral" onClick={handleClose} size="medium">
              Accept
            </Button>
            <Button variant="outlined" color="neutralBorder" onClick={handleClose} autoFocus sx={{ border: "1px solid rgba(145, 158, 171, 0.32) " }}>
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Stack>
  );
}
