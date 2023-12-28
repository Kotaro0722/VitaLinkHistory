"use client";

import {
  Grid,
  Paper,
  Typography,
  Button,
  Box,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { paths } from "@/paths";
import { useRouter } from "next/navigation";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          width: "220px",
          height: "50px",
          fontSize: "20px",
        },
      },
    },
  },
});

export default function RootLayout({ children }) {
  const sidebarWidth = "250px";
  const router = useRouter();
  const handleButtonClick = (link) => {
    router.push(link);
  };
  return (
    <html lang="en">
      <head>
        <title>チャット</title>
      </head>
      <body style={{ margin: "0px" }}>
        <Grid container>
          <Grid item minWidth={sidebarWidth}>
            <Paper
              sx={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around",
                gap: "70px",
                backgroundColor: "whitesmoke",
              }}
            >
              <Typography sx={{ fontSize: "50px" }}>VitaLink</Typography>
              <ThemeProvider theme={theme}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "20px",
                  }}
                >
                  <Button
                    variant="contained"
                    onClick={() => handleButtonClick(paths.dashboard.index)}
                  >
                    患者情報一覧
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => handleButtonClick(paths.dashboard.question)}
                  >
                    患者からの質問
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => handleButtonClick(paths.chat.index)}
                  >
                    チャット
                  </Button>
                </Box>
                <Button
                  variant="contained"
                  onClick={() => handleButtonClick(paths.login)}
                >
                  Logout
                </Button>
              </ThemeProvider>
            </Paper>
          </Grid>
          <Grid
            item
            sx={{
              width: `calc(100% - ${sidebarWidth})`,
            }}
          >
            {children}
          </Grid>
        </Grid>
      </body>
    </html>
  );
}
