"use client";

import { Box, Typography } from "@mui/material";
import { useLayoutEffect, useRef, useState } from "react";
import Chat from "@/components/chat/patient/chat";
import TextInput from "@/components/chat/patient/textInput";
import { useUpdateEffect } from "react-use";

const Page = ({ params }) => {
  const [message, setMessage] = useState("");
  const lists = {
    id: "grgniae",
    member: [
      {
        name: "鈴木太郎",
        belong: "茅野中央病院",
        isVisible: true,
        id: "awhiagaargb",
      },
      {
        name: "田中花子",
        belong: "岡谷西医院",
        isVisible: true,
        id: "ksbgaewejhb",
      },
      {
        name: "永井敬",
        belong: "諏訪東介護センター",
        isVisible: true,
        isSelected: false,
        id: "uaiwegbae",
      },
    ],
  };
  const [chatHistory, setChatHistory] = useState([
    {
      isMine: false,
      post_date: "2023/12/10-12:00",
      content: "血圧が高いので再検査お願いします。",
    },
    {
      isMine: true,
      post_date: "2023/12/10-12:10",
      content: "承知しました。",
    },
  ]);
  const scrollBottomRef = useRef(null);

  const scrollToBottom = () => {
    requestAnimationFrame(() => {
      if (scrollBottomRef && scrollBottomRef.current) {
        scrollBottomRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  };

  useUpdateEffect(() => {
    if (message) {
      const newChat = {
        isMine: false,
        post_date: "2023/12/10-12:00",
        content: message,
      };
      setChatHistory([...chatHistory, newChat]);
      console.log(newChat);
    }
    scrollToBottom();
    console.log(params);
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
        {lists.member.map((m, index) => {
          return m.name + "さん ";
        })}
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
          return <Chat text={ch.content} isMine={ch.isMine} key={index} />;
        })}
        <Box ref={scrollBottomRef} />
      </Box>
      <TextInput setMessage={setMessage} />
    </Box>
  );
};

export default Page;
