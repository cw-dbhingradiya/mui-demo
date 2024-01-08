import * as React from "react";
import { Box, Card, Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import mastercard from "../../../../public/assets/image/mastercard.png";
import visa from "../../../../public/assets/image/visa.png";

export default function CardsDialog() {
  const [openCard, setOpenCard] = React.useState(false);

  const cardHandleClickOpen = () => {
    setOpenCard(true);
  };

  const cardHandleClose = () => {
    setOpenCard(false);
  };

  return (
    <Stack gap={5}>
      <Box>
        <Button variant="outlined" onClick={cardHandleClickOpen}>
          Card
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
          open={openCard}
          onClose={cardHandleClose}
          aria-labelledby="card-dialog-title"
          aria-describedby="card-dialog-description"
        >
          <DialogTitle id="card-dialog-title" variant="h6" display="flex" justifyContent="space-between">
            <Box display="flex" alignItems="center" gap={3}>
              Card
            </Box>
            <Button color="inherit">
              <AddIcon />
              Add
            </Button>
          </DialogTitle>
          <DialogContent sx={{ maxHeight: 510 }}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { mt: 1, width: "100%" },
              }}
              noValidate
              autoComplete="off"
            >
              <Stack spacing={4}>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Search"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconButton aria-label="search">
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

                <Card
                  elevation={0}
                  sx={{
                    padding: 4,
                    border: "1px solid rgba(145, 158, 171, 0.16)",
                    borderRadius: 2,
                    position: "relative",
                  }}
                >
                  <img src={mastercard} width="35" alt="mastercard" />
                  <Typography variant="subtitle2">**** **** **** 5678</Typography>
                  <IconButton sx={{ position: "absolute", right: 5, top: 10 }}>
                    <MoreVertIcon />
                  </IconButton>
                </Card>

                <Card
                  elevation={0}
                  sx={{
                    padding: 4,
                    border: "1px solid rgba(145, 158, 171, 0.16)",
                    borderRadius: 2,
                    position: "relative",
                  }}
                >
                  <img src={visa} width="35" alt="mastercard" />
                  <Typography variant="subtitle2">**** **** **** 1234</Typography>
                  <IconButton sx={{ position: "absolute", right: 5, top: 10 }}>
                    <MoreVertIcon />
                  </IconButton>
                </Card>

                <Card
                  elevation={0}
                  sx={{
                    padding: 4,
                    border: "1px solid rgba(145, 158, 171, 0.16)",
                    borderRadius: 2,
                    position: "relative",
                  }}
                >
                  <img src={visa} width="35" alt="mastercard" />
                  <Typography variant="subtitle2">**** **** **** 9547</Typography>
                  <IconButton sx={{ position: "absolute", right: 5, top: 10 }}>
                    <MoreVertIcon />
                  </IconButton>
                </Card>

                <Card
                  elevation={0}
                  sx={{
                    padding: 4,
                    border: "1px solid rgba(145, 158, 171, 0.16)",
                    borderRadius: 2,
                    position: "relative",
                  }}
                >
                  <img src={mastercard} width="35" alt="mastercard" />
                  <Typography variant="subtitle2">**** **** **** 6589</Typography>
                  <IconButton sx={{ position: "absolute", right: 5, top: 10 }}>
                    <MoreVertIcon />
                  </IconButton>
                </Card>
              </Stack>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" color="neutral" onClick={cardHandleClose}>
              Save Changes
            </Button>
            <Button
              variant="outlined"
              color="neutralBorder"
              sx={{ border: "1px solid rgba(145, 158, 171, 0.32) " }}
              onClick={cardHandleClose}
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
