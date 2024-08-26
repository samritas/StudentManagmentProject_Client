import React from 'react';
import { Box, Typography, Avatar, Button, Grid } from '@mui/material';

const SubjectsPage = () => {
  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h5" fontWeight="bold">Subjects</Typography>
        <Avatar src="https://via.placeholder.com/40" alt="Profile" />
      </Box>

      {/* Subjects List */}
      <Grid container spacing={2} mb={3}>
        {['Maths', 'Physics', 'English'].map((subject, index) => (
          <Grid item xs={4} key={index}>
            <Box
              sx={{
                backgroundColor: ['#E0F7FA', '#E3F2FD', '#FFEBEE'][index],
                borderRadius: 2,
                textAlign: 'center',
                py: 2,
              }}
            >
              <Typography variant="h4" fontWeight="bold">
                {['32', '32', '27'][index]}
              </Typography>
              <Typography variant="body1">{subject}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Upcoming Evaluations */}
      <Box mb={3}>
        <Typography variant="h6" gutterBottom>Upcoming Evaluations</Typography>
        <Box display="flex" justifyContent="space-between">
          {['16 Mar', '17 Mar', '18 Mar', '19 Mar', '20 Mar', '21 Mar'].map((date, index) => (
            <Typography
              key={index}
              sx={{
                color: index === 2 ? '#fff' : 'inherit',
                backgroundColor: index === 2 ? '#388E3C' : 'transparent',
                padding: '4px 8px',
                borderRadius: 1,
              }}
            >
              {date}
            </Typography>
          ))}
        </Box>
      </Box>

      {/* Evaluated Subject */}
      <Box>
        <Typography variant="h6" gutterBottom>Evaluated Subject</Typography>
        <Grid container spacing={2}>
          {Array.from({ length: 3 }).map((_, index) => (
            <Grid item xs={4} key={index} textAlign="center">
              <img src="https://via.placeholder.com/50" alt="Physics" />
              <Typography variant="body2">Physics Level 1</Typography>
              <Typography variant="body2">32/40</Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default SubjectsPage;
