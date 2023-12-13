import { Box, Typography } from "@mui/material";

const ChatButton = ({ img, title }) => {
  const handleIconClick = () => {
    console.log("click");
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={img}
        alt="doctor"
        width="70%"
        style={{ cursor: "pointer" }}
        onClick={handleIconClick}
      />
      <Typography
        sx={{ fontSize: "30px", cursor: "pointer" }}
        onClick={handleIconClick}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default ChatButton;
