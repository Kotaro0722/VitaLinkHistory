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
        sx={{ height: "100vh", backgroundColor: "white" }}
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
            sx={{ display: "flex", padding: "9vh" }}
          >
            <Box
              sx={{
                mt: 5,
                mb: 7,
                width: "30vw",
                height: "70vh",
                backgroundImage: "url(https://pictogram2.com/p/p0358/i/tn.png)",
                backgroundRepeat: "no-repeat",
                backgroundColor: "white",
                backgroundPosition: "bottom",
                backgroundSize: "250px",
                color: "green",
                textAlign: "center",
                fontSize: "40px",
                border: "3px solid black",
                margin: "2vw",
                lineHeight: "30vh",
              }}
            >
              患者の記録
            </Box>
            <Box
              type="submit"
              fullWidth
              size="large"
              variant="contained"
              sx={{
                mt: 5,
                mb: 7,
                width: "25vw",
                height: "70vh",
                backgroundImage:
                  "url(https://i.pinimg.com/originals/c4/e5/7c/c4e57ccc046cfbb013988447c7c7b59a.png)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom",
                backgroundSize: "250px",
                backgroundColor: "white",
                color: "green",
                fontSize: "40px",
                textAlign: "center",
                border: "3px solid black",
                margin: "2vw",
                lineHeight: "30vh",
              }}
            >
              患者からの質問
            </Box>
            <Box
              type="submit"
              fullWidth
              size="large"
              variant="contained"
              sx={{
                mt: 5,
                mb: 7,
                width: "25vw",
                height: "70vh",
                backgroundImage: "url(https://pictogram2.com/p/p0168/i/tn.png)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom",
                backgroundSize: "250px",
                backgroundColor: "white",
                color: "green",
                fontSize: "40px",
                textAlign: "center",
                border: "3px solid black",
                margin: "2vw",
                lineHeight: "30vh",
              }}
            >
              相談所
            </Box>
          </Box>
        </Box>
        {/* </Grid> */}
      </Grid>
    </ThemeProvider>
  );
}
