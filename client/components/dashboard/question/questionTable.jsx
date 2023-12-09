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
} from "@mui/material";
import exclamation from "@/public/img/exclamation.svg";
import clock from "@/public/img/clock.svg";

const QuestionTable = ({ data, setData }) => {
  const [page, setPage] = useState(0);
  const [showPerson, setShowPerson] = useState(0);
  const rowsPerPage = 10;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

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
    <Grid
      sx={{
        width: "80%",
        mx: "auto",
        mt: "30px",
        maxWidth: "960px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <ThemeProvider theme={theme}>
        {data.map((datum, index) => {
          return (
            <Box
              sx={{
                position: "relative",
                border: "5px solid black",
                borderRadius: "15px",
                display: "flex",
                justifyContent: "space-around",
                gap: "40px",
                py: "2px",
              }}
              key={datum.id}
            >
              {!datum.isRead && (
                <img
                  src={exclamation.src}
                  alt="notRead"
                  style={{
                    width: "45px",
                    position: "absolute",
                    top: "7px",
                    left: "5px",
                  }}
                />
              )}
              <Typography
                sx={{
                  ml: "30px",
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
                }}
              >
                <img src={clock.src} alt="clock" style={{ width: "20px" }} />
                <Typography>二日前</Typography>
              </Box>
            </Box>
          );
        })}
        {/* <Table aria-labelledby="tableTitle">
          <TableHead
            sx={{
              backgroundColor: "#4169e1",
            }}
          >
            <TableRow
              sx={{
                backgroundColor: "#d3d3d3",
              }}
            >
              <TableCell sx={{ width: "20px", p: "0px" }}></TableCell>
              <TableCell sx={{ p: "8px", pl: "30px" }}>患者名</TableCell>
              <TableCell sx={{ p: "8px" }} align="center">
                投稿日
              </TableCell>
              <TableCell sx={{ p: "8px" }} align="center">
                質問内容
              </TableCell>
              <TableCell sx={{ width: "20px", p: "0px" }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((datum, index) => {
              const handleRowClick = () => {
                const newData = data;
                newData[index].isRead = true;
                setData(newData);
                setShowPerson(index);
              };

              return (
                <TableRow
                  hover
                  onClick={handleRowClick}
                  key={datum.id}
                  sx={{
                    cursor: "pointer",
                    position: "relative",
                    border: "1px solid black",
                    borderRadius: "40px",
                    py: "20px",
                  }}
                >
                  <TableCell
                    sx={{
                      width: "10px",
                      p: "0px",
                      border: "0px",
                    }}
                  ></TableCell>
                  <TableCell component="td" scope="datum" padding="none">
                    <Box
                      sx={{
                        width: "fit-content",
                        float: "left",
                        mr: "10px",
                      }}
                    >
                      {!datum.isRead && (
                        <img
                          src={exclamation.src}
                          alt="notRead"
                          style={{ width: "20px", position: "absolute" }}
                        />
                      )}
                    </Box>
                    <Typography sx={{ pl: "30px" }}>{datum.name}</Typography>
                  </TableCell>
                  <TableCell align="center">{datum.post_date}</TableCell>
                  <TableCell align="left">{datum.content}</TableCell>
                  <TableCell
                    sx={{
                      width: "10px",
                      p: "0px",
                      border: "0px",
                    }}
                  ></TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
        /> */}
      </ThemeProvider>
    </Grid>
  );
};

export default QuestionTable;
