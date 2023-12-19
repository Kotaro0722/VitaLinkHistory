import History from "@/components/record/output/history";
import { Typography } from "@mui/material";

const Page = ({ params }) => {
  const history = [
    {
      date: {
        year: "2023",
        month: "12",
        day: "17",
      },
      symptom: "のどの痛み発熱",
      medicine: [
        { name: "ぺラックT錠", amount: 3, timing: "食後", note: "" },
        { name: "トローチ", amount: 3, timing: "就寝前", note: "" },
      ],
      disease: "高血圧",
    },
    {
      date: {
        year: "2023",
        month: "12",
        day: "07",
      },
      symptom: "関節が痛い",
      medicine: [
        { name: "ぺラックT錠", amount: 3, timing: "食後", note: "" },
        { name: "トローチ", amount: 3, timing: "就寝前", note: "" },
      ],
    },
    {
      date: {
        year: "2023",
        month: "11",
        day: "30",
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
        month: "11",
        day: "23",
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
        month: "11",
        day: "16",
      },
      symptom: "喉が痛い 発熱",
      medicine: [
        { name: "ぺラックT錠", amount: 3, timing: "食後", note: "" },
        { name: "トローチ", amount: 3, timing: "就寝前", note: "" },
      ],
    },
  ];
  return (
    <>
      <Typography sx={{ fontSize: "20px", textAlign: "center" }}>
        過去の問診票
      </Typography>
      <History data={history} />
    </>
  );
};

export default Page;
