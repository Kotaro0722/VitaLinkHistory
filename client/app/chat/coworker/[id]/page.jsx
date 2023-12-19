"use client";

import { Box, Typography } from "@mui/material";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
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
      isVisible: true,
    },
    {
      id: "agnlaerg",
      name: [
        {
          name: "源次郎",
          belong: "諏訪東診療所",
          isVisible: true,
          isSelected: false,
          id: "nvbragabjg",
        },
        {
          name: "伊藤佳代子",
          belong: "茅野中央介護センター",
          isVisible: true,
          isSelected: false,
          id: "chbfawebtaw",
        },
        {
          name: "本田翼",
          belong: "富士見南介護センター",
          isVisible: true,
          isSelected: false,
          id: "pwpewgabwa",
        },
      ],
      isVisible: true,
    },
    {
      id: "arnalnja",
      name: [
        {
          name: "鈴木太郎",
          belong: "茅野中央病院",
          isVisible: true,
          isSelected: false,
          id: "awhiagaargb",
        },
        {
          name: "源次郎",
          belong: "諏訪東診療所",
          isVisible: true,
          isSelected: false,
          id: "nvbragabjg",
        },
        {
          name: "東南",
          belong: "岡谷西介護センター",
          isVisible: true,
          isSelected: false,
          id: "jgsegaiebga",
        },
      ],
      isVisible: true,
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
  const lists = chatLists.filter((chatList) => chatList.id == params.id)[0];
  const ch1 = [
    {
      creator: "じぶん",
      post_date: "2023/12/10-12:00",
      content: "食欲がないとおっしゃられていたので、注意をお願いします。",
    },
    {
      creator: lists.name,
      post_date: "2023/12/10-12:10",
      content: "承知しました。他に変わった点などはありましたか？",
    },
  ];
  const ch2 = [
    {
      creator: "じぶん",
      post_date: "2023/12/10-12:00",
      content:
        "明日の菊池さんの訪問診療の時間に手術の予定がはいってしまったため、訪問診療に行けませんのでよろしくお願いします。",
    },
    {
      creator: "鈴木太郎",
      post_date: "2023/12/10-12:10",
      content: "承知しました。次の診療日はいつになりそうですか？",
    },
    {
      creator: "じぶん",
      post_date: "2023/12/10-12:10",
      content: "来週の同じ時間は空いてますか？",
    },
    {
      creator: "田中花子",
      post_date: "2023/12/10-12:10",
      content:
        "その日のその時間に菊池さんは、施設にいないと聞いています。翌日は施設にいるので、翌日はどうでしょうか？",
    },
  ];
  const [chatHistory, setChatHistory] = useState({
    creator: "",
    post_date: "",
    content: "",
  });
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

  useEffect(() => {
    Array.isArray(lists.name) ? setChatHistory(ch2) : setChatHistory(ch1);
  }, []);

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
        {Array.isArray(lists.name)
          ? lists.name.map((namae) => {
              return namae.name + "さん    ";
            })
          : lists.name + "さん"}
      </Typography>
      <Box
        sx={{
          height: "calc(100% - 110px - 90px)",
          overflowY: "scroll",
          msOverflowStyle: "none",
          "::-webkit-scrollbar": { display: "none" },
        }}
      >
        {Array.isArray(chatHistory) &&
          typeof chatHistory[0].creator == "string" &&
          chatHistory.map((ch, index) => {
            console.log(ch.creator);
            return (
              <Chat
                text={ch.content}
                isMine={ch.creator == "じぶん"}
                key={index}
                creator={ch.creator}
              />
            );
          })}
        <Box ref={scrollBottomRef} />
      </Box>
      <TextInput setMessage={setMessage} />
    </Box>
  );
};

export default Page;
