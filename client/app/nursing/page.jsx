"use client";

import { useState } from "react";
import { Box, Grid, Button } from "@mui/material";
import Search from "@/components/chat/list/nurse/search";

const Page = () => {
  const [lists, setLists] = useState([
    { name: "鈴木太郎", belong: "茅野中央介護センター", isVisible: true },
    { name: "田中花子", belong: "岡谷西介護センター", isVisible: true },
    { name: "源次郎", belong: "諏訪東介護センター", isVisible: true },
    { name: "佐藤史郎", belong: "富士見南介護センター", isVisible: true },
  ]);
  const height = "100px";
  return (
    <Box sx={{ height: "100vh", backgroundColor: "white" }}>
      <Box
        sx={{
          backgroundColor: "blue",
          color: "white",
          textAlign: "center",
          fontSize: "40px",
          mb: "20px",
        }}
      >
        介護サービス事業者
      </Box>
      <Search data={lists} setData={setLists} />
      <Box
        sx={{
          paddingTop: "20px",
          overflowY: "scroll",
          maxHeight: "calc(100% - 64px - 60px)",
          msOverflowStyle: "none",
          "::-webkit-scrollbar": { display: "none" },
          px: "40px",
        }}
      >
        {lists.map((list, index) => {
          return (
            <Box
              sx={{
                height: height,
                backgroundColor: "white",
                color: "green",
                textAlign: "center",
                fontSize: "35px",
                border: "3px solid black",
                my: "5px",
                lineHeight: height,
                cursor: "pointer",
                borderRadius: "20px",
              }}
              key={index}
            >
              {list.name}({list.belong})
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Page;
