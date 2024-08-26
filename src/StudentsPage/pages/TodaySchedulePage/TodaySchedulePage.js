import React from "react";
import { Box, Typography, Paper, Grid, Avatar, Button } from "@mui/material";

const TodaySchedulePage = () => {
  return (
    <Box sx={{ p: { xs: 2, md: 4 }, mx: "auto" }}>
      {/* Header */}
      <Box display="flex" flexDirection="column" mb={3}>
        <Typography variant="h5" fontWeight="bold">
          Today
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Jan 12
        </Typography>
      </Box>

      {/* Days of the week */}
      <Box display="flex" gap={2} mb={2}>
        {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day, index) => (
          <Button
            key={index}
            variant={index === 0 ? "contained" : "text"}
            color={index === 0 ? "success" : "inherit"}
            sx={{
              backgroundColor: index === 0 ? "rgba(18, 53, 36, 1)" : "white",
            }}
          >
            {day}
          </Button>
        ))}
      </Box>

      {/* Schedule List */}
      <Grid container spacing={2}>
        {[
          {
            time: "09:00am - 09:45am",
            subject: "Mathematics",
            teacher: "John Doe",
            period: "Period 2",
          },
          {
            time: "09:45am - 10:30am",
            subject: "Mathematics",
            teacher: "John Doe",
            period: "Period 2",
          },
          { time: "10:30am - 11:00am", subject: "Lunch Break", emoji: "🥕" },
          {
            time: "11:00am - 11:45am",
            subject: "Mathematics",
            teacher: "John Doe",
            period: "Period 2",
          },
          {
            time: "11:45am - 12:30pm",
            subject: "Social Study",
            teacher: "John Doe",
            period: "Period 5",
          },
        ].map((item, index) => (
          <Grid item xs={12} key={index}>
            <Paper
              elevation={1}
              sx={{
                p: 2,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box>
                <Typography variant="h6" fontWeight="bold">
                  {item.subject}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {item.time}
                </Typography>
                {item.teacher && (
                  <Typography variant="body2" color="textSecondary">
                    {item.teacher}
                  </Typography>
                )}
              </Box>
              <Box>
                {item.period ? (
                  <Typography variant="caption" color="textSecondary">
                    {item.period}
                  </Typography>
                ) : (
                  <Typography variant="h4">{item.emoji}</Typography>
                )}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TodaySchedulePage;
