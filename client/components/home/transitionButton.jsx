import { Box, Typography } from "@mui/material";

const TransitionButton = ({ title, icon, link, isQuestion }) => {
  const buttonHight = "100px";
  const unread = 10;
  return (
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
    >
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
  );
};

export default TransitionButton;
