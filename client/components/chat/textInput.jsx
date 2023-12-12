import { Button, TextField, ThemeProvider, createTheme } from "@mui/material";
import { useRef } from "react";

const TextInput = ({ setMessage }) => {
  const textRef = useRef(null);

  const handleSubmit = (message) => {
    setMessage(message);
    textRef.current.value = "";
  };

  return (
    <>
      <TextField
        id="outlined-basic"
        sx={{
          backgroundColor: "white",
          position: "fixed",
          bottom: 20,
          left: 270,
          width: "calc(100% - 250px - 98px - 40px)",
          borderRadius: "40px",
          overflowWrap: "break-word",
          lineHeight: "40px",
          "& fieldset": { border: "none" },
        }}
        inputRef={textRef}
        inputProps={{
          style: { fontSize: "30px", lineHeight: "30px" },
        }}
        multiline
        maxRows={5}
      />
      <Button
        sx={{
          position: "fixed",
          bottom: 27,
          right: 27,
          backgroundColor: "black",
          color: "white",
          fontSize: "20px",
          ":hover": {
            backgroundColor: "black",
          },
        }}
        onClick={() => handleSubmit(textRef.current.value)}
      >
        送信
      </Button>
    </>
  );
};

export default TextInput;
