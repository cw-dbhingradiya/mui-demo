import * as React from "react";
import { Box, Card, Checkbox, Input, Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import { margin } from "@mui/system";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import CheckIcon from "@mui/icons-material/Check";

export default function EventDialog() {
  const [openNew, setOpenNew] = React.useState(false);

  const newHandleClickOpen = () => {
    setOpenNew(true);
  };

  const newHandleClose = () => {
    setOpenNew(false);
  };

  return (
    <Stack gap={5}>
      <Box>
        <Button variant="outlined" onClick={newHandleClickOpen}>
          New Event
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
          open={openNew}
          onClose={newHandleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title" variant="h6">
            <Box display="flex" alignItems="center" gap={3}>
              New Event
            </Box>
          </DialogTitle>
          <DialogContent>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { mt: 1, width: "100%" },
              }}
              noValidate
              autoComplete="off"
            >
              <Stack spacing={3}>
                <TextField
                  sx={{
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      backgroundColor: "red",
                    },
                  }}
                  id="outlined-basic"
                  label="Title"
                  variant="outlined"
                />
                <TextField id="outlined-multiline-static" label="Description" multiline rows={4} />
                <FormControlLabel sx={{ alignItems: "center" }} control={<Switch />} label="All Day" labelPlacement="end" />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  {/* 2 calendars */}
                  <DemoContainer components={["DateRangePicker"]}>
                    <DateRangePicker
                      format="DD - MM - YYYY"
                      calendars={2}
                      sx={{
                        width: "100%",
                        flexDirection: "column",
                        "& .MuiMultiInputDateRangeField-separator": {
                          display: "none",
                        },
                      }}
                    />
                  </DemoContainer>
                </LocalizationProvider>
                <RadioGroup sx={{ gap: 0 }} row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                  <FormControlLabel
                    sx={{ margin: 0 }}
                    value="primary"
                    control={
                      <Radio
                        icon={
                          <div
                            style={{
                              height: 18,
                              width: 18,
                              background: "#00A76F",
                              borderRadius: 15,
                            }}
                          ></div>
                        }
                        checkedIcon={
                          <div
                            style={{
                              height: 26,
                              width: 26,
                              background: "#00A76F",
                              borderRadius: 15,
                            }}
                          >
                            <CheckIcon sx={{ color: "white" }} />
                          </div>
                        }
                      />
                    }
                  />
                  <FormControlLabel
                    sx={{ margin: 0 }}
                    value="info"
                    control={
                      <Radio
                        sx={{
                          ":hover": {
                            backgroundColor: "rgba(0, 184, 217, 0.10)",
                          },
                        }}
                        icon={
                          <div
                            style={{
                              height: 18,
                              width: 18,
                              background: "#00B8D9",
                              borderRadius: 15,
                            }}
                          ></div>
                        }
                        checkedIcon={
                          <div
                            style={{
                              height: 26,
                              width: 26,
                              background: "#00B8D9",
                              borderRadius: 15,
                            }}
                          >
                            <CheckIcon sx={{ color: "white" }} />
                          </div>
                        }
                      />
                    }
                  />
                  <FormControlLabel
                    sx={{ margin: 0 }}
                    value="darkblue"
                    control={
                      <Radio
                        icon={
                          <div
                            style={{
                              height: 18,
                              width: 18,
                              background: "#003768",
                              borderRadius: 15,
                            }}
                          ></div>
                        }
                        checkedIcon={
                          <div
                            style={{
                              height: 26,
                              width: 26,
                              background: "#003768",
                              borderRadius: 15,
                            }}
                          >
                            <CheckIcon sx={{ color: "white" }} />
                          </div>
                        }
                      />
                    }
                  />
                  <FormControlLabel
                    sx={{ margin: 0 }}
                    value="warning"
                    control={
                      <Radio
                        sx={{
                          ":hover": {
                            backgroundColor: "rgba(255, 171, 0, 0.10)",
                          },
                        }}
                        icon={
                          <div
                            style={{
                              height: 18,
                              width: 18,
                              background: "#FFAB00",
                              borderRadius: 15,
                            }}
                          ></div>
                        }
                        checkedIcon={
                          <div
                            style={{
                              height: 26,
                              width: 26,
                              background: "#FFAB00",
                              borderRadius: 15,
                            }}
                          >
                            <CheckIcon sx={{ color: "white" }} />
                          </div>
                        }
                      />
                    }
                  />
                  <FormControlLabel
                    sx={{ margin: 0 }}
                    value="cream"
                    control={
                      <Radio
                        icon={
                          <div
                            style={{
                              height: 18,
                              width: 18,
                              background: "#FFAC82",
                              borderRadius: 15,
                            }}
                          ></div>
                        }
                        checkedIcon={
                          <div
                            style={{
                              height: 26,
                              width: 26,
                              background: "#FFAC82",
                              borderRadius: 15,
                            }}
                          >
                            <CheckIcon sx={{ color: "white" }} />
                          </div>
                        }
                      />
                    }
                  />
                  <FormControlLabel
                    sx={{ margin: 0 }}
                    value="red"
                    control={
                      <Radio
                        icon={
                          <div
                            style={{
                              height: 18,
                              width: 18,
                              background: "#B71D18",
                              borderRadius: 15,
                            }}
                          ></div>
                        }
                        checkedIcon={
                          <div
                            style={{
                              height: 26,
                              width: 26,
                              background: "#B71D18",
                              borderRadius: 15,
                            }}
                          >
                            <CheckIcon sx={{ color: "white" }} />
                          </div>
                        }
                      />
                    }
                  />
                </RadioGroup>
              </Stack>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" color="neutral" onClick={newHandleClose}>
              Save Changes
            </Button>
            <Button
              variant="outlined"
              color="neutralBorder"
              sx={{ border: "1px solid rgba(145, 158, 171, 0.32) " }}
              onClick={newHandleClose}
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
