"use client";

import { ThemeProvider } from "@emotion/react";
import { Box, Grid, TextField, createTheme } from "@mui/material";
import React, { useEffect, useState } from "react";

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

const Search = ({ data, setData }) => {
  const [name, setName] = useState("");
  const [belong, setBelong] = useState("");

  useEffect(() => {
    const newData = data.map((datum) => {
      return (!name || datum.name.includes(name)) &&
        (!belong || datum.belong.includes(belong))
        ? {
            name: datum.name,
            belong: datum.belong,
            isVisible: true,
            id: datum.id,
          }
        : {
            name: datum.name,
            belong: datum.belong,
            isVisible: false,
            id: datum.id,
          };
    });
    setData(newData);
  }, [name, belong]);

  return (
    <Box>
      <ThemeProvider theme={theme}>
        <Grid container spacing={1} justifyContent="center" alignItems="center">
          <Grid item>
            <TextField
              label="氏名"
              onChange={(value) => setName(value.currentTarget.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              label="所属施設"
              onChange={(value) => setBelong(value.currentTarget.value)}
            />
          </Grid>
        </Grid>
      </ThemeProvider>
    </Box>
  );
};

export default Search;
