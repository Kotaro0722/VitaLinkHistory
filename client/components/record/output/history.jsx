import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionSummary,
  Typography,
  Box,
  AccordionDetails,
} from "@mui/material";

const History = ({ data }) => {
  return (
    <Box
      sx={{
        overflowY: "scroll",
        msOverflowStyle: "none",
        maxHeight: "473px",
        "::-webkit-scrollbar": { display: "none" },
      }}
    >
      {data.map((datum, index) => {
        return (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography>
                {datum.date.year}年{datum.date.month}月{datum.date.day}日
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ display: "flex" }}>
                <Typography>症状：</Typography>
                <Typography sx={{ ml: "10px" }}>{datum.symptom}</Typography>
              </Box>
              <Box>
                <Typography>処方薬</Typography>
                {datum.medicine.map((drug, index) => {
                  return (
                    <Box key={index} sx={{ display: "flex" }}>
                      <Typography sx={{ textIndent: "1em" }}>
                        {drug.name},
                      </Typography>
                      <Typography>一日服用量：{drug.amount},</Typography>
                      <Typography>タイミング：{drug.timing}</Typography>
                      {drug.note && (
                        <Typography>特記事項：{drug.note}</Typography>
                      )}
                    </Box>
                  );
                })}
              </Box>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
};

export default History;
