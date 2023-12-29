"use client";

import { useState } from "react";
import { Box, Typography } from "@mui/material";
import PatientTable from "../../components/dashboard/patientTable";
import Search from "../../components/dashboard/search";

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
      birth: {
        year: "1960",
        month: "4",
        day: "6",
      },
    },
    {
      id: "asafauehfa5",
      name: "鈴木次郎",
      address: {
        city: "茅野市",
        town: "長倉",
      },
      visible: true,
      birth: {
        year: "1953",
        month: "7",
        day: "30",
      },
    },
    {
      id: "gaseritaser",
      name: "佐藤太郎",
      address: {
        city: "茅野市",
        town: "宮川",
      },
      visible: true,
      birth: {
        year: "1963",
        month: "10",
        day: "11",
      },
    },
    {
      id: "gajoeirt",
      name: "井上太一",
      address: {
        city: "茅野市",
        town: "塚原",
      },
      visible: true,
      birth: {
        year: "1952",
        month: "11",
        day: "5",
      },
    },
    {
      id: "saleirlueer",
      name: "川崎美也子",
      address: {
        city: "茅野市",
        town: "米沢",
      },
      visible: true,
      birth: {
        year: "1945",
        month: "8",
        day: "3",
      },
    },
    {
      id: "sakehrerr",
      name: "本田正敏",
      address: {
        city: "諏訪市",
        town: "四賀",
      },
      visible: true,
      birth: {
        year: "1959",
        month: "6",
        day: "25",
      },
    },
  ]);
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundColor: "whitesmoke",
      }}
    >
      <Typography
        sx={{
          fontSize: "45px",
          p: "20px",
          textAlign: "center",
          backgroundColor: "#0085FF",
          color: "white",
          mb: "10px",
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
