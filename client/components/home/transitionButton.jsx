import { Box, Typography } from "@mui/material";

const TransitionButton = ({ title, icon }) => {
  return (
    <Box
      sx={{
        border: "3px solid black",
        borderRadius: "5px",
        width: "40%",
        height: "100%",
        minWidth: "308px",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          color: "#1C8C42",
          fontSize: "38px",
          fontWeight: "600",
        }}
      >
        {title}
      </Typography>
      {icon && <img src={icon} alt="icon" width="100%" />}
    </Box>
  );
};

export default TransitionButton;
