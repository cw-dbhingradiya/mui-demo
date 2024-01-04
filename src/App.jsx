import React from "react";
import {
  ThemeProvider,
  createTheme,
  Typography,
  css,
  FormControlLabel,
  Switch,
} from "@mui/material";
import Home from "./pages/home";
import { borderRadius } from "@mui/system";
import { fontWeight } from "@mui/system";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "./theme/theme";
import { commonColor, colorsDark, colorsLight } from "./theme/color";
import { deepmerge } from "@mui/utils";
import { components } from "./theme/override/index";

const App = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  const themeMode = darkMode ? colorsDark : colorsLight;

  const selectedTheme = {
    palette: { ...commonColor, ...themeMode },
    ...theme({ ...commonColor, ...themeMode }),
    components,
  };

  console.log(selectedTheme);

  return (
    <ThemeProvider theme={createTheme(selectedTheme)}>
      <CssBaseline />
      <FormControlLabel
        control={<Switch checked={darkMode} onChange={handleThemeChange} />}
        label="Dark Mode"
      />
      <Home />
    </ThemeProvider>
  );
};

export default App;
