"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const defaultTheme = createTheme();

export default function SignInSide() {
  return (
    <ThemeProvider theme={defaultTheme}>
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
          <Box sx={{}}>
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
          </Box>
          <Box sx={{ paddingTop: "5%" }}>
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
            >
              大波暁斗（✕✕介護センター）
            </Box>
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
            >
              大波暁斗（△△介護センター）
            </Box>
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
            >
              大波暁斗（〇〇介護センター）
            </Box>
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
            >
              大波暁斗（〇〇介護センター）
            </Box>
          </Box>
        </Box>
      </Grid>
    </ThemeProvider>
  );
}
