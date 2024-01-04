import { useState } from "react";
import Radio from "@mui/material/Radio";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import { Box, Stack, Typography } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";

const COLORS = [
  "default",
  "primary",
  "secondary",
  "info",
  "success",
  "warning",
  "error",
];

export default function RowRadioButtonsGroup() {
  const [value, setValue] = useState("a1");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Stack gap={5}>
      <Box>
        <Typography variant="h4">Base</Typography>
        <FormControl>
          {/* Default */}
          <RadioGroup
            row
            sx={{ alignItems: "center" }}
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <Typography variant="body1" alignItems="center">
              Default
            </Typography>
            <FormControlLabel
              value="unchecked"
              control={<Radio />}
              label="UnChecked"
            />
            <FormControlLabel
              value="checked"
              control={<Radio color="primary" checked />}
              label="Checked"
            />
          </RadioGroup>

          {/* Color */}
          <RadioGroup
            sx={{ alignItems: "center" }}
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <Typography variant="body1" alignItems="center">
              Color
            </Typography>

            <Stack value={value} onChange={handleChange} flexDirection="row">
              {COLORS.map((color) => (
                <FormControlLabel
                  key={color}
                  value={color}
                  control={<Radio size="medium" color={color} />}
                  label={color}
                  sx={{ textTransform: "capitalize" }}
                />
              ))}
            </Stack>
          </RadioGroup>

          {/* State */}
          <RadioGroup
            sx={{ alignItems: "center" }}
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <Typography variant="body1" alignItems="center">
              State
            </Typography>
            <FormControlLabel
              value="unchecked"
              control={<Radio color="primary" />}
              label="UnChecked"
            />
            <FormControlLabel
              value="hovered"
              control={<Radio color="primary" />}
              label="Hovered"
            />
            <FormControlLabel
              value="disabled"
              control={<Radio color="primary" disabled />}
              label="Disabled"
            />
            <FormControlLabel
              value="checked"
              control={<Radio color="primary" checked />}
              label="Checked"
            />
            <FormControlLabel
              value="hovered"
              control={<Radio color="primary" />}
              label="Hovered"
            />
            <FormControlLabel
              value="disabled"
              control={<Radio color="primary" checked disabled />}
              label="Disabled"
            />
          </RadioGroup>

          {/* Size */}
          <RadioGroup
            sx={{ alignItems: "center" }}
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <Typography variant="body1" alignItems="center">
              Size
            </Typography>
            <FormControlLabel
              value="medium"
              control={<Radio color="primary" />}
              label="Medium"
            />
            <FormControlLabel
              value="checked"
              control={<Radio color="primary" checked />}
              label="Checked"
            />
            <FormControlLabel
              value="small"
              control={<Radio color="primary" size="small" />}
              label="Small"
            />
            <FormControlLabel
              value="checked"
              control={<Radio color="primary" checked size="small" />}
              label="Checked"
            />
          </RadioGroup>
        </FormControl>
      </Box>

      <Box>
        <Typography variant="h4">Cases</Typography>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="option1"
              control={<Radio />}
              label="Option 1"
            />
            <FormControlLabel
              value="option2"
              control={<Radio />}
              label="Option 2"
            />
            <FormControlLabel
              value="option3"
              control={<Radio />}
              label="Option 3"
            />
            <FormControlLabel
              value="option4"
              control={<Radio />}
              label="Option 4"
            />
          </RadioGroup>
        </FormControl>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="option1"
              control={<Radio />}
              label="Option 1"
            />
            <FormControlLabel
              value="option2"
              control={<Radio />}
              label="Option 2"
            />
            <FormControlLabel
              value="option3"
              control={<Radio />}
              label="Option 3"
            />
            <FormControlLabel
              value="option4"
              control={<Radio />}
              label="Option 4"
            />
          </RadioGroup>
        </FormControl>
      </Box>
    </Stack>
  );
}
