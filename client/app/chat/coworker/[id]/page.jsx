"use client";

import { Box, Typography } from "@mui/material";
import { useLayoutEffect, useRef, useState } from "react";
import Chat from "@/components/chat/patient/chat";
import TextInput from "@/components/chat/patient/textInput";
import { useUpdateEffect } from "react-use";

const Page = ({ params }) => {
  const [message, setMessage] = useState("");
  const chatLists = [
    {
      id: "grgniae",
      name: [
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
    },
    {
      name: "鈴木太郎",
      belong: "茅野中央病院",
      isVisible: true,
      isSelected: false,
      id: "awhiagaargb",
    },
    {
      name: "田中花子",
      belong: "岡谷西医院",
      isVisible: true,
      isSelected: false,
      id: "ksbgaewejhb",
    },
    {
      name: "源次郎",
      belong: "諏訪東診療所",
      isVisible: true,
      isSelected: false,
      id: "nvbragabjg",
    },
    {
      name: "佐藤史郎",
      belong: "富士見南総合病院",
      isVisible: true,
      isSelected: false,
      id: "rtaabjhrbaj",
    },
    {
      name: "伊藤佳代子",
      belong: "茅野中央介護センター",
      isVisible: true,
      isSelected: false,
      id: "chbfawebtaw",
    },
    {
      name: "東南",
      belong: "岡谷西介護センター",
      isVisible: true,
      isSelected: false,
      id: "jgsegaiebga",
    },
    {
      name: "永井敬",
      belong: "諏訪東介護センター",
      isVisible: true,
      isSelected: false,
      id: "uaiwegbae",
    },
    {
      name: "本田翼",
      belong: "富士見南介護センター",
      isVisible: true,
      isSelected: false,
      id: "pwpewgabwa",
    },
  ];
  const lists = chatLists.filter((chatList) => chatList.id == params.id);
  const [chatHistory, setChatHistory] = useState([
    {
      isMine: false,
      post_date: "2023/12/10-12:00",
      content: "食欲がないとおっしゃられていたので、注意をお願いします。",
    },
    {
      isMine: true,
      post_date: "2023/12/10-12:10",
      content: "承知しました。ほかに変わった点などはありましたか？",
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
        {lists.map((m) => {
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
