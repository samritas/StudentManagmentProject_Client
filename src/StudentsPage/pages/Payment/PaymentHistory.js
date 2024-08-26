import { Box, Typography, Avatar, Tabs, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

function PaymentHistory() {
  return (
    <Box sx={{ p: { xs: 2, md: 4 },  mx: 'auto' }}>
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h5" fontWeight="bold">
          Payment History
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
       
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Transaction Date</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Paid For</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.from({ length: 6 }).map((_, index) => (
                <TableRow key={index}>
                  <TableCell>8/24/2024</TableCell>
                  <TableCell>1000</TableCell>
                  <TableCell>All</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  )
}

export default PaymentHistory
