"use client";

import { useState } from "react";
import { Box, Typography } from "@mui/material";
import Search from "@/components/chat/list/nurse/search";

const Page = () => {
  const [lists, setLists] = useState([
    { name: "鈴木太郎", belong: "茅野中央病院", isVisible: true },
    { name: "田中花子", belong: "岡谷西医院", isVisible: true },
    { name: "源次郎", belong: "諏訪東診療所", isVisible: true },
    { name: "佐藤史郎", belong: "富士見南総合病院", isVisible: true },
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
        医師・薬剤師
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
