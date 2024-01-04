import * as React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";

const COLORS = ["info", "success", "warning", "error"];

export default function BasicAlerts() {
  return (
    <Stack gap={5}>
      <Typography variant="h5">Standard</Typography>
      <Stack sx={{ width: "100%" }} gap={5}>
        <Alert severity="info" onClose={() => {}}>
          This is an info alert — check it out!
        </Alert>
        <Alert severity="success" onClose={() => {}}>
          This is a success alert — check it out!
        </Alert>
        <Alert severity="warning" onClose={() => {}}>
          This is a warning alert — check it out!
        </Alert>
        <Alert severity="error" onClose={() => {}}>
          This is an error alert — check it out!
        </Alert>
      </Stack>

      <Stack sx={{ width: "100%" }} gap={5}>
        <Typography variant="h5">Filled</Typography>
        <Alert variant="filled" severity="info" onClose={() => {}}>
          This is an info alert — check it out!
        </Alert>
        <Alert variant="filled" severity="success" onClose={() => {}}>
          This is a success alert — check it out!
        </Alert>
        <Alert variant="filled" severity="warning" onClose={() => {}}>
          This is a warning alert — check it out!
        </Alert>
        <Alert variant="filled" severity="error" onClose={() => {}}>
          This is an error alert — check it out!
        </Alert>
      </Stack>

      <Stack sx={{ width: "100%" }} gap={5}>
        <Typography variant="h5">Outlined</Typography>
        <Alert variant="outlined" severity="info" onClose={() => {}}>
          This is an info alert — check it out!
        </Alert>
        <Alert variant="outlined" severity="success" onClose={() => {}}>
          This is a success alert — check it out!
        </Alert>
        <Alert variant="outlined" severity="warning" onClose={() => {}}>
          This is a warning alert — check it out!
        </Alert>
        <Alert variant="outlined" severity="error" onClose={() => {}}>
          This is an error alert — check it out!
        </Alert>
      </Stack>

      <Stack sx={{ width: "100%" }} gap={5}>
        <Typography variant="h5">Cases</Typography>
        <Alert severity="info" onClose={() => {}}>
          This is an info alert — check it out!
        </Alert>
        <Alert
          action={
            <>
              <Button color="success" variant="contained" size="small">
                Action
              </Button>
              <Button color="success" size="small">
                Dismiss
              </Button>
            </>
          }
        >
          This is a success alert — check it out!
        </Alert>
        <Alert severity="warning" onClose={() => {}}>
          <AlertTitle>Warning</AlertTitle>
          This is a warning alert — <strong>check it out!</strong>
        </Alert>
      </Stack>
    </Stack>
  );
}
