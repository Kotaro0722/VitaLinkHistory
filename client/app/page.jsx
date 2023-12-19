"use client";

import Box from "@mui/material/Box";
import TransitionButton from "@/components/home/transitionButton";
import consultation from "@/public/img/consultation.svg";
import dm from "@/public/img/dm.svg";
import { paths } from "@/paths";

const Page = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        height: "98vh",
        msOverflowStyle: "none",
        "::-webkit-scrollbar": { display: "none" },
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
        <TransitionButton
          title={"患者の記録"}
          icon={consultation.src}
          link={paths.dashboard.index}
        />
        <TransitionButton
          title={"個人チャット"}
          icon={dm.src}
          link={paths.chat.index}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <TransitionButton
          title={"患者からの質問"}
          isQuestion={true}
          link={paths.dashboard.question}
        />
        <TransitionButton title={"グループチャット"} link={paths.chat.group} />
      </Box>
    </Box>
  );
};

export default Page;
