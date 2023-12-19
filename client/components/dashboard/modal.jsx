import {
  Modal,
  Grid,
  Paper,
  Typography,
  createTheme,
  ThemeProvider,
  Button,
  Box,
} from "@mui/material";
import photo from "@/public/img/personImg.svg";
import questionnaire from "@/public/img/questionnaire.svg";
import chat from "@/public/img/chat.svg";
import medicalRecord1 from "@/public/img/medicalRecord1.svg";
import medicalRecord2 from "@/public/img/medicalRecord2.svg";
import interviewIcon from "@/public/img/interview.svg";
import { Zen_Maru_Gothic } from "next/font/google";
import peke from "@/public/img/peke.svg";
import { useRouter } from "next/navigation";
import { paths } from "@/paths";

const ZenMaruGothic = Zen_Maru_Gothic({
  weight: ["400"],
  preload: false,
});

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          border: "3px solid black",
          borderRadius: "10px",
          fontSize: "40px",
          textAlign: "center",
          backgroundColor: "#0085FF",
          alignItems: "center",
          color: "white",
          padding: "2px",
          display: "flex",
          justifyContent: "center",
          width: "270px",
          height: "100%",
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      },
    },
  },
});

const PatientModal = ({ data, IsActive, index, setIsActive }) => {
  const router = useRouter();
  const handleOnButtonClick = () => {
    setIsActive(false);
  };
  const handleLinkClick = (link) => {
    router.push(link);
  };
  return (
    <Modal open={IsActive}>
      <Paper
        sx={{
          position: "absolute",
          position: "relative",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Grid container direction="row">
          <Grid
            item
            xs={5}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <Typography
              sx={{
                border: "3px solid black",
                borderRadius: "10px",
                backgroundColor: "#0085FF",
                alignItems: "center",
                color: "white",
                padding: "2px",
                fontSize: "40px",
              }}
              className={ZenMaruGothic.className}
            >
              {data[index].name}
            </Typography>
            <img
              src={photo.src}
              alt="img"
              width="400px"
              style={{ border: "3px solid black", borderRadius: "5px" }}
            />
            <Typography
              sx={{
                fontSize: "40px",
              }}
              className={ZenMaruGothic.className}
            >
              {data[index].birth.year}年{data[index].birth.month}月
              {data[index].birth.day}日
            </Typography>
          </Grid>
          <Grid item xs={7} container direction="column">
            <ThemeProvider theme={theme}>
              <Grid item xs={6}>
                <Box
                  sx={{ height: "40%", cursor: "pointer" }}
                  onClick={() =>
                    handleLinkClick(paths.record.interview(data[index].id))
                  }
                >
                  <Typography className={ZenMaruGothic.className}>
                    <img src={questionnaire.src} width="33px" />
                    問診表入力
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box
                  sx={{ height: "40%", cursor: "pointer" }}
                  onClick={() =>
                    handleLinkClick(paths.record.history(data[index].id))
                  }
                >
                  <Typography className={ZenMaruGothic.className}>
                    <img src={questionnaire.src} width="33px" />
                    問診票閲覧
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box
                  sx={{ height: "40%", cursor: "pointer" }}
                  onClick={() =>
                    handleLinkClick(paths.chat.patient(data[index].id))
                  }
                >
                  <Typography className={ZenMaruGothic.className}>
                    <img src={chat.src} width="33px" />
                    チャット
                  </Typography>
                </Box>
              </Grid>
              {/* <Grid item xs={4}>
                <Box
                  sx={{ height: "40%", cursor: "pointer" }}
                  onClick={() =>
                    handleLinkClick(paths.record.input(data[index].id))
                  }
                >
                  <Typography className={ZenMaruGothic.className}>
                    <img src={medicalRecord1.src} width="33px" />
                    カルテ入力
                  </Typography>
                </Box>
              </Grid> */}
              <Grid item xs={6}>
                <Box
                  sx={{ height: "40%", cursor: "pointer" }}
                  onClick={() =>
                    handleLinkClick(paths.record.cooperation(data[index].id))
                  }
                >
                  <Typography className={ZenMaruGothic.className}>
                    <img src={medicalRecord2.src} width="33px" />
                    連携シート
                  </Typography>
                </Box>
              </Grid>
              {/* <Grid item xs={4}>
                <Box
                  sx={{ height: "40%", cursor: "pointer" }}
                  onClick={() =>
                    handleLinkClick(paths.record.output(data[index].id))
                  }
                >
                  <Typography className={ZenMaruGothic.className}>
                    <img src={medicalRecord2.src} width="33px" />
                    カルテ閲覧
                  </Typography>
                </Box>
              </Grid> */}
            </ThemeProvider>
          </Grid>
        </Grid>
        <Button
          sx={{
            position: "absolute",
            top: "5%",
            right: "-30px",
            transform: "translate(-50%, -50%)",
          }}
          onClick={handleOnButtonClick}
        >
          <img src={peke.src} alt="" />
        </Button>
      </Paper>
    </Modal>
  );
};

export default PatientModal;
