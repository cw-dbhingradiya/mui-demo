import * as React from "react";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Stack, Typography } from "@mui/material";

export default function BasicSwitches() {
  return (
    <div>
      <FormGroup>
        <Typography variant="h4">Base</Typography>
        <Stack alignItems="center" direction="row" spacing={5}>
          <Typography variant="subtitle1">Default</Typography>
          <FormControlLabel control={<Switch />} label="UnChecked" />
          <FormControlLabel
            control={<Switch defaultChecked />}
            label="Checked"
          />
        </Stack>

        <Stack alignItems="center" direction="row" spacing={5}>
          <Typography variant="subtitle1">Color</Typography>
          <FormControlLabel control={<Switch />} label="UnChecked" />
          <FormControlLabel
            control={<Switch defaultChecked />}
            label="Checked"
          />
          <FormControlLabel
            control={<Switch defaultChecked color="secondary" />}
            label="Secondary"
          />
          <FormControlLabel
            control={<Switch defaultChecked color="info" />}
            label="Info"
          />
          <FormControlLabel
            control={<Switch defaultChecked color="success" />}
            label="Success"
          />
          <FormControlLabel
            control={<Switch defaultChecked color="warning" />}
            label="Warning"
          />
          <FormControlLabel
            control={<Switch defaultChecked color="error" />}
            label="Error"
          />
        </Stack>

        <Stack alignItems="center" direction="row" spacing={5}>
          <Typography variant="subtitle1">State</Typography>
          <Stack>
            <Stack direction="row">
              <FormControlLabel control={<Switch />} label="UnChecked" />
              <FormControlLabel
                control={<Switch defaultChecked />}
                label="Checked"
              />
            </Stack>
            <Stack direction="row">
              <FormControlLabel control={<Switch />} label="Hovered" />
              <FormControlLabel
                control={<Switch defaultChecked />}
                label="Hovered"
              />
            </Stack>
            <Stack direction="row">
              <FormControlLabel
                disabled
                control={<Switch />}
                label="Disabled"
              />
              <FormControlLabel
                disabled
                control={<Switch defaultChecked />}
                label="Disabled"
              />
            </Stack>
          </Stack>
        </Stack>

        <Stack alignItems="center" direction="row" spacing={5}>
          <Typography variant="subtitle1">Size</Typography>
          <FormControlLabel
            control={<Switch size="small" defaultChecked />}
            label="Small"
          />
          <FormControlLabel
            control={<Switch defaultChecked />}
            label="Medium"
          />
        </Stack>

        <Stack alignItems="center" direction="row" spacing={5}>
          <Typography variant="subtitle1">Position</Typography>
          <FormControlLabel
            control={<Switch />}
            label="Start"
            labelPlacement="start"
          />
          <FormControlLabel
            control={<Switch defaultChecked />}
            label="End"
            labelPlacement="end"
          />
        </Stack>

        <Typography variant="h4">Cases</Typography>
        <Stack direction="row" alignItems="start" spacing={5}>
          <Stack direction="row" spacing={5}>
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Option 1"
            />
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Option 2"
            />
            <FormControlLabel control={<Switch />} label="Option 3" />
            <FormControlLabel control={<Switch />} label="Option 4" />
          </Stack>
          <Stack>
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Option 1"
            />
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Option 2"
            />
            <FormControlLabel control={<Switch />} label="Option 3" />
            <FormControlLabel control={<Switch />} label="Option 4" />
          </Stack>
        </Stack>
      </FormGroup>
    </div>
  );
}
