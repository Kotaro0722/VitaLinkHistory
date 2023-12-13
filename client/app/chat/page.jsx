"use client";

import React, { useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import ChatButton from "@/components/chat/chatButton";
import doctor from "@/public/img/doctor.svg";
import nurse from "@/public/img/nurse.svg";

const Dashboard = () => {
  const handleGroupClick = () => {
    console.log("click");
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "white",
      }}
    >
      <Typography
        sx={{
          fontSize: "40px",
          backgroundColor: "#0085FF",
          width: "100%",
          color: "white",
          textAlign: "center",
        }}
      >
        チャット
      </Typography>
      <Grid container sx={{ mt: "15px" }}>
        <Grid item xs={6}>
          <ChatButton title={"医師・薬剤師"} img={doctor.src} />
        </Grid>
        <Grid item xs={6}>
          <ChatButton title={"介護サービス事業者"} img={nurse.src} />
        </Grid>
      </Grid>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#0085FF",
          width: "240px",
          height: "60px",
          mb: "30px",
          fontSize: "27px",
        }}
        onClick={handleGroupClick}
      >
        グループ作成
      </Button>
    </Box>
  );
};

export default Dashboard;
