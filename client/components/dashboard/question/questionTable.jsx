"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Paper,
} from "@mui/material";
import exclamation from "@/public/img/exclamation.svg";
import { useRouter } from "next/navigation";
import { paths } from "@/paths";

const QuestionTable = ({ data }) => {
  const router = useRouter();
  const [page, setPage] = useState(0);
  const rowsPerPage = 10;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <>
      <Paper sx={{ width: "700px", mx: "auto", mt: "30px" }}>
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
                内容
              </TableCell>
              <TableCell sx={{ p: "8px" }} align="center">
                投稿日
              </TableCell>
              <TableCell sx={{ width: "20px", p: "0px" }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((datum, index) => {
              const handleRowClick = () => {
                router.push(paths.chat.patient(datum.id));
              };
              return (
                <TableRow
                  hover
                  onClick={() => handleRowClick(index)}
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
                  <TableCell>
                    <img
                      src={exclamation.src}
                      alt="!"
                      style={{ width: "30px" }}
                    />
                  </TableCell>
                  <TableCell
                    component="td"
                    scope="datum"
                    padding="none"
                    sx={{ fontSize: "20px" }}
                  >
                    {datum.name}
                  </TableCell>
                  <TableCell align="center" sx={{ fontSize: "20px" }}>
                    {datum.content}
                  </TableCell>
                  <TableCell align="center" sx={{ fontSize: "20px" }}>
                    二日前
                  </TableCell>
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
    </>
  );
};

export default QuestionTable;
