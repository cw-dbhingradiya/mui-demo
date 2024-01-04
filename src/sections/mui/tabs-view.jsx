import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PeopleIcon from "@mui/icons-material/People";
import CollectionsIcon from "@mui/icons-material/Collections";
import { Stack, Typography, useTheme } from "@mui/material";

export default function TabsWrappedLabel() {
  const [value, setValue] = React.useState("one");
  const [valueFive, setValueFive] = React.useState("five");
  const [valueNine, setValueNine] = React.useState("nine");
  const [valueTen, setValueTen] = React.useState("ten");
  const theme = useTheme();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const fiveHandleChange = (event, newValue) => {
    setValueFive(newValue);
  };
  const nineHandleChange = (event, newValue) => {
    setValueNine(newValue);
  };
  const tenHandleChange = (event, newValue) => {
    setValueTen(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stack>
        <Typography variant="h4">Basic</Typography>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="wrapped label tabs example"
          textColor="inherit"
          indicatorColor="primary"
        >
          <Tab value="one" label="Profile" />
          <Tab value="two" label="Followers" />
          <Tab value="three" label="Friends" />
          <Tab value="four" label="Gallery" />
        </Tabs>

        <Tabs
          value={valueFive}
          onChange={fiveHandleChange}
          aria-label="wrapped label tabs example"
          textColor="inherit"
          indicatorColor="inherit"
        >
          <Tab
            icon={<RecentActorsIcon />}
            iconPosition="start"
            value="five"
            label="Profile"
          />
          <Tab
            icon={<FavoriteIcon />}
            iconPosition="start"
            value="six"
            label="Followers"
          />
          <Tab
            icon={<PeopleIcon />}
            iconPosition="start"
            value="seven"
            label="Friends"
          />
          <Tab
            icon={<CollectionsIcon />}
            iconPosition="start"
            value="eight"
            label="Gallery"
          />
        </Tabs>
      </Stack>

      <Stack>
        <Typography variant="h4">Scroll</Typography>
        <Box
          sx={{ maxWidth: { xs: 320, sm: 470 }, bgcolor: "background.paper" }}
        >
          <Tabs
            value={valueNine}
            onChange={nineHandleChange}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            aria-label="scrollable force tabs example"
            textColor="inherit"
            indicatorColor="inherit"
          >
            <Tab
              icon={<RecentActorsIcon />}
              iconPosition="start"
              value="nine"
              label="Profile"
            />
            <Tab
              icon={<FavoriteIcon />}
              iconPosition="start"
              label="Followers"
            />
            <Tab icon={<PeopleIcon />} iconPosition="start" label="Friends" />
            <Tab
              icon={<CollectionsIcon />}
              iconPosition="start"
              label="Item Four"
            />
            <Tab icon={<PeopleIcon />} iconPosition="start" label="Gallery" />
            <Tab
              icon={<RecentActorsIcon />}
              iconPosition="start"
              label="Profile"
            />
            <Tab
              icon={<FavoriteIcon />}
              iconPosition="start"
              label="Followers"
            />
          </Tabs>
        </Box>

        <Box
          sx={{ maxWidth: { xs: 320, sm: 470 }, bgcolor: "background.paper" }}
        >
          <Tabs
            value={valueNine}
            onChange={nineHandleChange}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            aria-label="scrollable force tabs example"
            textColor="inherit"
            indicatorColor="inherit"
          >
            <Tab value="nine" label="Profile" />
            <Tab label="Followers" />
            <Tab label="Friends" />
            <Tab label="Item Four" />
            <Tab icon={<PeopleIcon />} iconPosition="start" label="Gallery" />
            <Tab label="Profile" />
            <Tab label="Followers" />
          </Tabs>
        </Box>
      </Stack>

      <Stack>
        <Typography variant="h4">Vertical</Typography>
        <Box
          sx={{
            flexGrow: 1,
            bgcolor: "background.paper",
            display: "flex",
            height: 204,
          }}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={valueTen}
            onChange={tenHandleChange}
            scrollButtons={false}
            textColor="inherit"
            indicatorColor="inherit"
          >
            <Tab
              value="ten"
              label="Profile"
              sx={{ alignItems: "flex-start" }}
            />
            <Tab label="Followers" sx={{ alignItems: "flex-start" }} />
            <Tab label="Friends" sx={{ alignItems: "flex-start" }} />
            <Tab label="Gallery" sx={{ alignItems: "flex-start" }} />
            <Tab label="Tab 3" sx={{ alignItems: "flex-start" }} />
            <Tab label="Tab 3" sx={{ alignItems: "flex-start" }} />
          </Tabs>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            bgcolor: "background.paper",
            display: "flex",
            height: 204,
          }}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={valueTen}
            onChange={tenHandleChange}
            scrollButtons={false}
            textColor="inherit"
            indicatorColor="inherit"
          >
            <Tab
              icon={<RecentActorsIcon />}
              iconPosition="start"
              value="ten"
              label="Profile"
              sx={{ justifyContent: "start" }}
            />
            <Tab
              icon={<FavoriteIcon />}
              iconPosition="start"
              label="Followers"
              sx={{ justifyContent: "start" }}
            />
            <Tab
              icon={<PeopleIcon />}
              iconPosition="start"
              label="Friends"
              sx={{ justifyContent: "start" }}
            />
            <Tab
              icon={<CollectionsIcon />}
              iconPosition="start"
              label="Gallery"
              sx={{ justifyContent: "start" }}
            />
            <Tab
              icon={<RecentActorsIcon />}
              iconPosition="start"
              label="Profile"
              sx={{ justifyContent: "start" }}
            />
            <Tab
              icon={<FavoriteIcon />}
              iconPosition="start"
              label="Followers"
              sx={{ justifyContent: "start" }}
            />
          </Tabs>
        </Box>
      </Stack>
    </Box>
  );
}
