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
  Box,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { paths } from "@/paths";

const Page = () => {
  const router = useRouter();
  const [page, setPage] = useState(0);
  const [showPerson, setShowPerson] = useState(0);
  const rowsPerPage = 10;
  const data = [
    {
      id: "grgniae",
      name: [
        {
          name: "鈴木太郎",
          belong: "茅野中央病院",
          isVisible: true,
          id: "awhiagaargb",
        },
        {
          name: "田中花子",
          belong: "岡谷西医院",
          isVisible: true,
          id: "ksbgaewejhb",
        },
        {
          name: "永井敬",
          belong: "諏訪東介護センター",
          isVisible: true,
          isSelected: false,
          id: "uaiwegbae",
        },
      ],
      isVisible: true,
    },
    {
      id: "agnlaerg",
      name: [
        {
          name: "源次郎",
          belong: "諏訪東診療所",
          isVisible: true,
          isSelected: false,
          id: "nvbragabjg",
        },
        {
          name: "伊藤佳代子",
          belong: "茅野中央介護センター",
          isVisible: true,
          isSelected: false,
          id: "chbfawebtaw",
        },
        {
          name: "本田翼",
          belong: "富士見南介護センター",
          isVisible: true,
          isSelected: false,
          id: "pwpewgabwa",
        },
      ],
      isVisible: true,
    },
    {
      id: "arnalnja",
      name: [
        {
          name: "鈴木太郎",
          belong: "茅野中央病院",
          isVisible: true,
          isSelected: false,
          id: "awhiagaargb",
        },
        {
          name: "源次郎",
          belong: "諏訪東診療所",
          isVisible: true,
          isSelected: false,
          id: "nvbragabjg",
        },
        {
          name: "東南",
          belong: "岡谷西介護センター",
          isVisible: true,
          isSelected: false,
          id: "jgsegaiebga",
        },
      ],
      isVisible: true,
    },
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowClick = (link) => {
    router.push(paths.chat.medical(link));
  };

  const visibleLength = data.filter((datum) => datum.isVisible).length;

  return (
    <Box sx={{ backgroundColor: "#9BC3FF", height: "99vh" }}>
      <Typography
        sx={{
          fontSize: "45px",
          textAlign: "center",
        }}
      >
        作成済みグループ一覧
      </Typography>
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
              <TableCell sx={{ p: "8px", textAlign: "center" }}>
                参加者名
              </TableCell>
              <TableCell sx={{ width: "20px", p: "0px" }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {visibleLength ? (
              data.map((datum, index) => {
                return (
                  datum.isVisible && (
                    <TableRow
                      hover
                      onClick={() => handleRowClick(datum.id)}
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
                        padding="16px"
                        sx={{ textAlign: "center", fontSize: "20px" }}
                      >
                        {datum.name.map((namae) => {
                          return `${namae.name}(${namae.belong})\t`;
                        })}
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
                <TableCell align="center">該当する患者はいません</TableCell>
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
    </Box>
  );
};

export default Page;
