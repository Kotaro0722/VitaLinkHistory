"use client";

import {
  Box,
  Button,
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import Symptom from "@/components/record/input/symptom";
import Medicine from "@/components/record/input/medicine";
import History from "@/components/record/output/history";

const Page = ({ params }) => {
  const now = new Date();
  const data = [
    {
      id: "afgu3yarauh45",
      name: "田中花子",
      ruby: "タナカハナコ",
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
      sex: "女",
    },
    {
      id: "asafauehfa5",
      name: "鈴木次郎",
      ruby: "スズキジロウ",
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
      sex: "男",
    },
    {
      id: "gaseritaser",
      name: "佐藤太郎",
      ruby: "サトウタロウ",
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
      sex: "男",
    },
    {
      id: "gajoeirt",
      name: "井上太一",
      ruby: "イノウエタイチ",
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
      sex: "男",
    },
    {
      id: "saleirlueer",
      name: "川崎美也子",
      ruby: "カワサキミヤコ",
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
      sex: "女",
    },
    {
      id: "sakehrerr",
      name: "本田正敏",
      ruby: "ホンダマサトシ",
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
      sex: "男",
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

  const history = [
    {
      date: {
        year: "2023",
        month: "12",
        day: "17",
      },
      symptom: "喉が痛い 発熱",
      medicine: [
        { name: "ぺラックT錠", amount: 3, timing: "食後", note: "" },
        { name: "トローチ", amount: 3, timing: "就寝前", note: "" },
      ],
    },
    {
      date: {
        year: "2023",
        month: "12",
        day: "17",
      },
      symptom: "喉が痛い 発熱",
      medicine: [
        { name: "ぺラックT錠", amount: 3, timing: "食後", note: "" },
        { name: "トローチ", amount: 3, timing: "就寝前", note: "" },
      ],
    },
    {
      date: {
        year: "2023",
        month: "12",
        day: "17",
      },
      symptom: "喉が痛い 発熱",
      medicine: [
        { name: "ぺラックT錠", amount: 3, timing: "食後", note: "" },
        { name: "トローチ", amount: 3, timing: "就寝前", note: "" },
      ],
    },
    {
      date: {
        year: "2023",
        month: "12",
        day: "17",
      },
      symptom: "喉が痛い 発熱",
      medicine: [
        { name: "ぺラックT錠", amount: 3, timing: "食後", note: "" },
        { name: "トローチ", amount: 3, timing: "就寝前", note: "" },
      ],
    },
    {
      date: {
        year: "2023",
        month: "12",
        day: "17",
      },
      symptom: "喉が痛い 発熱",
      medicine: [
        { name: "ぺラックT錠", amount: 3, timing: "食後", note: "" },
        { name: "トローチ", amount: 3, timing: "就寝前", note: "" },
      ],
    },
  ];

  return (
    <Box
      sx={{
        p: "20px",
        backgroundColor: "#9BC3FF",
        height: "94.4vh",
      }}
    >
      <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              display: "flex",
              width: "30%",
            }}
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
          <Box>
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
          <Box sx={{ minWidth: "200px", width: "30%" }}>
            <Typography sx={{ borderBottom: "none" }}>生年月日</Typography>
            <Typography>
              西暦 {patientData.birth.year}年 {patientData.birth.month}月{" "}
              {patientData.birth.day}日
            </Typography>
          </Box>
          <Box sx={{ width: "100px" }}>
            <Typography sx={{ borderBottom: "none" }}>年齢</Typography>
            <Typography>{age}</Typography>
          </Box>
        </Box>
      </ThemeProvider>
      <Grid
        container
        sx={{ mt: "20px", height: "calc(100% - 80px - 20px - 36px)" }}
        spacing={2}
      >
        <Grid item xs={6}>
          <History data={history} />
        </Grid>
        <Grid
          item
          xs={6}
          sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          <Symptom />
          <Medicine />
        </Grid>
      </Grid>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Button variant="contained">保存</Button>
      </Box>
    </Box>
  );
};

export default Page;
