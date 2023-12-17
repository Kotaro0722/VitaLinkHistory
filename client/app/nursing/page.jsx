"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const Page = () => {
  const lists = [
    "大波暁斗（✕✕介護センター）",
    "大波暁斗（△△介護センター）",
    "大波暁斗（〇〇介護センター）",
    " 大波暁斗（〇〇介護センター）",
  ];
  return (
    <Grid
      container
      component="main"
      sx={{ height: "150vh", backgroundColor: "white" }}
    >
      <Box
        sx={{
          display: "flow",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            mt: 5,
            mb: 7,
            width: "100vw",
            height: "10vh",
            backgroundColor: "blue",
            color: "white",
            textAlign: "center",
            fontSize: "40px",
            margin: "0 0 0 0",
            position: "fixed",
          }}
        >
          介護サービス事業者
        </Box>
        <Box sx={{ paddingTop: "5%" }}>
          {lists.map((list, index) => {
            return (
              <Box
                sx={{
                  width: "100vw",
                  height: "30vh",
                  backgroundColor: "white",
                  color: "green",
                  textAlign: "center",
                  fontSize: "35px",
                  border: "3px solid black",
                  lineHeight: "30vh",
                }}
                key={index}
              >
                {list}
              </Box>
            );
          })}

          <Button
            type="submit"
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              width: "100vw",
              height: "10vh",
              fontSize: "30px",
            }}
          >
            チャット
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default Page;
