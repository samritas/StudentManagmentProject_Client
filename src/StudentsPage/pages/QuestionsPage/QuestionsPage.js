import React from "react";
import { Box, Typography, Avatar, Button, Grid, Paper } from "@mui/material";

const QuestionsPage = () => {
  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      {/* Header */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <h1 className="text-2xl font-bold mb-6 items-center">All Questions</h1>
        <Avatar src="https://via.placeholder.com/40" alt="Profile" />
      </Box>

      {/* Filter Buttons */}
      <Box display="flex" gap={2} mb={3}>
        <Button
          variant="contained"
          color="success"
          sx={{ backgroundColor: " rgba(18, 53, 36, 1)" }}
        >
          Latest
        </Button>
        <Button variant="outlined" >Answered</Button>
        <Button variant="outlined">Unanswered</Button>
      </Box>

      {/* Questions List */}
      <Grid container spacing={2}>
        {Array.from({ length: 4 }).map((_, index) => (
          <Grid item xs={12} key={index}>
            <Paper
              elevation={1}
              sx={{ p: 2, display: "flex", alignItems: "start", gap: 2 }}
            >
              <Avatar src="https://via.placeholder.com/40" alt="Profile" />
              <Box>
                <Typography variant="h6" fontWeight="bold">
                  What is the size of Venus?
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Abebe, section A
                  <br />
                  Its diameter at its equator is about 7,521 miles (12,104
                  kilometers); its diameter at its equator is about 7,521 miles
                  (12,104 kilometers).
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default QuestionsPage;
