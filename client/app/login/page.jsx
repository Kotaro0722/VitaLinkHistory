"use client";

import * as React from "react";
import {
  Avatar,
  Button,
  TextField,
  Paper,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { paths } from "@/paths";
import { useRouter } from "next/navigation";

const defaultTheme = createTheme();

const SignInSide = () => {
  const router = useRouter();
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleButton = () => {
    router.push(paths.home);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <Grid item xs={false} sm={4} md={7}>
          <Typography
            color="#1f1e33"
            lineHeight={11}
            textAlign="center"
            fontSize={50}
            fontStyle="italic"
          >
            VitaLink
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              mt: "145px",
              mb: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1, width: "100%" }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="ユーザー名"
                name="email"
                autoComplete="email"
                autoFocus
                sx={{
                  borderRadius: "10px",
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="パスワード"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleButton}
              >
                ログイン
              </Button>
              <Grid container>
                <Grid item xs>
                  パスワードを忘れた方
                </Grid>
                <Grid item>{"新規登録の方はこちら"}</Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default SignInSide;
