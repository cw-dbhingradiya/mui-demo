import * as React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function ProposeDialog() {
  const [openPropose, setOpenPropose] = React.useState(false);

  const proposeHandleClickOpen = () => {
    setOpenPropose(true);
  };

  const proposeHandleClose = () => {
    setOpenPropose(false);
  };

  return (
    <Stack gap={5}>
      <Box>
        <Button variant="outlined" onClick={proposeHandleClickOpen}>
          Propose
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
          open={openPropose}
          onClose={proposeHandleClose}
          aria-labelledby="propose-dialog-title"
          aria-describedby="propose-dialog-description"
        >
          <Box component="img" src="https://shorturl.at/bjrsD" sx={{ width: "100%" }} />
          <DialogContent>
            <Typography variant="h4">Advertising</Typography>
            <Typography>In today’s net-savvy world it has become common for any business to have a website which they use mostly</Typography>
          </DialogContent>
          <DialogActions>
            <Button size="large" fullWidth variant="contained" color="neutral" onClick={proposeHandleClose}>
              Accept
            </Button>
            <Button
              size="large"
              fullWidth
              variant="outlined"
              color="neutralBorder"
              sx={{ border: "1px solid rgba(145, 158, 171, 0.32) " }}
              onClick={proposeHandleClose}
              autoFocus
            >
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Stack>
  );
}
