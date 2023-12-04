import React from "react";
import { Modal, Grid, Paper } from "@mui/material";
import Link from "next/link";

const PaientModal = ({ data, IsActive, index }) => {
  return (
    <Modal open={IsActive}>
      <Paper
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Grid container>
          <Grid item>
            <img src="client\public\img\personImg.svg" alt="" />
          </Grid>
          <Grid item>
            <Link href="/">問診表</Link>
            <Link href="/">チャット</Link>
            <Link href="/">カルテ</Link>
            <Link href="/">過去のカルテ</Link>
          </Grid>
        </Grid>
      </Paper>
    </Modal>
  );
};

export default PaientModal;
