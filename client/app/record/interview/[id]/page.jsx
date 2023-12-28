"use client";

import CheckList from "@/components/record/interview/checklist";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import { paths } from "@/paths";
import { useRouter } from "next/navigation";
import RadioList from "@/components/record/interview/radiolist";

const Page = ({ params }) => {
  const router = useRouter();
  const [symptoms, setSymptom] = useState([
    { name: "fever", check: false, label: "発熱" },
    { name: "headache", check: false, label: "頭痛" },
    { name: "throatache", check: false, label: "のどの痛み" },
    { name: "cough", check: false, label: "咳・たん" },
    { name: "snot", check: false, label: "鼻水・鼻づまり" },
    { name: "jointache", check: false, label: "関節の痛み" },
    { name: "dizzy", check: false, label: "めまい" },
    { name: "headedness", check: false, label: "ふらつき" },
    { name: "palpitation", check: false, label: "動悸" },
    { name: "breath", check: false, label: "息苦しい" },
    { name: "tired", check: false, label: "体がだるい" },
    { name: "appetite", check: false, label: "食欲がない" },
    { name: "stomachache", check: false, label: "腹痛" },
    { name: "diarrhea", check: false, label: "下痢" },
    { name: "bloodstool", check: false, label: "血便" },
    { name: "nausea", check: false, label: "吐き気" },
    { name: "itch", check: false, label: "皮膚のかゆみ" },
    { name: "swell", check: false, label: "むくみ" },
  ]);
  const [sicks, setSick] = useState([
    { name: "bloodpress", check: false, label: "高血圧" },
    { name: "diabetes", check: false, label: "糖尿病" },
    { name: "fat", check: false, label: "脂質代謝異常" },
    { name: "heart", check: false, label: "心疾患" },
    { name: "arrhythmia", check: false, label: "不整脈" },
    { name: "gout", check: false, label: "痛風" },
    { name: "cancer", check: false, label: "癌" },
    { name: "atopic", check: false, label: "アトピー性皮膚炎" },
    { name: "breath", check: false, label: "喘息" },
    { name: "brain", check: false, label: "脳出血" },
  ]);
  const [medicines, setMedicine] = useState([
    { name: "no", check: false, label: "なし" },
    { name: "yes", check: false, label: "あり" },
  ]);
  const [allergy, setAllergy] = useState([
    { name: "no", check: false, label: "なし" },
    { name: "yes", check: false, label: "あり" },
  ]);
  const [alcohol, setAlcohol] = useState([
    { name: "no", check: false, label: "飲まない" },
    { name: "yes", check: false, label: "飲む" },
  ]);
  const [tabacco, setTabacco] = useState([
    { name: "no", check: false, label: "吸わない" },
    { name: "yes", check: false, label: "吸う" },
  ]);
  const [female, setFemale] = useState([
    { name: "pregnancy", check: false, label: "妊娠中" },
    { name: "feed", check: false, label: "授乳中" },
  ]);

  const handleClick = () => {
    router.push(paths.record.history(params.id));
  };

  return (
    <Box
      sx={{
        height: "97vh",
        p: "10px",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <CheckList title="症状" data={symptoms} setData={setSymptom} />
        <CheckList title="罹患した病気" data={sicks} setData={setSick} />
        <RadioList
          title="服用中の薬剤"
          data={medicines}
          setData={setMedicine}
        />
        <RadioList title="アレルギー" data={allergy} setData={setAllergy} />
        <RadioList title="お酒" data={alcohol} setData={setAlcohol} />
        <RadioList title="たばこ" data={tabacco} setData={setTabacco} />
        <CheckList title="女性のみ" data={female} setData={setFemale} />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button onClick={handleClick} variant="contained" sx={{ mt: "20px" }}>
          保存
        </Button>
      </Box>
    </Box>
  );
};

export default Page;
