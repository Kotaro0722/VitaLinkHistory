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
  const now = new Date();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <>
      <Paper sx={{ width: "600px", mx: "auto", mt: "30px" }}>
        <Table aria-labelledby="tableTitle">
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
                  <TableCell component="td" scope="datum" padding="none">
                    {datum.name}
                  </TableCell>
                  <TableCell align="center">{datum.content}</TableCell>
                  <TableCell align="center">二日前</TableCell>
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
