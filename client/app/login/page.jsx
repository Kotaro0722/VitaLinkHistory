"use client";

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { paths } from "@/paths";
import { useRouter } from "next/navigation";

const Copyright = (props) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

const SignInSide = () => {
  const router = useRouter();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  const handleButton = () => {
    router.push(paths.home);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />

        <Grid
          item
          xs={false} //幅600px未満だったら表示しない
          sm={4} //幅600~899だったら
          md={7} //900~1200
          //lg ~1200
          //xl ~1536
          sx={
            {
              /*backgroundImage:
              "url(https://source.unsplash.com/random?wallpapers)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",111*/
            }
          }
        >
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
                  <Link href="#" variant="body2">
                    パスワードを忘れた方
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"新規登録の方はこちら"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default SignInSide;
