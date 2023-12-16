import { Box, Typography } from "@mui/material";

const Page = ({ param }) => {
  const data = [
    {
      id: "1",
      name: "田中太郎",
      ruby: "タナカタロウ",
      birth: { year: "2001", month: "01", day: "01" },
      city: "茅野",
      area: "豊平",
    },
    {
      id: "2",
      name: "佐藤凛",
      ruby: "サトウリン",
      birth: { year: "2003", month: "02", day: "02" },
      city: "岡谷",
      area: "長地",
    },
    {
      id: "3",
      name: "鈴木碧",
      ruby: "スズキアオ",
      birth: { year: "2001", month: "03", day: "03" },
      city: "茅野",
      area: "金沢",
    },
    {
      id: "4",
      name: "高橋律",
      ruby: "タカハシリツ",
      birth: { year: "2002", month: "04", day: "04" },
      city: "松本",
      area: "旭",
    },
    {
      id: "5",
      name: "伊藤結愛",
      ruby: "イトウユア",
      birth: { year: "2000", month: "05", day: "05" },
      city: "岡谷",
      area: "今井",
    },
    {
      id: "6",
      name: "渡邊凪",
      ruby: "ワタナベナギ",
      birth: { year: "1998", month: "06", day: "06" },
      city: "諏訪",
      area: "大手",
    },
    {
      id: "7",
      name: "山本澪",
      ruby: "ヤマモトミオ",
      birth: { year: "2001", month: "07", day: "07" },
      city: "塩尻",
      area: "広岡",
    },
    {
      id: "8",
      name: "中村心春",
      ruby: "ナカムラコハル",
      birth: { year: "2003", month: "08", day: "08" },
      city: "松本",
      area: "県",
    },
    {
      id: "9",
      name: "小林蓮",
      ruby: "コバヤシレン",
      birth: { year: "1999", month: "09", day: "09" },
      city: "茅野",
      area: "玉川",
    },
    {
      id: "10",
      name: "加藤彩",
      ruby: "カトウアヤ",
      birth: { year: "1990", month: "10", day: "10" },
      city: "諏訪",
      area: "上川",
    },
  ];
  return (
    <Box sx={{ overflowY: "scroll" }}>
      <Box>
        <Box>
          <Typography>氏名</Typography>
          <Typography></Typography>
        </Box>
        <Box>
          <Typography>フリガナ</Typography>
          <Typography></Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Page;
