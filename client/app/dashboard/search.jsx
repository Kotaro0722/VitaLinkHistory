"use client";

import { ThemeProvider } from "@emotion/react";
import { Box, Button, Grid, TextField, createTheme } from "@mui/material";
import React from "react";

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
          borderRadius: "5px",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          p: "8px 7px",
        },
      },
    },
  },
});

const Search = () => {
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <Grid container spacing={1} justifyContent="center" alignItems="center">
          <Grid item>
            <TextField label="氏名" />
          </Grid>
          <Grid item>
            <TextField label="市町村名" />
          </Grid>
          <Grid item>
            <TextField label="地域名" />
          </Grid>
          <Grid item>
            <Button variant="contained">検索</Button>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Box>
  );
};

export default Search;
