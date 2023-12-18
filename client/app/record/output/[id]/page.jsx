import History from "@/components/record/output/history";

const Page = ({ params }) => {
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
  return <History data={history} />;
};

export default Page;
