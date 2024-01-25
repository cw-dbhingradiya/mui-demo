import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
// import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import TocOutlinedIcon from "@mui/icons-material/TocOutlined";
import TourOutlinedIcon from "@mui/icons-material/TourOutlined";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import MotionPhotosOffOutlinedIcon from "@mui/icons-material/MotionPhotosOffOutlined";

import { width } from "@mui/system";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: "#fff",
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: "transparent",
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 15px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#00A76F !important",
        },
        "& .pro-item-content p": {
          // color: "#000",
        },
        "& .pro-menu-item.active": {
          color: "#00A76F !important",
          background: "rgba(0, 167, 111, 0.08)",
        },
        flexShrink: 0,
        width: "280px",
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <NavigateNextIcon sx={{ width: 16, height: 16 }} /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: "#000",
            }}
          >
            {!isCollapsed && (
              <Box display="flex" justifyContent="space-between" alignItems="center" ml="15px">
                <Typography variant="h3" color="#000">
                  Dashboard
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <NavigateBeforeIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          <Box>
            <Typography className="sidebar-head" variant="body2" color="inherit" sx={{ m: "15px 0 5px 20px" }}>
              OVERVIEW
            </Typography>
            <Item title="Dashboard" to="/" icon={<HomeOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title="Manage Team" to="/team" icon={<ShoppingBagOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title="Contacts Information" to="/contacts" icon={<InsertChartOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title="Invoices Balances" to="/invoices" icon={<AccountBalanceOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title="Team" to="/team" icon={<ShoppingBagOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Typography className="sidebar-head" variant="body2" color="inherit" sx={{ m: "15px 0 5px 20px" }}>
              MANAGEMENT
            </Typography>
            <Item title="User" to="/user" icon={<AccountCircleOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title="Product" to="/product" icon={<ReceiptOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title="Order" to="/order" icon={<ShoppingCartOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title="Invoices" to="/invoices" icon={<ReceiptOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title="Blog" to="/blog" icon={<TocOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title="Job" to="/job" icon={<WorkOutlineOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title="Tour" to="/tour" icon={<TourOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title="File Manager" to="/file-manager" icon={<FolderOpenOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title="Mail" to="/mail" icon={<ShoppingBagOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title="Chat" to="/chat" icon={<ChatOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title="Calender" to="/calender" icon={<ReceiptOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title="Kanban" to="/kanban" icon={<ShoppingBagOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title="Menu Level" to="/menu-level" icon={<ContactsOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title="Item Disabled" to="/item-disabled" icon={<MotionPhotosOffOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title="Item Label" to="/item-label" icon={<ShoppingBagOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title="Item Caption" to="/item-caption" icon={<ContactsOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title="Item Link" to="/item-link" icon={<ReceiptOutlinedIcon />} selected={selected} setSelected={setSelected} />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
