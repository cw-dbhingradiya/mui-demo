import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Stack, Typography } from "@mui/material";
import NavigationIcon from "@mui/icons-material/Navigation";
import Box from "@mui/material/Box";
import Favorite from "@mui/icons-material/Favorite";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const COLORS = [
  "default",
  "primary",
  "secondary",
  "info",
  "success",
  "warning",
  "error",
];

export default function FormControlLabelPosition() {
  return (
    <Stack gap={8}>
      <FormControl component="fieldset" sx={{ gap: 3 }}>
        {/* Default */}
        <FormGroup aria-label="position" row>
          <Typography>Default</Typography>
          <FormControlLabel
            value="UnChecked"
            control={<Checkbox />}
            label="UnChecked"
            labelPlacement="end"
          />

          <FormControlLabel
            value="end"
            control={<Checkbox checked />}
            label="Checked"
            labelPlacement="end"
          />
        </FormGroup>

        {/* Color */}
        <FormGroup aria-label="position" row>
          <Typography>Color</Typography>

          <Stack direction="row">
            {COLORS.map((color) => (
              <FormControlLabel
                key={color}
                control={
                  <Checkbox size="medium" defaultChecked color={color} />
                }
                label={color}
                sx={{ textTransform: "capitalize" }}
              />
            ))}
          </Stack>
        </FormGroup>

        {/* States */}
        <FormGroup aria-label="position" row>
          <Typography>States</Typography>
          <FormControlLabel
            value="UnChecked"
            control={<Checkbox />}
            label="UnChecked"
            labelPlacement="end"
          />
          <FormControlLabel
            value="Hovered"
            control={<Checkbox />}
            label="Hovered"
            labelPlacement="end"
          />
          <FormControlLabel
            value="Disabled"
            control={<Checkbox />}
            label="Disabled"
            labelPlacement="end"
            disabled
          />
          <FormControlLabel
            value="Checked"
            control={<Checkbox checked />}
            label="Checked"
            labelPlacement="end"
          />
          <FormControlLabel
            value="Hovered"
            control={<Checkbox checked />}
            label="Hovered"
            labelPlacement="end"
          />
          <FormControlLabel
            value="Disabled"
            control={<Checkbox checked />}
            label="Disabled"
            labelPlacement="end"
            disabled
          />
        </FormGroup>

        {/* Size */}
        <FormGroup aria-label="position" row>
          <Typography>size</Typography>
          <FormControlLabel
            value="UnChecked"
            control={<Checkbox />}
            label="UnChecked"
            labelPlacement="end"
          />
          <FormControlLabel
            value="UnChecked"
            control={<Checkbox size="small" />}
            label="UnChecked"
            labelPlacement="end"
          />
          <FormControlLabel
            value="Checked"
            control={<Checkbox checked />}
            label="Checked"
            labelPlacement="end"
          />
          <FormControlLabel
            value="Checked"
            control={<Checkbox size="small" checked />}
            label="Checked"
            labelPlacement="end"
          />
        </FormGroup>
      </FormControl>

      {/* Customization */}

      <FormGroup aria-label="position" row>
        <Typography>Customization</Typography>

        <FormControlLabel
          control={
            <Checkbox
              color="error"
              icon={<Favorite />}
              checkedIcon={<Favorite />}
            />
          }
          label="Custom icon"
        />
        <FormControlLabel
          control={
            <Checkbox
              color="warning"
              icon={<BookmarkIcon />}
              checkedIcon={<BookmarkIcon />}
            />
          }
          label="Custom icon"
        />
      </FormGroup>

      <Box display="flex" alignItems="flex-start">
        <FormGroup row>
          <FormControlLabel control={<Checkbox />} label="Option 1" />
          <FormControlLabel control={<Checkbox />} checked label="Option 2" />
          <FormControlLabel control={<Checkbox />} checked label="Option 3" />
          <FormControlLabel control={<Checkbox />} label="Option 4" />
        </FormGroup>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Option 1" />
          <FormControlLabel control={<Checkbox />} checked label="Option 2" />
          <FormControlLabel control={<Checkbox />} checked label="Option 3" />
          <FormControlLabel control={<Checkbox />} label="Option 4" />
        </FormGroup>
      </Box>
    </Stack>
  );
}
