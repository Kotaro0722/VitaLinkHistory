import { Typography } from "@mui/material";

const Chat = ({ text, isMine }) => {
  return (
    <Typography
      sx={{
        backgroundColor: !isMine ? "lime" : "white",
        width: "fit-content",
        maxWidth: "600px",
        margin: !isMine ? "0 20px 0 auto" : "0 auto 0 20px",
        fontSize: "30px",
        border: "1px solid" + !isMine ? "green" : "black",
        borderRadius: "26px",
        p: "10px",
        color: "black",
        my: "10px",
      }}
    >
      {text}
    </Typography>
  );
};

export default Chat;
