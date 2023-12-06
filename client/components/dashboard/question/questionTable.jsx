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
} from "@mui/material";
import exclamation from "@/public/img/exclamation.svg";
// import PaientModal from "./modal";

const QuestionTable = ({ data, setData }) => {
  const [page, setPage] = useState(0);
  const [showPerson, setShowPerson] = useState(0);
  const rowsPerPage = 10;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Paper sx={{ width: "80%", mx: "auto", mt: "30px" }}>
      <Table aria-labelledby="tableTitle">
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
            <TableCell sx={{ p: "8px" }}></TableCell>
            <TableCell sx={{ p: "8px" }}>患者名</TableCell>
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
            const handleRowClick = (index) => {
              // const newData = [];
              // setData(newData);
              setShowPerson(index);
            };

            return (
              <TableRow
                hover
                onClick={handleRowClick}
                key={datum.id}
                sx={{ cursor: "pointer" }}
              >
                <TableCell
                  sx={{
                    width: "10px",
                    p: "0px",
                    border: "0px",
                  }}
                ></TableCell>
                <TableCell align="center">
                  {!datum.isRead && (
                    <img
                      src={exclamation.src}
                      alt="notRead"
                      style={{ width: "20px" }}
                    />
                  )}
                </TableCell>
                <TableCell component="td" scope="datum" padding="none">
                  {datum.name}
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
      />
    </Paper>
  );
};

export default QuestionTable;
