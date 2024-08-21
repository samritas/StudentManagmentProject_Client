import React from "react";
import {
  Grid,
  Box,
  TextField,
  Button,
  Typography,
  Avatar,
} from "@mui/material";
import youngWomen from "../../assets/images/young_woman_sitting_in_front_of_laptop_and_having_an_idea.png"
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const goToLoginPage = () => {
    // Navigate to the /about route
    navigate('/');}
  return (
    <Grid container sx={{ height: "100vh" }}>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          backgroundColor: "#002B16", // Dark green background
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 4,
        }}
      >
        <Box
          component="img"
          src={youngWomen}
          alt="Placeholder"
          sx={{ width: "50%", marginBottom: 2 }}
         
        />
        <Typography variant="h6" color="white" sx={{ marginBottom: 1 }}>
          New here?
        </Typography>
        <Typography
          variant="body1"
          color="white"
          align="center"
          sx={{ marginBottom: 2 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          porta condimentum hendrerit.
        </Typography>
        <Button
          variant="contained"
          sx={{ backgroundColor: "white", color: "black", width:"100%"}}
          onClick={goToLoginPage}
        >
          SignUp
        </Button>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 4,
        }}
      >
        <TextField
          variant="outlined"
          label="Enter your Schoolname"
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <TextField
          variant="outlined"
          label="Enter your name"
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <TextField
          variant="outlined"
          label="Enter your Password"
          type="password"
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#002B16", // Dark green button
            color: "white",
            marginBottom: 2,
          }}
        >
          Login
        </Button>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
