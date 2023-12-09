"use client";

import { Box, Typography } from "@mui/material";
import { useState } from "react";
import chat from "@/components/chat/chat";

const Chat = ({ params }) => {
  const [quesitionList, setQuestionList] = useState([
    {
      id: "afgu3yarauh45",
      name: "田中花子",
      content: "農作業で腰を痛めて歩けない。",
      post_date: "2023/12/06/01:26",
      isRead: false,
    },
    {
      id: "asafauehfa5",
      name: "鈴木次郎",
      content: "薬の飲み方がわからない。",
      post_date: "2023/12/06/01:26",
      isRead: false,
    },
    {
      id: "gaseritaser",
      name: "佐藤太郎",
      content: "いつまで生きられそう？",
      post_date: "2023/12/06/01:26",
      isRead: false,
    },
    {
      id: "gajoeirt",
      name: "井上太一",
      content: "死んだらどうなる",
      post_date: "2023/12/06/01:26",
      isRead: false,
    },
    {
      id: "saleirlueer",
      name: "川崎美也子",
      content: "風邪っぽい",
      post_date: "2023/12/06/01:26",
      isRead: false,
    },
    {
      id: "sakehrerr",
      name: "本田正敏",
      content: "次の病院はいつ行けばいい？",
      post_date: "2023/12/06/01:26",
      isRead: false,
    },
  ]);
  const questionHistory = [{}];
  const id = params.id;
  const patientData = quesitionList.filter((datum) => datum.id == id)[0];
  console.log(patientData);
  return (
    <Box sx={{ backgroundColor: "black", height: "100vh" }}>
      <Typography
        sx={{
          backgroundColor: "dimgray",
          color: "white",
          textAlign: "center",
          fontSize: "30px",
        }}
      >
        {patientData.name}さん
      </Typography>
    </Box>
  );
};

export default Chat;
