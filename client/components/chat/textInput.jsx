import { TextField } from "@mui/material";
import { useRef } from "react";

const TextInput = () => {
  const textRef = useRef();
  return (
    <TextField
      id="outlined-basic"
      sx={{
        width: "100%",
        backgroundColor: "white",
        position: "fixed",
        bottom: 0,
      }}
      ref={textRef}
    />
  );
};

export default TextInput;
