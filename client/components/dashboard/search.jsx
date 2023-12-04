"use client";

import { ThemeProvider } from "@emotion/react";
import { Box, Button, Grid, TextField, createTheme } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

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
  const [city, setCity] = useState("");
  const [town, setTown] = useState("");

  useEffect(() => {
    const newData = data.map((datum) => {
      return (!name || datum.name.includes(name)) &&
        (!city || datum.address.city.includes(city)) &&
        (!town || datum.address.town.includes(town))
        ? {
            id: datum.id,
            name: datum.name,
            address: datum.address,
            visible: true,
          }
        : {
            id: datum.id,
            name: datum.name,
            address: datum.address,
            visible: false,
          };
    });
    setData(newData);
  }, [name, city, town]);

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
              label="市町村名"
              onChange={(value) => setCity(value.currentTarget.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              label="地域名"
              onChange={(value) => setTown(value.currentTarget.value)}
            />
          </Grid>
        </Grid>
      </ThemeProvider>
    </Box>
  );
};

export default Search;
