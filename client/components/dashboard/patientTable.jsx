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
import PaientModal from "./modal";

const PatientTable = ({ data }) => {
  const [page, setPage] = useState(0);
  const [showPerson, setShowPerson] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const rowsPerPage = 10;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowClick = (index) => {
    setShowPerson(index);
    setModalIsOpen(true);
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
                      <TableCell
                        component="td"
                        scope="datum"
                        padding="none"
                        sx={{ fontSize: "20px" }}
                      >
                        {datum.name}
                      </TableCell>
                      <TableCell align="center" sx={{ fontSize: "20px" }}>
                        {datum.address.city}
                      </TableCell>
                      <TableCell align="center" sx={{ fontSize: "20px" }}>
                        {datum.address.town}
                      </TableCell>
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
      <PaientModal
        IsActive={modalIsOpen}
        setIsActive={setModalIsOpen}
        data={data}
        index={showPerson}
      />
    </>
  );
};

export default PatientTable;
