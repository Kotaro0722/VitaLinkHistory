"use client";

import * as React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Paper,
} from "@mui/material";

const data = [
  {
    id: "afgu3yarauh45",
    name: "田中花子",
    address: {
      city: "茅野市",
      town: "豊平",
    },
  },
  {
    id: "asafauehfa5",
    name: "鈴木次郎",
    address: {
      city: "茅野市",
      town: "長倉",
    },
  },
  {
    id: "gaseritaser",
    name: "佐藤太郎",
    address: {
      city: "茅野市",
      town: "宮川",
    },
  },
  {
    id: "gajoeirt",
    name: "井上太一",
    address: {
      city: "茅野市",
      town: "塚原",
    },
  },
  {
    id: "saleirlueer",
    name: "川崎美也子",
    address: {
      city: "茅野市",
      town: "米沢",
    },
  },
  {
    id: "sakehrerr",
    name: "本田正敏",
    address: {
      city: "諏訪市",
      town: "四賀",
    },
  },
];

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)

const EnhancedTable = () => {
  //   const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const rowsPerPage = 10;

  const handleClick = (event) => {};

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Paper sx={{ width: "600px", mx: "auto", mt: "200px" }}>
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
          {data.map((datum, index) => {
            const labelId = `enhanced-table-checkbox-${index}`;

            return (
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
                <TableCell
                  component="td"
                  id={labelId}
                  scope="datum"
                  padding="none"
                >
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
            );
          })}
          {emptyRows > 0 && <TableCell colSpan={6} />}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
      />
    </Paper>
  );
};

export default EnhancedTable;
