import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import InfoIcon from "@mui/icons-material/Info";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import WarningIcon from "@mui/icons-material/Warning";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Stack, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Masonry from "@mui/lab/Masonry";

import ComponentBlock from "../component-block";

const CustomSnackbar = () => {
  const [open, setOpen] = useState(false);
  const [openAction, setOpenAction] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);
  const [openInfoAction, setOpenInfoAction] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [openErrorAction, setOpenErrorAction] = useState(false);
  const [openWarning, setOpenWarning] = useState(false);
  const [openWarningAction, setOpenWarningAction] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openSuccessAction, setOpenSuccessAction] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickAway") {
      return;
    }
    setOpen(false);
  };

  const actionHandleClick = () => {
    setOpenAction(true);
  };

  const actionHandleClose = (event, reason) => {
    if (reason === "clickAway") {
      return;
    }
    setOpenAction(false);
  };

  const infoHandleClick = () => {
    setOpenInfo(true);
  };

  const infoHandleClose = (event, reason) => {
    if (reason === "clickAway") {
      return;
    }
    setOpenInfo(false);
  };

  const infoActionHandleClick = () => {
    setOpenInfoAction(true);
  };

  const infoActionHandleClose = (event, reason) => {
    if (reason === "clickAway") {
      return;
    }
    setOpenInfoAction(false);
  };

  const errorHandleClick = () => {
    setOpenError(true);
  };

  const errorHandleClose = (event, reason) => {
    if (reason === "clickAway") {
      return;
    }
    setOpenError(false);
  };

  const errorActionHandleClick = () => {
    setOpenErrorAction(true);
  };

  const errorActionHandleClose = (event, reason) => {
    if (reason === "clickAway") {
      return;
    }
    setOpenErrorAction(false);
  };

  const warningHandleClick = () => {
    setOpenWarning(true);
  };

  const warningHandleClose = (event, reason) => {
    if (reason === "clickAway") {
      return;
    }
    setOpenWarning(false);
  };

  const warningActionHandleClick = () => {
    setOpenWarningAction(true);
  };

  const warningActionHandleClose = (event, reason) => {
    if (reason === "clickAway") {
      return;
    }
    setOpenWarningAction(false);
  };

  const successHandleClick = () => {
    setOpenSuccess(true);
  };

  const successHandleClose = (event, reason) => {
    if (reason === "clickAway") {
      return;
    }
    setOpenSuccess(false);
  };

  const successActionHandleClick = () => {
    setOpenSuccessAction(true);
  };

  const successActionHandleClose = (event, reason) => {
    if (reason === "clickAway") {
      return;
    }
    setOpenSuccessAction(false);
  };

  return (
    <>
      <Container sx={{ my: 10 }}>
        <Masonry columns={{ xs: 1, md: 2 }} spacing={5}>
          <ComponentBlock title="Simple">
            <Button variant="contained" onClick={handleClick}>
              Show Snackbar
            </Button>
            <Snackbar
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              autoHideDuration={6000}
              onClose={handleClose}
              message="This is a default message!"
              action={
                <IconButton size="small" aria-label="close" color="greyDark" onClick={handleClose}>
                  <CloseIcon fontSize="small" />
                </IconButton>
              }
            />
            {/* info */}
            <Button variant="contained" color="info" onClick={infoHandleClick}>
              Info Snackbar
            </Button>
            <Snackbar
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={openInfo}
              autoHideDuration={9000}
              onClose={infoHandleClose}
              message={
                <span style={{ display: "flex", alignItems: "center" }}>
                  <IconButton color="info" sx={{ ":hover": { background: "none" }, padding: "0" }}>
                    <InfoIcon
                      color="info"
                      fontSize="large"
                      style={{
                        marginRight: "8px",
                        backgroundColor: "#00B8D929",
                        padding: 12,
                        borderRadius: 8,
                        width: 48,
                        height: 48,
                      }}
                    />
                  </IconButton>
                  This is a info message!
                </span>
              }
              action={
                <IconButton size="small" aria-label="close" color="greyDark">
                  <CloseIcon onClick={infoHandleClose} fontSize="small" />
                </IconButton>
              }
            />

            {/* error */}
            <Button variant="contained" color="error" onClick={errorHandleClick}>
              error Snackbar
            </Button>
            <Snackbar
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={openError}
              autoHideDuration={9000}
              onClose={errorHandleClose}
              message={
                <span style={{ display: "flex", alignItems: "center" }}>
                  <ReportGmailerrorredIcon
                    color="error"
                    style={{
                      marginRight: "8px",
                      backgroundColor: "#FF563029",
                      padding: 12,
                      borderRadius: 8,
                      width: 48,
                      height: 48,
                    }}
                  />
                  This is a error message!
                </span>
              }
              action={
                <IconButton size="small" aria-label="close" color="greyDark" onClick={errorHandleClose}>
                  <CloseIcon fontSize="small" />
                </IconButton>
              }
            />

            {/* warning */}

            <Button variant="contained" color="warning" onClick={warningHandleClick}>
              warning Snackbar
            </Button>
            <Snackbar
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={openWarning}
              autoHideDuration={9000}
              onClose={warningHandleClose}
              message={
                <span style={{ display: "flex", alignItems: "center" }}>
                  <WarningIcon
                    color="warning"
                    style={{
                      marginRight: "8px",
                      backgroundColor: "#FFAB0029",
                      padding: 12,
                      borderRadius: 8,
                      width: 48,
                      height: 48,
                    }}
                  />
                  This is a warning message!
                </span>
              }
              action={
                <IconButton size="small" aria-label="close" color="greyDark" onClick={warningHandleClose}>
                  <CloseIcon fontSize="small" />
                </IconButton>
              }
            />

            {/* success */}
            <Button variant="contained" color="success" onClick={successHandleClick}>
              success Snackbar
            </Button>
            <Snackbar
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={openSuccess}
              autoHideDuration={9000}
              onClose={successHandleClose}
              message={
                <span style={{ display: "flex", alignItems: "center" }}>
                  <CheckCircleIcon
                    color="success"
                    style={{
                      marginRight: "8px",
                      backgroundColor: "#22C55E29",
                      padding: 12,
                      borderRadius: 8,
                      width: 48,
                      height: 48,
                    }}
                  />
                  This is a Success message!
                </span>
              }
              action={
                <IconButton size="small" aria-label="close" color="greyDark" onClick={successHandleClose}>
                  <CloseIcon fontSize="small" />
                </IconButton>
              }
            />
          </ComponentBlock>

          <ComponentBlock title="Action">
            <Stack>
              <Button variant="contained" onClick={actionHandleClick}>
                Show Snackbar
              </Button>
              <Snackbar
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={openAction}
                autoHideDuration={9000}
                onClose={actionHandleClose}
                message={
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    This is a info message!
                  </span>
                }
                action={
                  <IconButton
                    size="small"
                    aria-label="close"
                    color="greyDark"
                    onClick={actionHandleClose}
                    sx={{
                      background: "transparent",
                      ":hover": { background: "transparent" },
                    }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{
                        height: 30,
                        width: 48,
                        fontSize: 13,
                      }}
                    >
                      Action
                    </Button>
                  </IconButton>
                }
              />
            </Stack>

            {/* info */}
            <Stack>
              <Button variant="contained" color="info" onClick={infoActionHandleClick}>
                Info Snackbar
              </Button>
              <Snackbar
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={openInfoAction}
                autoHideDuration={9000}
                onClose={infoActionHandleClose}
                message={
                  <span style={{ display: "flex", alignItems: "center" }}>
                    <InfoIcon
                      color="info"
                      style={{
                        marginRight: "8px",
                        backgroundColor: "#00B8D929",
                        padding: 12,
                        borderRadius: 8,
                        width: 48,
                        height: 48,
                      }}
                    />
                    This is a info message!
                  </span>
                }
                action={
                  <IconButton
                    size="small"
                    aria-label="close"
                    color="greyDark"
                    onClick={infoActionHandleClose}
                    sx={{
                      background: "transparent",
                      ":hover": { background: "transparent" },
                    }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{
                        bgcolor: "info.soft",
                        color: "info.main",
                        height: 30,
                        width: 48,
                        fontSize: 13,
                        ":hover": {
                          color: "white",
                          bgcolor: "info.main",
                        },
                      }}
                    >
                      Action
                    </Button>
                  </IconButton>
                }
              />
            </Stack>

            {/* error */}
            <Stack>
              <Button variant="contained" color="error" onClick={errorActionHandleClick}>
                error Snackbar
              </Button>
              <Snackbar
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={openErrorAction}
                autoHideDuration={9000}
                onClose={errorActionHandleClose}
                message={
                  <span style={{ display: "flex", alignItems: "center" }}>
                    <WarningIcon
                      color="error"
                      style={{
                        marginRight: "8px",
                        backgroundColor: "#FF563029",
                        padding: 12,
                        borderRadius: 8,
                        width: 48,
                        height: 48,
                      }}
                    />
                    This is a warning message!
                  </span>
                }
                action={
                  <IconButton
                    size="small"
                    aria-label="close"
                    color="greyDark"
                    onClick={errorActionHandleClose}
                    sx={{
                      background: "transparent",
                      ":hover": { background: "transparent" },
                    }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{
                        bgcolor: "error.soft",
                        color: "error.main",
                        height: 30,
                        width: 48,
                        fontSize: 13,
                        ":hover": {
                          color: "white",
                          bgcolor: "error.main",
                        },
                      }}
                    >
                      Action
                    </Button>
                  </IconButton>
                }
              />
            </Stack>

            {/* warning */}
            <Stack>
              <Button variant="contained" color="warning" onClick={warningActionHandleClick}>
                warning Snackbar
              </Button>
              <Snackbar
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={openWarningAction}
                autoHideDuration={9000}
                onClose={warningActionHandleClose}
                message={
                  <span style={{ display: "flex", alignItems: "center" }}>
                    <WarningIcon
                      color="warning"
                      style={{
                        marginRight: "8px",
                        backgroundColor: "#FFAB0029",
                        padding: 12,
                        borderRadius: 8,
                        width: 48,
                        height: 48,
                      }}
                    />
                    This is a warning message!
                  </span>
                }
                action={
                  <IconButton
                    size="small"
                    aria-label="close"
                    color="greyDark"
                    onClick={warningActionHandleClose}
                    sx={{
                      background: "transparent",
                      ":hover": { background: "transparent" },
                    }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{
                        bgcolor: "warning.soft",
                        color: "warning.main",
                        height: 30,
                        width: 48,
                        fontSize: 13,
                        ":hover": {
                          color: "white",
                          bgcolor: "warning.main",
                        },
                      }}
                    >
                      Action
                    </Button>
                  </IconButton>
                }
              />
            </Stack>

            {/* success */}
            <Stack>
              <Button variant="contained" color="success" onClick={successActionHandleClick}>
                success Snackbar
              </Button>
              <Snackbar
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={openSuccessAction}
                autoHideDuration={9000}
                onClose={successActionHandleClose}
                message={
                  <span style={{ display: "flex", alignItems: "center" }}>
                    <CheckCircleIcon
                      color="success"
                      style={{
                        marginRight: "8px",
                        backgroundColor: "#22C55E29",
                        padding: 12,
                        borderRadius: 8,
                        width: 48,
                        height: 48,
                      }}
                    />
                    This is a Success message!
                  </span>
                }
                action={
                  <IconButton
                    size="small"
                    aria-label="close"
                    color="greyDark"
                    onClick={successActionHandleClose}
                    sx={{
                      background: "transparent",
                      ":hover": { background: "transparent" },
                    }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{
                        bgcolor: "success.soft",
                        color: "#118D57",
                        height: 30,
                        width: 48,
                        fontSize: 13,
                        ":hover": {
                          color: "white",
                        },
                      }}
                    >
                      Action
                    </Button>
                  </IconButton>
                }
              />
            </Stack>
          </ComponentBlock>
        </Masonry>
      </Container>
    </>
  );
};

export default CustomSnackbar;
