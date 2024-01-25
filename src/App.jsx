import React from "react";
import { useState } from "react";
import { ThemeProvider, createTheme, css, FormControlLabel, Switch } from "@mui/material";
import Home from "./pages/home";
import { borderRadius } from "@mui/system";
import { fontWeight } from "@mui/system";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "./theme/theme";
import { commonColor, colorsDark, colorsLight } from "./theme/color";
import { deepmerge } from "@mui/utils";
import { components } from "./theme/override/index";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import Color from "./Components/foundation/Color";
import TypographyFont from "./Components/foundation/TypographyFont";
import Shadows from "./Components/foundation/shadows";
import GridFile from "./Components/mui/GridFile";
import Accordion from "./Components/mui/Accordion";
import Alert from "./Components/mui/Alert";
import Avatar from "./Components/mui/Avatar";
import Badge from "./Components/mui/Badge";
import BreadCrumb from "./Components/mui/BreadCrumb";
import Buttons from "./Components/mui/Buttons";
import CheckBox from "./Components/mui/CheckBox";
import Chip from "./Components/mui/Chip";
import Dialog from "./Components/mui/Dialog";
import List from "./Components/mui/List";
import Menu from "./Components/mui/Menu";
import Pagination from "./Components/mui/Pagination";
import Pickers from "./Components/mui/Pickers";
import Popover from "./Components/mui/Popover";
import Progress from "./Components/mui/Progress";
import RadioButton from "./Components/mui/RadioButton";
import Rating from "./Components/mui/Rating";
import Slider from "./Components/mui/Slider";
import Stepper from "./Components/mui/Stepper";
import Switchs from "./Components/mui/Switchs";
import Table from "./Components/mui/Table";
import Tab from "./Components/mui/Tab";
import Textfield from "./Components/mui/Textfield";
import TimeLine from "./Components/mui/TimeLine";
import Tooltip from "./Components/mui/Tooltip";
import Upload from "./Components/extra/Upload";
import Snackbar from "./Components/extra/Snackbar";
import Carousel from "./Components/extra/Carousel";

import ParentComponent from "./sections/mui/ParentComponent";

import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";

const App = () => {
  const [darkMode, setDarkMode] = React.useState(false);
  const [isSidebar, setIsSidebar] = useState(true);

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
        {/* <CssBaseline />
        <FormControlLabel control={<Switch checked={darkMode} onChange={handleThemeChange} />} label="Dark Mode" /> */}
        {/* <Routes>
          <Route path="foundation/colors" element={<Color />} />
          <Route path="foundation/typography" element={<TypographyFont />} />
          <Route path="foundation/shadows" element={<Shadows />} />
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
        </Routes> */}

        <div className="app">
          <Topbar setIsSidebar={setIsSidebar} />
          <main className="content">
            <Sidebar isSidebar={isSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
            </Routes>
          </main>
        </div>

        {/* <Outlet /> */}
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
