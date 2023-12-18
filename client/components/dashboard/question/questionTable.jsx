"use client";

import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Paper,
  Box,
  Typography,
  createTheme,
  ThemeProvider,
  Grid,
  Button,
  IconButton,
} from "@mui/material";
import exclamation from "@/public/img/exclamation.svg";
import clock from "@/public/img/clock.svg";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useRouter } from "next/navigation";

const PageManager = ({ page, setPage, maxPage }) => {
  const handleChangePage = (newPage) => {
    setPage(newPage);
  };
  return (
    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
      <IconButton
        disabled={page == 0}
        onClick={() => handleChangePage(page - 1)}
      >
        <ArrowBackIosNewIcon />
      </IconButton>
      <Typography sx={{ lineHeight: "40px" }}>{page + 1}</Typography>
      <IconButton
        disabled={page == maxPage}
        onClick={() => handleChangePage(page + 1)}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

const QuestionTable = ({ data, setData }) => {
  const [page, setPage] = useState(0);
  const [showPerson, setShowPerson] = useState(0);
  const rowsPerPage = 5;
  console.log(data.length / rowsPerPage);
  const router = useRouter();

  const theme = createTheme({
    components: {
      MuiTableCell: {
        styleOverrides: {
          root: {
            fontSize: "20px",
            border: "none",
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            fontSize: "20px",
          },
        },
      },
    },
  });

  return (
    <>
      <Box
        sx={{
          width: "80%",
          mx: "auto",
          my: "30px",
          maxWidth: "960px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <ThemeProvider theme={theme}>
          {data.map((datum, index) => {
            const handleRowClick = () => {
              const newData = data;
              newData[index].isRead = true;
              setData(newData);
              setShowPerson(index);
            };
            console.log(rowsPerPage * (page + 1) > index);
            return (
              rowsPerPage * page <= index &&
              rowsPerPage * (page + 1) > index && (
                <Box
                  sx={{
                    position: "relative",
                    border: "5px solid black",
                    borderRadius: "15px",
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "40px",
                    py: "2px",
                    cursor: "pointer",
                  }}
                  key={datum.id}
                  onClick={handleRowClick}
                >
                  {!datum.isRead && (
                    <img
                      src={exclamation.src}
                      alt="notRead"
                      style={{
                        width: "45px",
                        position: "absolute",
                        top: "13px",
                        left: "20px",
                      }}
                    />
                  )}
                  <Typography
                    sx={{
                      ml: "85px",
                      lineHeight: "70px",
                      fontSize: "60px",
                    }}
                  >
                    {datum.name}さんから
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      mr: "30px",
                    }}
                  >
                    <img
                      src={clock.src}
                      alt="clock"
                      style={{ width: "30px" }}
                    />
                    <Typography sx={{ fontSize: "25px" }}>二日前</Typography>
                  </Box>
                </Box>
              )
            );
          })}
        </ThemeProvider>
      </Box>
      <PageManager
        page={page}
        setPage={setPage}
        maxPage={Math.floor(data.length / rowsPerPage)}
      />
    </>
  );
};

export default QuestionTable;
