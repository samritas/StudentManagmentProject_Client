import React from "react";
import { Box, Grid, IconButton, Typography, TextField, Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import MenuIcon from "@mui/icons-material/Menu";

const Dashboard = () => {
  return (
    <Box sx={{ padding: 2 }}>
      {/* Header */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={2}
      >
        <div></div>
        <Avatar alt="User Profile" src="profile.jpg" />
      </Box>

      {/* Welcome Section */}
      <Box
      
        sx={{
          backgroundColor: " rgba(18, 53, 36, 1)",
          borderRadius: 2,
          color: "white",
          p: 2,
          mb: 3,
        }}
      >
        <Typography variant="h6">Hello,</Typography>
        <Typography variant="subtitle1">Good Morning</Typography>
        <Box
          display="flex"
          alignItems="center"
          sx={{ backgroundColor: "white", borderRadius: 1, mt: 2 }}
        >
          <TextField
            placeholder="Enter your keyword"
            variant="outlined"
            fullWidth
            sx={{ input: { padding: 1 } }}
          />
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Date Selector */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        {["16 Mar", "17 Mar", "18 Mar", "19 Mar", "20 Mar", "21 Mar"].map((date, index) => (
          <Box
            key={index}
            sx={{
              padding: 1,
              textAlign: "center",
              backgroundColor: index === 2 ? "#0B4620" : "transparent",
              color: index === 2 ? "white" : "black",
              borderRadius: 1,
              width: 50,
            }}
          >
            <Typography variant="body2">{date.split(" ")[0]}</Typography>
            <Typography variant="caption">{date.split(" ")[1]}</Typography>
          </Box>
        ))}
      </Box>

      <div>
      <Typography variant="h6" gutterBottom>
        Upcoming Evaluations
      </Typography>
      
      {/* Parent container for flex layout on large screens */}
      <Box
        sx={{
          display: { xs: "block", lg: "flex" }, // Block on small screens, flex on large screens
          gap: { lg: 2 }, // Add gap between the two boxes on large screens
          mb: 3, // Margin bottom for spacing
        }}
      >
        {/* Upcoming Evaluations */}
        <Box
          sx={{
            border: "1px solid #e0e0e0",
            borderRadius: 1,
            padding: 2,
            flex: { lg: "1" }, // Flex grow on large screens to distribute space evenly
            mb: { xs: 3, lg: 0 }, // Margin bottom on small screens, none on large screens
          }}
        >
          <Typography variant="subtitle2">English</Typography>
          <Typography variant="body1" fontWeight="bold">
            Worksheet 1
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            Working with tenses
          </Typography>
          <Typography variant="caption" display="flex" alignItems="center">
            <SearchIcon fontSize="small" />
            &nbsp; 12 Jan 24, 09:00 AM
          </Typography>
        </Box>

        {/* Upcoming Events */}
        <Box
          sx={{
            border: "1px solid #e0e0e0",
            borderRadius: 1,
            padding: 2,
            flex: { lg: "1" }, // Flex grow on large screens
          }}
        >
          <Typography variant="subtitle2">English</Typography>
          <Typography variant="body1" fontWeight="bold">
            Worksheet 1
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            Working with tenses
          </Typography>
          <Typography variant="caption" display="flex" alignItems="center">
            <SearchIcon fontSize="small" />
            &nbsp; 12 Jan 24, 09:00 AM
          </Typography>
        </Box>
      </Box>
    </div>
    </Box>
  );
};

export default Dashboard;
