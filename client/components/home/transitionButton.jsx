import { Box, Typography } from "@mui/material";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import { useRouter } from "next/navigation";

const TransitionButton = ({ title, icon, link, isQuestion }) => {
  const buttonHight = "100px";
  const unread = 10;
  const router = useRouter();

  const handleClick = () => {
    router.push(link);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          border: "3px solid black",
          borderRadius: "5px",
          width: "40%",
          minWidth: "308px",
          height: !icon ? buttonHight : "auto",
          cursor: "pointer",
        }}
        onClick={handleClick}
      >
        <Box
          sx={{
            display: isQuestion ? "block" : "none",
          }}
        >
          <Typography
            sx={{
              position: "absolute",
              left: "48%",
              bottom: "15%",
              zIndex: "2",
              fontSize: "23px",
              color: "white",
              fontWeight: "bold",
            }}
          >
            {unread}
          </Typography>
          <Brightness1Icon
            sx={{
              position: "absolute",
              left: "calc(48% + 2px)",
              bottom: "calc(15% + 4px )",
              color: "red",
              transform: "scale(2)",
            }}
          />
        </Box>
        <Typography
          sx={{
            color: "#1C8C42",
            fontSize: "50px",
            fontWeight: "600",
            height: icon ? "100px" : buttonHight,
            lineHeight: icon ? "100px" : buttonHight,
          }}
        >
          {title}
        </Typography>
        {icon && <img src={icon} alt="icon" style={{ width: "80%" }} />}
      </Box>
    </>
  );
};

export default TransitionButton;
