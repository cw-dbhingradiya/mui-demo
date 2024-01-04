import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Switch from "@mui/material/Switch";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import { Stack, Typography } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import CallIcon from "@mui/icons-material/Call";
import FaceIcon from "@mui/icons-material/Face";
import GroupIcon from "@mui/icons-material/Group";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import CommentIcon from "@mui/icons-material/Comment";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { motion, useScroll, useSpring } from "framer-motion";

export default function BasicList() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const [checked, setChecked] = React.useState(["setting"]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />

      <Stack gap={5}>
        <Box display="flex" gap={8}>
          <Box
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "background.paper",
            }}
          >
            <nav aria-label="main mailbox folders">
              <List dense>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="List Item" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="List Item" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="List Item" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="List Item" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Box>

          <Box
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "background.paper",
            }}
          >
            <nav aria-label="main mailbox folders">
              <List dense>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="List Item" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <NotificationsIcon />
                    </ListItemIcon>
                    <ListItemText primary="List Item" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <GroupIcon />
                    </ListItemIcon>
                    <ListItemText primary="List Item" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <ShoppingCartIcon />
                    </ListItemIcon>
                    <ListItemText primary="List Item" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
            <Divider variant="fullWidth" />
            <nav aria-label="secondary mailbox folders">
              <List dense>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="List Item" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="#simple-list">
                    <ListItemText primary="List Item" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Box>
        </Box>

        <Typography variant="h4">Controls</Typography>
        <Box display="flex">
          <Box
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "background.paper",
            }}
          >
            <List dense>
              <ListItem disablePadding>
                <ListItemButton>
                  <Checkbox />
                  <ListItemText primary="List Item" />
                  <ListItemIcon>
                    <MoreVertIcon />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <Checkbox />
                  <ListItemText primary="List Item" />
                  <ListItemIcon>
                    <MoreVertIcon />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding selected>
                <ListItemButton>
                  <Checkbox />
                  <ListItemText primary="List Item" />
                  <ListItemIcon>
                    <MoreVertIcon />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding disabled>
                <ListItemButton>
                  <Checkbox />
                  <ListItemText primary="List Item" />
                  <ListItemIcon>
                    <MoreVertIcon />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            </List>
          </Box>

          <Box pl={8} sx={{ bgcolor: "background.paper" }}>
            <List>
              <ListItem dense sx={{ width: 400 }}>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText
                  id="switch-list-label-setting"
                  primary="Setting"
                />
                <Switch
                  edge="end"
                  onChange={handleToggle("setting")}
                  checked={checked.indexOf("setting") !== -1}
                  inputProps={{
                    "aria-labelledby": "switch-list-label-setting",
                  }}
                />
              </ListItem>
              <ListItem dense>
                <ListItemIcon>
                  <NotificationsIcon />
                </ListItemIcon>
                <ListItemText
                  id="switch-list-label-bluetooth"
                  primary="Bluetooth"
                />
                <Switch
                  edge="end"
                  onChange={handleToggle("bluetooth")}
                  checked={checked.indexOf("bluetooth") !== -1}
                  inputProps={{
                    "aria-labelledby": "switch-list-label-bluetooth",
                  }}
                />
              </ListItem>
              <ListItem dense>
                <ListItemIcon>
                  <GroupIcon />
                </ListItemIcon>
                <ListItemText id="switch-list-label-group" primary="Wifi" />
                <Switch
                  edge="end"
                  onChange={handleToggle("wifi")}
                  checked={checked.indexOf("wifi") !== -1}
                  inputProps={{
                    "aria-labelledby": "switch-list-label-group",
                  }}
                />
              </ListItem>
              <ListItem dense>
                <ListItemIcon>
                  <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText
                  id="switch-list-label-shopping"
                  primary="List Item"
                />
              </ListItem>
            </List>
          </Box>
        </Box>

        {/* Avatar & Secondary Text */}
        <List
          sx={{ width: "25%" }}
          subheader={
            <ListSubheader component="div" id="avatar-list-subheader">
              Avatar & Secondary Text
            </ListSubheader>
          }
        >
          <ListItem dense>
            <ListItemAvatar>
              <Avatar>
                <FaceIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Mireya Conner"
              secondary="louie.kuphal39@gmail.com"
            />
            <ListItemIcon>
              <CallIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem dense>
            <ListItemAvatar>
              <Avatar>
                <FaceIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Amiah Pruitt"
              secondary="tyrel_greenholt@gmail.com"
            />
            <ListItemIcon>
              <CallIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem dense>
            <ListItemAvatar>
              <Avatar>
                <FaceIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Angelique Morse"
              secondary="joana.simonis84@gmail.com"
            />
            <ListItemIcon>
              <CallIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem dense>
            <ListItemAvatar>
              <Avatar>
                <FaceIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Harrison Stein"
              secondary="letha_lubowitz24@yahoo.com"
            />
            <ListItemIcon>
              <CallIcon />
            </ListItemIcon>
          </ListItem>
        </List>

        {/* Nested List item */}
        <Box sx={{ width: "15%", bgcolor: "background.paper" }}>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Nested List Items
              </ListSubheader>
            }
          >
            <ListItemButton dense>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="List Item" />
            </ListItemButton>
            <ListItemButton dense>
              <ListItemIcon>
                <NotificationsIcon />
              </ListItemIcon>
              <ListItemText primary="List Item" />
            </ListItemButton>
            <ListItemButton onClick={handleClick} dense>
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary="List Item" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }} dense>
                  <ListItemIcon>
                    <ShoppingCartIcon />
                  </ListItemIcon>
                  <ListItemText primary="List Item" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }} dense>
                  <ListItemIcon>
                    <ShoppingCartIcon />
                  </ListItemIcon>
                  <ListItemText primary="List Item" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </Box>
      </Stack>
    </>
  );
}
