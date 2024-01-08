import { useState, useCallback } from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import List from "@mui/material/List";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import GppGoodIcon from "@mui/icons-material/GppGood";
import ListItemText from "@mui/material/ListItemText";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ListItemButton from "@mui/material/ListItemButton";
import { Stack } from "@mui/material";

import Masonry from "@mui/lab/Masonry";
import Container from "@mui/material/Container";

import ComponentBlock from "../component-block";

const OPTIONS = [
  "Show some love to Material-UI",
  "Show all notification content",
  "Hide sensitive notification content",
  "Hide all notification content",
];

const ICON = [
  {
    option: "Profile",
    icon: <GppGoodIcon />,
  },
  {
    option: "My account",
    icon: <GppGoodIcon />,
  },
  {
    option: "Logout",
    icon: <GppGoodIcon />,
  },
];

const OPTIONS_MAXHEIGHT = [
  "None",
  "Atria",
  "Callisto",
  "Dione",
  "Ganymede",
  "Hangouts Call",
  "Luna",
  "Oberon",
  "Phobos",
  "Pyxis",
  "Sedna",
  "Titania",
  "Triton",
  "Umbriel",
];

export default function IconMenu() {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [isOpen, setOpen] = useState(null);
  const [isOpenIcon, setOpenIcon] = useState(null);
  const [isOpenList, setOpenList] = useState(null);
  const [isOpenMaxHeight, setOpenMaxHeight] = useState(null);

  const handleClick = useCallback((event) => {
    setOpenMaxHeight(event.currentTarget);
  }, []);

  const handleMaxHeightClose = useCallback(() => {
    setOpenMaxHeight(null);
  }, []);

  const handleClickListItem = useCallback((event) => {
    setOpenList(event.currentTarget);
  }, []);

  const handleMenuItemClick = useCallback((event, index) => {
    setSelectedIndex(index);
    setOpenList(null);
  }, []);

  const handleOpen = useCallback((event) => {
    setOpen(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(null);
  }, []);

  const handleOpenIcon = useCallback((event) => {
    setOpenIcon(event.currentTarget);
  }, []);

  const handleCloseIcon = useCallback(() => {
    setOpenIcon(null);
  }, []);

  return (
    <>
      <Container sx={{ my: 10 }}>
        <Masonry columns={{ xs: 1, md: 3 }} spacing={5}>
          <ComponentBlock title="Basic">
            <Button variant="outlined" onClick={handleOpen}>
              Open Menu
            </Button>
            <Menu id="simple-menu" anchorEl={isOpen} onClose={handleClose} open={Boolean(isOpen)}>
              {["Profile", "My account", "Logout"].map((option) => (
                <MenuItem key={option} selected={option === "Profile"} onClick={handleClose}>
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </ComponentBlock>

          <ComponentBlock title="Icon">
            <Button variant="outlined" onClick={handleOpenIcon}>
              Open Menu
            </Button>
            <Menu id="simple-menu" anchorEl={isOpenIcon} onClose={handleCloseIcon} open={Boolean(isOpenIcon)}>
              {ICON.map((icon) => (
                <MenuItem key={icon} onClick={handleCloseIcon}>
                  {icon.icon}
                  {icon.option}
                </MenuItem>
              ))}
            </Menu>
          </ComponentBlock>

          {/* State */}
          <ComponentBlock title="State">
            <List component="nav" aria-label="Device settings">
              <ListItemButton aria-haspopup="true" aria-controls="lock-menu" aria-label="when device is locked" onClick={handleClickListItem}>
                <ListItemText primary="When device is locked" secondary={OPTIONS[selectedIndex]} />
              </ListItemButton>
            </List>

            <Menu id="lock-menu" anchorEl={isOpenList} onClose={handleClose} open={Boolean(isOpenList)}>
              {OPTIONS.map((option, index) => (
                <MenuItem
                  key={option}
                  disabled={index === 0}
                  selected={index === selectedIndex}
                  onClick={(event) => handleMenuItemClick(event, index)}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </ComponentBlock>

          <ComponentBlock title="Icon">
            <IconButton aria-label="more" aria-controls="long-menu" aria-haspopup="true" onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>

            <Menu
              id="long-menu"
              anchorEl={isOpenMaxHeight}
              onClose={handleMaxHeightClose}
              open={Boolean(isOpenMaxHeight)}
              slotProps={{
                paper: {
                  sx: {
                    width: "20ch",
                    maxHeight: 48 * 4.5,
                  },
                },
              }}
            >
              {OPTIONS_MAXHEIGHT.map((option) => (
                <MenuItem key={option} selected={option === "Pyxis"} onClick={handleMaxHeightClose}>
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </ComponentBlock>
        </Masonry>
      </Container>
    </>
  );
}
