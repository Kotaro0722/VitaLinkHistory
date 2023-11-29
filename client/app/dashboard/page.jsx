"use client";

import * as React from "react";
import { Box, Typography } from "@mui/material";
import EnhancedTable from "./patientTable";
import Search from "./search";

const Dashboard = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#9BC3FF",
      }}
    >
      <Typography
        sx={{
          fontSize: "45px",
          pt: "20px",
          pl: "20px",
        }}
      >
        患者情報一覧
      </Typography>
      <Search />
      <EnhancedTable />
    </Box>
  );
};

export default Dashboard;
