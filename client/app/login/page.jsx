"use client";

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
import { paths } from "@/paths";
import { useRouter } from "next/navigation";

const SignInSide = () => {
  const router = useRouter();
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleButton = () => {
    router.push(paths.dashboard.index);
  };

  return (
    <Grid container sx={{ height: "97vh" }}>
      <Grid item xs={7}>
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
      <Grid item xs={5} component={Paper}>
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
  );
};

export default SignInSide;
