"use client";

import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import PatientTable from "./patientTable";
import Search from "./search";

const Dashboard = () => {
  const [data, setData] = useState([
    {
      id: "afgu3yarauh45",
      name: "田中花子",
      address: {
        city: "茅野市",
        town: "豊平",
      },
      visible: true,
    },
    {
      id: "asafauehfa5",
      name: "鈴木次郎",
      address: {
        city: "茅野市",
        town: "長倉",
      },
      visible: true,
    },
    {
      id: "gaseritaser",
      name: "佐藤太郎",
      address: {
        city: "茅野市",
        town: "宮川",
      },
      visible: true,
    },
    {
      id: "gajoeirt",
      name: "井上太一",
      address: {
        city: "茅野市",
        town: "塚原",
      },
      visible: true,
    },
    {
      id: "saleirlueer",
      name: "川崎美也子",
      address: {
        city: "茅野市",
        town: "米沢",
      },
      visible: true,
    },
    {
      id: "sakehrerr",
      name: "本田正敏",
      address: {
        city: "諏訪市",
        town: "四賀",
      },
      visible: true,
    },
  ]);
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
      <Search data={data} setData={setData} />
      <PatientTable data={data} />
    </Box>
  );
};

export default Dashboard;
