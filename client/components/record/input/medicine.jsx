import {
  Button,
  Paper,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";

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

const MedicineInput = () => {};

const Medicine = () => {
  return (
    <ThemeProvider theme={theme}>
      <Paper sx={{ px: "20px", height: "30%" }}>
        <Typography sx={{ fontSize: "25px" }}>処方薬</Typography>
        {/* <Medicine /> */}
        {/* <Button /> */}
      </Paper>
    </ThemeProvider>
  );
};

export default Medicine;
