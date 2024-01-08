import * as React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";

export default function DeleteDialog() {
  const [openDelete, setOpenDelete] = React.useState(false);

  const deleteHandleClickOpen = () => {
    setOpenDelete(true);
  };

  const deleteHandleClose = () => {
    setOpenDelete(false);
  };

  return (
    <Stack gap={5}>
      {/* Delete File */}
      <Box>
        <Button variant="outlined" onClick={deleteHandleClickOpen}>
          Delete File
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
          open={openDelete}
          onClose={deleteHandleClose}
          aria-labelledby="delete-dialog-title"
          aria-describedby="delete-dialog-description"
        >
          <DialogTitle id="delete-dialog-title" variant="h6">
            <Box display="flex" alignItems="center" gap={3}>
              <DeleteIcon sx={{ alignItems: "center" }} />
              {" Delete Files?"}
            </Box>
            <IconButton
              aria-label="close"
              onClick={deleteHandleClose}
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
            <DialogContentText id="delete-dialog-description" variant="body1">
              Digital computers use binary code and Boolean logic to store and process information, allowing.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" color="neutralBorder" onClick={deleteHandleClose} sx={{ border: "1px solid rgba(145, 158, 171, 0.32) " }}>
              Cancel
            </Button>
            <Button variant="contained" color="error" onClick={deleteHandleClose} autoFocus>
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Stack>
  );
}
