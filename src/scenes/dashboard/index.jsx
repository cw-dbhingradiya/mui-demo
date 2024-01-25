import { Box, Typography } from "@mui/material";
import Header from "../../components/Header";
import Card from "../../Components/mui/Card";

const Dashboard = () => {
  return (
    <Box sx={{ padding: "88px 16px", width: "calc(100% - 280px)", minHeight: "100%" }}>
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" />
      </Box>
      <Card />
    </Box>
  );
};

export default Dashboard;
