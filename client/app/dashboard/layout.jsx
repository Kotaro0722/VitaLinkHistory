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
  const sidebarWidth = "300px";
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
                gap: "70px",
              }}
            >
              <Typography sx={{ fontSize: "50px", m: "50px" }}>
                VitaLink
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <ThemeProvider theme={theme}>
                  <Link href="/dashboard">
                    <Button variant="contained">患者情報一覧</Button>
                  </Link>
                  <Link href="/dashboard">
                    <Button variant="contained">アカウント情報確認</Button>
                  </Link>
                  <Link href="/dashboard">
                    <Button
                      variant="contained"
                      sx={{
                        mt: "240px",
                      }}
                    >
                      Logout
                    </Button>
                  </Link>
                </ThemeProvider>
              </Box>
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
