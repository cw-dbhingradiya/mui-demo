import { Box, Typography } from "@mui/material";
import Header from "../../components/Header";
import Card from "../../Components/mui/Card";

const Dashboard = () => {
  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" />
      </Box>
      <Card />
    </Box>
  );
};

export default Dashboard;
