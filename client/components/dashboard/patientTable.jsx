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
} from "@mui/material";
import { useWindowSize } from "@uidotdev/usehooks";
import PaientModal from "./modal";

const PatientTable = ({ data }) => {
  const [page, setPage] = useState(0);
  const { width, height } = useWindowSize();
  const rowsPerPage = 10;

  useEffect(() => {
    console.log(width);
    console.log(height);
  }, []);

  const handleClick = (event) => {};

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const visibleLength = data.filter((datum) => datum.visible).length;

  return (
    <>
      <Paper sx={{ width: "600px", mx: "auto", mt: "30px" }}>
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
              <TableCell sx={{ p: "8px" }}>患者名</TableCell>
              <TableCell sx={{ p: "8px" }} align="center">
                市町村
              </TableCell>
              <TableCell sx={{ p: "8px" }} align="center">
                地域
              </TableCell>
              <TableCell sx={{ width: "20px", p: "0px" }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {visibleLength ? (
              data.map((datum, index) => {
                return (
                  datum.visible && (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, datum.id)}
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
                      <TableCell component="td" scope="datum" padding="none">
                        {datum.name}
                      </TableCell>
                      <TableCell align="center">{datum.address.city}</TableCell>
                      <TableCell align="center">{datum.address.town}</TableCell>
                      <TableCell
                        sx={{
                          width: "10px",
                          p: "0px",
                          border: "0px",
                        }}
                      ></TableCell>
                    </TableRow>
                  )
                );
              })
            ) : (
              <TableRow>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell align="center">該当する患者はいません</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            )}
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
      <PaientModal IsActive={true} />
    </>
  );
};

export default PatientTable;
