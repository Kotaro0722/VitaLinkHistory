"use client";

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright(props) {}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid
        container
        component="main"
        sx={{ height: "200vh", backgroundColor: "white" }}
      >
        {/* <CssBaseline /> */}
        {/* <Grid item xs={12} sm={20} md={5} component={Paper} elevation={6} square> */}
        <Box
          sx={{
            display: "flow",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            // component="form"
            // noValidate
            onSubmit={handleSubmit}
            sx={{ backgroundAttachment: "fixed" }}
          >
            <Box
              sx={{
                mt: 5,
                mb: 7,
                width: "80vw",
                height: "30vh",
                backgroundImage: "url()",
                backgroundRepeat: "no-repeat",
                backgroundColor: "blue",
                backgroundPosition: "bottom",
                backgroundSize: "250px",

                color: "white",
                textAlign: "center",
                fontSize: "40px",
                lineHeight: "30vh",
              }}
            >
              医師・薬剤師
            </Box>
            <Box
              sx={{
                mt: 5,
                mb: 7,
                width: "80vw",
                height: "30vh",
                backgroundImage: "url()",
                backgroundRepeat: "no-repeat",
                backgroundColor: "white",
                backgroundPosition: "bottom",
                backgroundSize: "250px",
                color: "green",
                textAlign: "center",
                fontSize: "35px",
                border: "3px solid black",
                lineHeight: "30vh",
              }}
            >
              大波暁斗（✕✕医院）
            </Box>
            <Box
              sx={{
                mt: 5,
                mb: 7,
                width: "80vw",
                height: "30vh",
                backgroundImage: "url()",
                backgroundRepeat: "no-repeat",
                backgroundColor: "white",
                backgroundPosition: "bottom",
                backgroundSize: "250px",
                color: "green",
                textAlign: "center",
                fontSize: "35px",
                border: "3px solid black",
                lineHeight: "30vh",
              }}
            >
              大波暁斗（△△医院）
            </Box>
            <Box
              sx={{
                mt: 5,
                mb: 7,
                width: "80vw",
                height: "30vh",
                backgroundImage: "url()",
                backgroundRepeat: "no-repeat",
                backgroundColor: "white",
                backgroundPosition: "bottom",
                backgroundSize: "250px",
                color: "green",
                textAlign: "center",
                fontSize: "35px",
                border: "3px solid black",
                lineHeight: "30vh",
              }}
            >
              大波暁斗（〇〇薬局）
            </Box>
            <Box
              sx={{
                mt: 5,
                mb: 7,
                width: "80vw",
                height: "30vh",
                backgroundImage: "url()",
                backgroundRepeat: "no-repeat",
                backgroundColor: "white",
                backgroundPosition: "bottom",
                backgroundSize: "250px",
                color: "green",
                textAlign: "center",
                fontSize: "35px",
                border: "3px solid black",
                lineHeight: "30vh",
              }}
            >
              大波暁斗（〇〇医院）
            </Box>
          </Box>
        </Box>
        {/* </Grid> */}
      </Grid>
    </ThemeProvider>
  );
}
