"use client";

import { useState } from "react";
import { Box, Typography } from "@mui/material";
import Search from "@/components/chat/list/nurse/search";

const Page = () => {
  const [lists, setLists] = useState([
    {
      name: "伊藤佳代子",
      belong: "茅野中央介護センター",
      isVisible: true,
      id: "chbfawebtaw",
    },
    {
      name: "東南",
      belong: "岡谷西介護センター",
      isVisible: true,
      id: "jgsegaiebga",
    },
    {
      name: "永井敬",
      belong: "諏訪東介護センター",
      isVisible: true,
      id: "uaiwegbae",
    },
    {
      name: "本田翼",
      belong: "富士見南介護センター",
      isVisible: true,
      id: "pwpewgabwa",
    },
  ]);

  const listsLength = lists.filter((list) => list.isVisible).length;
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
          maxHeight: "calc(100% - 64px - 60px - 12px)",
          msOverflowStyle: "none",
          "::-webkit-scrollbar": { display: "none" },
          px: "40px",
        }}
      >
        {listsLength ? (
          lists.map((list, index) => {
            return (
              list.isVisible && (
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
              )
            );
          })
        ) : (
          <Typography sx={{ textAlign: "center", fontSize: "35px" }}>
            該当担当者・施設は存在しません。
            <br />
            正しく入力してください
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default Page;
