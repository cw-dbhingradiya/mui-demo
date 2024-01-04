import { useState, useCallback } from "react";

import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Container from "@mui/material/Container";

import Textfields from "./textfield";

// ----------------------------------------------------------------------

const TABS = [
  {
    value: "outlined",
    label: "Outlined",
    component: <Textfields variant="outlined" />,
  },
  {
    value: "filled",
    label: "Filled",
    component: <Textfields variant="filled" />,
  },
  {
    value: "standard",
    label: "Standard",
    component: <Textfields variant="standard" />,
  },
];

// ----------------------------------------------------------------------

export default function TextfieldView() {
  const [currentTab, setCurrentTab] = useState("outlined");

  const handleChangeTab = useCallback((event, newValue) => {
    setCurrentTab(newValue);
  }, []);

  return (
    <>
      <Container sx={{ my: 10 }}>
        <Tabs
          value={currentTab}
          onChange={handleChangeTab}
          textColor="inherit"
          indicatorColor="inherit"
        >
          {TABS.map((tab) => (
            <Tab key={tab.value} value={tab.value} label={tab.label} />
          ))}
        </Tabs>

        <form noValidate autoComplete="off">
          {TABS.map(
            (tab) =>
              tab.value === currentTab && (
                <Box key={tab.value} sx={{ mt: 5 }}>
                  {tab.component}
                </Box>
              )
          )}
        </form>
      </Container>
    </>
  );
}
