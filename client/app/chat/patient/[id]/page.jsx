"use client";

import { Box } from "@mui/material";

const Chat = ({ params }) => {
  const id = params.id;
  return (
    <Box>
      <h1>POST:{params.id}</h1>
    </Box>
  );
};

export default Chat;
