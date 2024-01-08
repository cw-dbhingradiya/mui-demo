import React from "react";
import { ThemeProvider, createTheme, Typography, css, FormControlLabel, Switch } from "@mui/material";
import Home from "./pages/home";
import { borderRadius } from "@mui/system";
import { fontWeight } from "@mui/system";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "./theme/theme";
import { commonColor, colorsDark, colorsLight } from "./theme/color";
import { deepmerge } from "@mui/utils";
import { components } from "./theme/override/index";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import WithSx from "./Components/WithSx";
import TypographyFont from "./Components/TypographyFont";
import GridFile from "./Components/GridFile";
import Accordion from "./Components/Accordion";
import Alert from "./Components/Alert";
import Avatar from "./Components/Avatar";
import Badge from "./Components/Badge";
import BreadCrumb from "./Components/BreadCrumb";
import Buttons from "./Components/Buttons";
import CheckBox from "./Components/CheckBox";
import Chip from "./Components/Chip";
import Dialog from "./Components/Dialog";
import List from "./Components/List";
import Menu from "./Components/Menu";
import Pagination from "./Components/Pagination";
import Pickers from "./Components/Pickers";
import Popover from "./Components/Popover";
import Progress from "./Components/Progress";
import RadioButton from "./Components/RadioButton";
import Rating from "./Components/Rating";
import Slider from "./Components/Slider";
import Stepper from "./Components/Stepper";
import Switchs from "./Components/Switchs";
import Table from "./Components/Table";
import Tab from "./Components/Tab";
import Textfield from "./Components/Textfield";
import TimeLine from "./Components/TimeLine";
import Tooltip from "./Components/Tooltip";
import Upload from "./Components/Upload";
import Snackbar from "./Components/Snackbar";
import Carousel from "./Components/Carousel";

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
    <BrowserRouter>
      <ThemeProvider theme={createTheme(selectedTheme)}>
        <CssBaseline />
        <FormControlLabel control={<Switch checked={darkMode} onChange={handleThemeChange} />} label="Dark Mode" />
        <Routes>
          <Route path="foundation/colors" element={<WithSx />} />
          <Route path="foundation/typography" element={<TypographyFont />} />
          <Route path="foundation/grid" element={<GridFile />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="mui/accordion" element={<Accordion />} />
          <Route path="mui/alert" element={<Alert />} />
          <Route path="mui/avatar" element={<Avatar />} />
          <Route path="mui/badge" element={<Badge />} />
          <Route path="mui/breadCrumbs" element={<BreadCrumb />} />
          <Route path="mui/buttons" element={<Buttons />} />
          <Route path="mui/checkBox" element={<CheckBox />} />
          <Route path="mui/chip" element={<Chip />} />
          <Route path="mui/dialog" element={<Dialog />} />
          <Route path="mui/list" element={<List />} />
          <Route path="mui/menu" element={<Menu />} />
          <Route path="mui/pagination" element={<Pagination />} />
          <Route path="mui/pickers" element={<Pickers />} />
          <Route path="mui/popover" element={<Popover />} />
          <Route path="mui/progress" element={<Progress />} />
          <Route path="mui/radio-button" element={<RadioButton />} />
          <Route path="mui/rating" element={<Rating />} />
          <Route path="mui/slider" element={<Slider />} />
          <Route path="mui/stepper" element={<Stepper />} />
          <Route path="mui/switch" element={<Switchs />} />
          <Route path="mui/table" element={<Table />} />
          <Route path="mui/tabs" element={<Tab />} />
          <Route path="mui/textfield" element={<Textfield />} />
          <Route path="mui/timeline" element={<TimeLine />} />
          <Route path="mui/tooltip" element={<Tooltip />} />
          <Route path="extra/upload" element={<Upload />} />
          <Route path="extra/snackbar" element={<Snackbar />} />
          <Route path="extra/carousel" element={<Carousel />} />
        </Routes>
        {/* <Outlet /> */}
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
