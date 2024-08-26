import React from 'react';
import { Box, Typography, Avatar, Tabs, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

const EvaluationPage = () => {
  return (
    <Box sx={{ p: { xs: 2, md: 4 },  mx: 'auto' }}>
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h5" fontWeight="bold">
          Evaluation
        </Typography>
        <Avatar src="https://via.placeholder.com/40" alt="Profile" />
      </Box>

      {/* Quarter Tabs */}
      <Box display="flex" gap={2} mb={2}>
        {['Quarter 1', 'Quarter 2', 'Quarter 3'].map((quarter, index) => (
           <Button
           key={index}
           variant={index === 0 ? "contained" : "text"}
           color={index === 0 ? "success" : "inherit"}
           sx={{
             backgroundColor: index === 0 ? "rgba(18, 53, 36, 1)" : "white",
           }}
         >
           {quarter}
         </Button>
        ))}
      </Box>

      {/* Evaluation List */}
      <Box>
        <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
          Maths
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Type</TableCell>
                <TableCell>Total</TableCell>
                <TableCell>Result</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.from({ length: 6 }).map((_, index) => (
                <TableRow key={index}>
                  <TableCell>Worksheet 1</TableCell>
                  <TableCell>10</TableCell>
                  <TableCell>7</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default EvaluationPage;
