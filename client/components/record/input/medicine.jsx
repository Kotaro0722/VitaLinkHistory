import {
  Box,
  Button,
  MenuItem,
  Paper,
  Select,
  TextField,
  InputLabel,
  ThemeProvider,
  Typography,
  createTheme,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Input,
} from "@mui/material";

const MedicineInput = () => {
  const medicineAmount = [1, 2, 3, 4];

  const theme = createTheme({
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          input: {
            padding: "5px",
          },
        },
      },
      MuiFormControl: {
        styleOverrides: {
          root: {
            display: "block",
          },
        },
      },
    },
  });
  return (
    <Box sx={{ border: "1px solid black", p: "10px", borderRadius: "20px" }}>
      <ThemeProvider theme={theme}>
        <FormControl>
          <InputLabel>処方薬名</InputLabel>
          <Input />
        </FormControl>
        <FormControl>
          <FormLabel sx={{ mr: "5px" }}>一日服用量</FormLabel>
          <Select defaultValue={""}>
            {medicineAmount.map((amount, index) => {
              return (
                <MenuItem value={amount} key={index}>
                  {amount}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>服用のタイミング</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <FormControlLabel value="食前" control={<Radio />} label="食前" />
            <FormControlLabel value="食間" control={<Radio />} label="食間" />
            <FormControlLabel value="食後" control={<Radio />} label="食後" />
            <FormControlLabel
              value="就寝前"
              control={<Radio />}
              label="就寝前"
            />
          </RadioGroup>
        </FormControl>
      </ThemeProvider>
    </Box>
  );
};

const Medicine = () => {
  const theme = createTheme({
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            height: "100%",
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper sx={{ px: "20px", height: "30%" }}>
        <Typography sx={{ fontSize: "25px" }}>処方薬</Typography>
        <MedicineInput />
        {/* <Button /> */}
      </Paper>
    </ThemeProvider>
  );
};

export default Medicine;
