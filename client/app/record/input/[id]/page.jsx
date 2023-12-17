"use client";

import TextForm from "@/components/record/input/symptom";
import {
  Box,
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import Symptom from "@/components/record/input/symptom";
import Medicine from "@/components/record/input/medicine";

const Page = ({ params }) => {
  const now = new Date();
  const data = [
    {
      id: "1",
      name: "田中太郎",
      ruby: "タナカタロウ",
      sex: "男",
      birth: { year: "2001", month: "01", day: "01" },
      city: "茅野",
      area: "豊平",
    },
    {
      id: "2",
      name: "佐藤凛",
      ruby: "サトウリン",
      sex: "女",
      birth: { year: "2003", month: "02", day: "02" },
      city: "岡谷",
      area: "長地",
    },
    {
      id: "3",
      name: "鈴木碧",
      ruby: "スズキアオ",
      sex: "男",
      birth: { year: "2001", month: "03", day: "03" },
      city: "茅野",
      area: "金沢",
    },
    {
      id: "4",
      name: "高橋律",
      ruby: "タカハシリツ",
      sex: "男",
      birth: { year: "2002", month: "04", day: "04" },
      city: "松本",
      area: "旭",
    },
    {
      id: "5",
      name: "伊藤結愛",
      ruby: "イトウユア",
      sex: "女",
      birth: { year: "2000", month: "05", day: "05" },
      city: "岡谷",
      area: "今井",
    },
    {
      id: "6",
      name: "渡邊凪",
      ruby: "ワタナベナギ",
      sex: "男",
      birth: { year: "1998", month: "06", day: "06" },
      city: "諏訪",
      area: "大手",
    },
    {
      id: "7",
      name: "山本澪",
      ruby: "ヤマモトミオ",
      sex: "女",
      birth: { year: "2001", month: "07", day: "07" },
      city: "塩尻",
      area: "広岡",
    },
    {
      id: "8",
      name: "中村心春",
      ruby: "ナカムラコハル",
      sex: "女",
      birth: { year: "2003", month: "08", day: "08" },
      city: "松本",
      area: "県",
    },
    {
      id: "9",
      name: "小林蓮",
      ruby: "コバヤシレン",
      sex: "男",
      birth: { year: "1999", month: "09", day: "09" },
      city: "茅野",
      area: "玉川",
    },
    {
      id: "10",
      name: "加藤彩",
      ruby: "カトウアヤ",
      sex: "女",
      birth: { year: "1990", month: "10", day: "10" },
      city: "諏訪",
      area: "上川",
    },
  ];
  const patientData = data.filter((datum) => datum.id == params.id)[0];
  const age = now.getFullYear() - patientData.birth.year;
  const defaultHeight = "40px";
  const sexHeight = "80px";

  const theme = createTheme({
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            border: "1px solid black",
            fontSize: "20px",
            textAlign: "center",
            backgroundColor: "white",
            height: defaultHeight,
            lineHeight: defaultHeight,
            borderLeft: "none",
          },
        },
      },
    },
  });

  return (
    <Box
      sx={{
        p: "20px",
        backgroundColor: "#9BC3FF",
        height: "100vh",
      }}
      //画面全体
    >
      <ThemeProvider theme={theme}>
        <Box
          sx={{ display: "flex", alignItems: "center" }}
          //自動入力欄
        >
          <Box
            sx={{
              display: "flex",
              width: "30%",
            }}
            //名前
          >
            <Box sx={{ width: "30%", minWidth: "110px" }}>
              <Typography
                sx={{ borderBottom: "none", borderLeft: "1px solid black" }}
              >
                フリガナ
              </Typography>
              <Typography sx={{ borderLeft: "1px solid black" }}>
                氏名
              </Typography>
            </Box>
            <Box sx={{ width: "70%", minWidth: "200px" }}>
              <Typography sx={{ borderBottom: "none" }}>
                {patientData.ruby}
              </Typography>
              <Typography>{patientData.name}</Typography>
            </Box>
          </Box>
          <Box
          //性別
          >
            <Typography
              sx={{
                height: sexHeight,
                borderLeft: "none",
                width: "73px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {patientData.sex}
            </Typography>
          </Box>
          <Box
            sx={{ minWidth: "200px", width: "30%" }}
            //生年月日
          >
            <Typography sx={{ borderBottom: "none" }}>生年月日</Typography>
            <Typography>
              西暦 {patientData.birth.year}年 {patientData.birth.month}月{" "}
              {patientData.birth.day}日
            </Typography>
          </Box>
          <Box
            sx={{ width: "100px" }}
            //年齢
          >
            <Typography sx={{ borderBottom: "none" }}>年齢</Typography>
            <Typography>{age}</Typography>
          </Box>
        </Box>
      </ThemeProvider>
      <Grid container sx={{ mt: "20px", height: "calc(100% - 80px - 20px)" }}>
        <Grid item xs={6}></Grid>
        <Grid
          item
          xs={6}
          sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          <Symptom />
          <Medicine />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Page;
