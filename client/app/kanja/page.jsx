"use client";

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { red } from "@mui/material/colors";

function Copyright(props) {
  
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid item xs={12} sm={20} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 20,
              mx: 4,
              display: "flow",
              flexDirection: "column",
              alignItems: "center",
            }}
            
          >
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <Button
                type="submit"
                size="large"
                variant="contained"
                sx={{ mt: 5,
                   mb: 7,
                   width:"400px",
                   height:"500px",
                   backgroundImage:
                   "url(https://pictogram2.com/p/p0358/i/tn.png)", 
                   backgroundRepeat: "no-repeat",
                  backgroundColor:"white",
                  backgroundPosition:"bottom",
                  backgroundSize:"200px",
                color:"green",
              fontSize:"50px",}}
                 
              >
                患者の記録
              </Button>
              <Button
                type="submit"
                fullWidth
                size="large"
                variant="contained"
                sx={{ mt: 3,
                   mb: 2,
                   width:"400px",
                   height:"100px",
                   backgroundColor:"white",
                   color:"green",
                   fontSize:"30px" }}
                
              >
               患者からの質問

              </Button>
              
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}