"use client";

import { Inter } from "next/font/google";
import {
  Grid,
  Paper,
  Typography,
  Button,
  Box,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

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
  return (
    <html lang="en">
      <head>
        <title>Dashbaord</title>
      </head>
      <body className={inter.className}>
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
                  <Link href="/dashboard">
                    <Button variant="contained">患者情報一覧</Button>
                  </Link>
                  <Link href="/dashboard">
                    <Button variant="contained">アカウント情報</Button>
                  </Link>
                  <Link href="/dashboard/questionTable">
                    <Button variant="contained">患者からの質問</Button>
                  </Link>
                </Box>
                <Link href="/dashboard">
                  <Button variant="contained">Logout</Button>
                </Link>
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
