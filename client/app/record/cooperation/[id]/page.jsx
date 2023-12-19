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
  TextField,
} from "@mui/material";
import { useState } from "react";
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
      tel: "09045376549",
      sex: "女",
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
      tel: "09045376549",
      sex: "男",
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
      tel: "09045376549",
      sex: "男",
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
      tel: "09045376549",
      sex: "男",
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
      tel: "09045376549",
      sex: "女",
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
      tel: "09045376549",
      sex: "男",
    },
  ]);
  const patientData = data.filter((datum) => datum.id == params.id)[0];
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

  const purpose = [
    {
      label: "新規・更新・区分変更後のケアプラン作成時の意見について",
      value: "ideaPlan",
    },
    {
      label: "利用者の医療・介護・症状の医学的意見・指示について",
      value: "instruct",
    },
    {
      label: "サービス担当者会議における意見について",
      value: "ideaService",
    },
    {
      label: "医療系サービスを導入するにあたり、主治医の意見・相談など",
      value: "consultService",
    },
    {
      label: "利用者の下記条件についての相談",
      value: "consultCondition",
    },
    {
      label: "担当ケアマネージャーになった挨拶",
      value: "greet",
    },
    {
      label: "その他",
      value: "other",
    },
  ];

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
    <Box sx={{ height: "calc(100% - 20px)", m: "10px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography sx={{ textAlign: "right" }}>
          {today.getFullYear()}年{today.getMonth() + 1}月{today.getDate()}日
        </Typography>
        {page == 0 && (
          <>
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
                          <NativeSelect
                            onChange={handleSelectBelong}
                            sx={{
                              backgroundColor: "#D9D9D9",
                            }}
                          >
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
                          <NativeSelect
                            sx={{
                              backgroundColor: "#D9D9D9",
                            }}
                          >
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
                          <Typography sx={{ backgroundColor: "#D9D9D9" }}>
                            {user.belong}
                          </Typography>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Typography>氏名</Typography>
                        </td>
                        <td>
                          <Typography sx={{ backgroundColor: "#D9D9D9" }}>
                            {user.name}
                          </Typography>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Typography>電話番号</Typography>
                        </td>
                        <td>
                          <Typography sx={{ backgroundColor: "#D9D9D9" }}>
                            {user.tel}
                          </Typography>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Typography>E-mail</Typography>
                        </td>
                        <td>
                          <Typography sx={{ backgroundColor: "#D9D9D9" }}>
                            {user.email}
                          </Typography>
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
                  />
                </RadioGroup>
              </FormControl>
            </Box>
          </>
        )}
        {page == 1 && (
          <>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography sx={{ writingMode: "vertical-rl", mr: "30px" }}>
                利用者
              </Typography>
              <Grid container sx={{ width: "fit-content" }} spacing={4}>
                <Grid item>
                  <Box sx={{ display: "flex" }}>
                    <Typography
                      sx={{
                        width: "70px",
                      }}
                    >
                      氏名
                    </Typography>
                    <Typography
                      sx={{
                        backgroundColor: "#D9D9D9",
                        width: "110px",
                        textAlign: "center",
                      }}
                    >
                      {patientData.name}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Typography
                      sx={{
                        width: "70px",
                      }}
                    >
                      住所
                    </Typography>
                    <Typography
                      sx={{
                        backgroundColor: "#D9D9D9",
                        width: "110px",
                        textAlign: "center",
                      }}
                    >
                      {patientData.address.city} {patientData.address.town}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Typography
                      sx={{
                        width: "70px",
                      }}
                    >
                      介護度
                    </Typography>
                    <Typography
                      sx={{
                        backgroundColor: "#D9D9D9",
                        width: "110px",
                        textAlign: "center",
                      }}
                    >
                      要介護
                    </Typography>
                  </Box>
                </Grid>
                <Grid item>
                  <Box sx={{ display: "flex" }}>
                    <Typography
                      sx={{
                        width: "70px",
                      }}
                    >
                      電話番号
                    </Typography>
                    <Typography
                      sx={{
                        backgroundColor: "#D9D9D9",
                        width: "110px",
                        textAlign: "center",
                      }}
                    >
                      {patientData.tel}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Typography
                      sx={{
                        width: "70px",
                      }}
                    >
                      生年月日
                    </Typography>
                    <Typography
                      sx={{
                        backgroundColor: "#D9D9D9",
                        width: "110px",
                        textAlign: "center",
                      }}
                    >
                      {patientData.birth.year}年{patientData.birth.month}月
                      {patientData.birth.day}日
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Typography
                      sx={{
                        width: "70px",
                      }}
                    >
                      性別
                    </Typography>
                    <Typography
                      sx={{
                        backgroundColor: "#D9D9D9",
                        width: "110px",
                        textAlign: "center",
                      }}
                    >
                      {patientData.sex}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <FormControl>
              <RadioGroup>
                {purpose.map((list, index) => {
                  return (
                    <FormControlLabel
                      label={list.label}
                      control={<Radio />}
                      value={list.value}
                      key={index}
                    />
                  );
                })}
              </RadioGroup>
            </FormControl>
          </>
        )}
        {page == 2 && (
          <>
            <Box sx={{ width: "100%", mb: "20px" }}>
              <Typography>照会・相談内容</Typography>
              <TextField
                multiline
                rows={10}
                sx={{ backgroundColor: "#D9D9D9", width: "100%" }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "right",
                alignItems: "center",
                mb: "20px",
              }}
            >
              <Typography>担当者 職氏名</Typography>
              <TextField sx={{ backgroundColor: "#D9D9D9" }} />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button variant="contained" sx={{ width: "150px" }}>
                完了
              </Button>
            </Box>
          </>
        )}
        <Box
          sx={{ display: "flex", justifyContent: "space-between", mt: "30px" }}
        >
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
