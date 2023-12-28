import {
  Typography,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const RadioList = ({ title, data, setData }) => {
  return (
    <FormControl sx={{ border: "1px solid black", p: "5px" }}>
      <Typography>{title}</Typography>
      <RadioGroup sx={{ display: "block", pl: "10px" }}>
        {data.map((datum, index) => {
          return (
            <FormControlLabel
              value={datum.name}
              control={<Radio />}
              label={datum.label}
              key={index}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioList;
