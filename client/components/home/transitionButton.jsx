import { Box, Typography } from "@mui/material";

const TransitionButton = ({ title, icon, link, isQuestion }) => {
  const unread = 10;
  return (
    <Box
      sx={{
        border: "3px solid black",
        borderRadius: "5px",
        width: "40%",
        minWidth: "308px",
        height: !icon ? "52px" : "auto",
        cursor: "pointer",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          color: "#1C8C42",
          fontSize: "38px",
          fontWeight: "600",
          lineHeight: icon ? "100px" : "auto",
        }}
      >
        {title}
      </Typography>
      {icon && <img src={icon} alt="icon" width="100%" />}
    </Box>
  );
};

export default TransitionButton;
