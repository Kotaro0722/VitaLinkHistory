"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import TransitionButton from "@/components/home/transitionButton";
import consultation from "@/public/img/consultation.svg";
import dm from "@/public/img/dm.svg";

const Page = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "40px",
        p: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          height: "70%",
        }}
      >
        <TransitionButton title={"患者の記録"} icon={consultation.src} />
        <TransitionButton title={"個人チャット"} icon={dm.src} />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          height: "65%",
          height: "58px",
        }}
      >
        <TransitionButton title={"患者からの質問"} isQuestion={true} />
        <TransitionButton title={"グループチャット"} />
      </Box>
    </Box>
  );
};

export default Page;
