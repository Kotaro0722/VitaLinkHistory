import { Button, TextField } from "@mui/material";
import { useRef } from "react";

const TextInput = ({ setMessage }) => {
  const textRef = useRef(null);

  const handleSubmit = (message) => {
    console.log(message);
  };

  return (
    <>
      <TextField
        id="outlined-basic"
        sx={{
          // width: "100%",
          backgroundColor: "white",
          position: "fixed",
          bottom: 0,
        }}
        inputRef={textRef}
      />
      <Button
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          backgroundColor: "black",
          color: "white",
          fontSize: "20px",
        }}
        onClick={() => handleSubmit(textRef.current.value)}
      >
        送信
      </Button>
    </>
  );
};

export default TextInput;
