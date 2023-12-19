import {
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

const Symptom = () => {
  return (
    <ThemeProvider theme={theme}>
      <Paper sx={{ px: "20px", height: "30%" }}>
        <Typography sx={{ fontSize: "25px" }}>症状</Typography>
        <TextField
          sx={{
            width: "100%",
            height: "calc(100% - 37.5px - 20px)",
          }}
          multiline
        />
      </Paper>
    </ThemeProvider>
  );
};

export default Symptom;
