import { Typography } from "@mui/material";

const chat = ({ text, isMine }) => {
  return (
    <Typography
      sx={{
        backgroundColor: isMine ? "green" : "white",
      }}
    >
      {text}
    </Typography>
  );
};

export default chat;
