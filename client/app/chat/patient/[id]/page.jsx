"use client";

import { Box, Typography } from "@mui/material";
import { useLayoutEffect, useRef, useState } from "react";
import Chat from "@/components/chat/patient/chat";
import TextInput from "@/components/chat/patient/textInput";
import { useUpdateEffect } from "react-use";

const Page = ({ params }) => {
  const [message, setMessage] = useState("");
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
  const [chatHistory, setChatHistory] = useState([
    {
      isPatient: true,
      post_date: "2023/12/10-12:00",
      content: "腰を痛めて歩けません",
    },
    {
      isPatient: false,
      post_date: "2023/12/10-12:00",
      content: "一度病院へいらしてください",
    },
    {
      isPatient: true,
      post_date: "2023/12/10-12:00",
      content:
        "明日行きます。明日行きます。明日行きます。明日行きます。明日行きます。明日行きます。明日行きます。",
    },
    {
      isPatient: true,
      post_date: "2023/12/10-12:00",
      content: "腰を痛めて歩けません",
    },
  ]);
  const patientData = quesitionList.filter((datum) => datum.id == params.id)[0];
  const scrollBottomRef = useRef(null);

  const scrollToBottom = () => {
    requestAnimationFrame(() => {
      if (scrollBottomRef && scrollBottomRef.current) {
        scrollBottomRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
          // inline: "nearest",
        });
      }
    });
  };

  useUpdateEffect(() => {
    if (message) {
      const newChat = {
        isPatient: false,
        post_date: "2023/12/10-12:00",
        content: message,
      };
      setChatHistory([...chatHistory, newChat]);
      console.log(newChat);
    }
    scrollToBottom();
  }, [message]);

  useLayoutEffect(() => {
    if (scrollBottomRef && scrollBottomRef.current) {
      scrollBottomRef.current.scrollIntoView();
    }
  }, []);

  return (
    <Box sx={{ backgroundColor: "#B1D0FF", height: "100vh" }}>
      <Typography
        sx={{
          backgroundColor: "#1C8C42",
          color: "white",
          textAlign: "center",
          fontSize: "40px",
          mb: "20px",
        }}
      >
        {patientData.name}さん
      </Typography>
      <Box
        sx={{
          height: "calc(100% - 110px - 90px)",
          overflowY: "scroll",
          msOverflowStyle: "none",
          "::-webkit-scrollbar": { display: "none" },
        }}
      >
        {chatHistory.map((ch, index) => {
          return <Chat text={ch.content} isMine={ch.isPatient} key={index} />;
        })}
        <Box ref={scrollBottomRef} />
      </Box>
      <TextInput setMessage={setMessage} />
    </Box>
  );
};

export default Page;
