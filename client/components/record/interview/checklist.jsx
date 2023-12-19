import {
  FormControl,
  FormControlLabel,
  FormGroup,
  Checkbox,
  Typography,
} from "@mui/material";

const CheckList = ({ title, data, setData }) => {
  return (
    <FormControl sx={{ border: "1px solid black" }}>
      <Typography>{title}</Typography>
      <FormGroup sx={{ display: "block", pl: "10px" }}>
        {data.map((datum, index) => {
          const handleChange = () => {
            const newData = data.map((datuma, indexa) =>
              index == indexa
                ? {
                    name: datuma.name,
                    check: !datuma.check,
                    label: datuma.label,
                  }
                : datuma
            );
            setData(newData);
          };
          return (
            <FormControlLabel
              control={
                <Checkbox
                  checked={datum.check}
                  onChange={handleChange}
                  name={datum.name}
                />
              }
              label={datum.label}
              key={index}
            />
          );
        })}
      </FormGroup>
    </FormControl>
  );
};

export default CheckList;
