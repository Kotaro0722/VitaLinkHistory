"use client";

import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import Search from "@/components/chat/list/group/search";

const Page = () => {
  const [lists, setLists] = useState([
    {
      name: "鈴木太郎",
      belong: "茅野中央病院",
      isVisible: true,
      isSelected: false,
    },
    {
      name: "田中花子",
      belong: "岡谷西医院",
      isVisible: true,
      isSelected: false,
    },
    {
      name: "源次郎",
      belong: "諏訪東診療所",
      isVisible: true,
      isSelected: false,
    },
    {
      name: "佐藤史郎",
      belong: "富士見南総合病院",
      isVisible: true,
      isSelected: false,
    },
    {
      name: "伊藤佳代子",
      belong: "茅野中央介護センター",
      isVisible: true,
      isSelected: false,
    },
    {
      name: "東南",
      belong: "岡谷西介護センター",
      isVisible: true,
      isSelected: false,
    },
    {
      name: "永井敬",
      belong: "諏訪東介護センター",
      isVisible: true,
      isSelected: false,
    },
    {
      name: "本田翼",
      belong: "富士見南介護センター",
      isVisible: true,
      isSelected: false,
    },
  ]);

  const listsLength = lists.filter((list) => list.isVisible).length;
  const height = "100px";

  const onClick = (selectIndex) => {
    const newList = {
      name: lists[selectIndex].name,
      belong: lists[selectIndex].belong,
      isVisible: lists[selectIndex].isVisible,
      isSelected: !lists[selectIndex].isSelected,
    };
    setLists(
      lists.map((list, index) => (selectIndex == index ? newList : list))
    );
  };

  return (
    <Box sx={{ height: "100vh", backgroundColor: "white", pb: "5px" }}>
      <Box
        sx={{
          backgroundColor: "blue",
          color: "white",
          textAlign: "center",
          fontSize: "40px",
          mb: "20px",
        }}
      >
        グループ作成
      </Box>
      <Search data={lists} setData={setLists} />
      <Box
        sx={{
          paddingTop: "20px",
          overflowY: "scroll",
          maxHeight: "calc(100% - 64px - 60px - 12px - 47px)",
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
                    backgroundColor: list.isSelected ? "#42B7DC" : "white",
                  }}
                  key={index}
                  onClick={() => onClick(index)}
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
      <Box sx={{ display: "flex", justifyContent: "center", mb: "5px" }}>
        <Button variant="contained" sx={{ fontSize: "20px" }}>
          作成
        </Button>
      </Box>
    </Box>
  );
};

export default Page;
