"use client";

import {
  Box,
  FormControl,
  FormControlLabel,
  Grid,
  NativeSelect,
  Radio,
  RadioGroup,
  Typography,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Page = ({ params }) => {
  const today = new Date();

  const [data, setData] = useState([
    {
      id: "afgu3yarauh45",
      name: "田中花子",
      address: {
        city: "茅野市",
        town: "豊平",
      },
      visible: true,
      birth: {
        year: "1960",
        month: "4",
        day: "6",
      },
    },
    {
      id: "asafauehfa5",
      name: "鈴木次郎",
      address: {
        city: "茅野市",
        town: "長倉",
      },
      visible: true,
      birth: {
        year: "1953",
        month: "7",
        day: "30",
      },
    },
    {
      id: "gaseritaser",
      name: "佐藤太郎",
      address: {
        city: "茅野市",
        town: "宮川",
      },
      visible: true,
      birth: {
        year: "1963",
        month: "10",
        day: "11",
      },
    },
    {
      id: "gajoeirt",
      name: "井上太一",
      address: {
        city: "茅野市",
        town: "塚原",
      },
      visible: true,
      birth: {
        year: "1952",
        month: "11",
        day: "5",
      },
    },
    {
      id: "saleirlueer",
      name: "川崎美也子",
      address: {
        city: "茅野市",
        town: "米沢",
      },
      visible: true,
      birth: {
        year: "1945",
        month: "8",
        day: "3",
      },
    },
    {
      id: "sakehrerr",
      name: "本田正敏",
      address: {
        city: "諏訪市",
        town: "四賀",
      },
      visible: true,
      birth: {
        year: "1959",
        month: "6",
        day: "25",
      },
    },
  ]);
  const patientData = data.filter((datum) => datum.id == params.id);
  const [page, setPage] = useState(0);
  const user = {
    belong: "茅野中央介護センター",
    name: "田中光太郎",
    tel: "08037256773",
    email: "kotaro@gmail.com",
  };
  const doctorLists = [
    { belong: "茅野中央病院", name: "田中光太郎" },
    { belong: "岡谷西病院", name: "鈴木小次郎" },
    { belong: "諏訪東診療所", name: "佐藤美代" },
    { belong: "富士見南クリニック", name: "杉田雄一郎" },
  ];
  const [selectBelong, setSelectBelong] = useState("");

  const handleSelectBelong = (e) => {
    setSelectBelong(e.target.value);
  };
  const handleNextClick = () => {
    setPage(page + 1);
  };
  const handlePrevClick = () => {
    setPage(page - 1);
  };

  return (
    <Box sx={{ height: "100%" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {page == 0 && (
          <>
            <Typography sx={{ textAlign: "right" }}>
              令和{today.getFullYear()}年{today.getMonth() + 1}月
              {today.getDate()}日
            </Typography>
            <Grid container>
              <Grid
                item
                xs={6}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <Box>
                  <Typography sx={{ writingMode: "vertical-lr" }}>
                    宛先
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <Typography>医療機関名</Typography>
                        </td>
                        <td>
                          <NativeSelect onChange={handleSelectBelong}>
                            {doctorLists.map((list, index) => {
                              return (
                                <option value={list.belong} key={index}>
                                  {list.belong}
                                </option>
                              );
                            })}
                          </NativeSelect>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Typography>氏名</Typography>
                        </td>
                        <td>
                          <NativeSelect>
                            {doctorLists
                              .filter((list) => list.belong == selectBelong)
                              .map((list, index) => {
                                return (
                                  <option value={list.name} key={index}>
                                    {list.name}
                                  </option>
                                );
                              })}
                          </NativeSelect>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Box>
              </Grid>
              <Grid
                item
                xs={6}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <Box>
                  <Typography sx={{ writingMode: "vertical-lr" }}>
                    発信元
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <Typography>事業所名</Typography>
                        </td>
                        <td>
                          <Typography>{user.belong}</Typography>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Typography>氏名</Typography>
                        </td>
                        <td>
                          <Typography>{user.name}</Typography>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Typography>電話番号</Typography>
                        </td>
                        <td>
                          <Typography>{user.tel}</Typography>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Typography>E-mail</Typography>
                        </td>
                        <td>
                          <Typography>{user.email}</Typography>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Box>
              </Grid>
            </Grid>
            <Box>
              <Typography sx={{ textIndent: "1em", my: "40px" }}>
                日頃より大変お世話になっております。下記の件について先生と連絡を取りたいと思っております。なお、この照会を行うこと及び先生から情報提供をいただくことについて、
              </Typography>
              <FormControl sx={{ mx: "30px" }}>
                <RadioGroup>
                  <FormControlLabel
                    label="ご本人・ご家族の同意を得て、ご連絡いたします。"
                    control={<Radio />}
                    value="yes"
                    sx={{ mb: "30px" }}
                  />
                  <FormControlLabel
                    label="ご本人・ご家族の同意は得られておりませんが、ご本人のために必要がありますのでご連絡したします。"
                    control={<Radio />}
                    value="no"
                    sx={{ mb: "30px" }}
                  />
                </RadioGroup>
              </FormControl>
            </Box>
          </>
        )}
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          {page != 0 ? (
            <Button sx={{ color: "black" }} onClick={handlePrevClick}>
              <ArrowBackIosNewIcon />
              前のページ
            </Button>
          ) : (
            <Box sx={{ width: "112px" }} />
          )}
          <Typography>{page + 1}/3</Typography>
          {page != 2 ? (
            <Button sx={{ color: "black" }} onClick={handleNextClick}>
              次のページ
              <ArrowForwardIosIcon />
            </Button>
          ) : (
            <Box sx={{ width: "112px" }} />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Page;
