import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Box,
  TextField,
  Button,
  Typography,
  Avatar,
} from "@mui/material";
import youngWomen from "../../assets/images/young_woman_sitting_in_front_of_laptop_and_having_an_idea.png"

const SignUpPage = () => {
  const navigate = useNavigate();
 const handlesignuponclick=()=>{
      navigate('/login')
 }
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
         Welcome Back
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
          sx={{ backgroundColor: "white", color: "black" ,width:"100%" }}
          onClick={handlesignuponclick}
        >
          Sign In
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
          Sign Up
        </Button>
      </Grid>
    </Grid>
  );
};

export default SignUpPage;
