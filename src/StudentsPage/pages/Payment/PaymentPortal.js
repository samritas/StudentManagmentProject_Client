import React from "react";
import { Box, Button, Container, Divider, IconButton, MenuItem, Select, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person"; // Replace with your icon
import AccessTimeIcon from "@mui/icons-material/AccessTime"; // Replace with your icon
import Grid from "@mui/material/Grid";

const PaymentPortal = () => {
  return (
    <Box sx={{ p: { xs: 2, md: 4 }, mx: "auto" }}>
      
        <Typography variant="h6" fontWeight="bold" mb={3}>
          Student Payment Portal
        </Typography>
       

      <Box display="flex" gap={2} mb={2}>
        {["Quarter 1", "Quarter 2", "Quarter 3"].map((quarter, index) => (
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

      <Typography variant="body1" sx={{ mt: 2 }}>
        Child name
      </Typography>

      <Box display="flex" alignItems="center" sx={{ mt: 1 }}>
        <Select defaultValue="John Smith" fullWidth>
          <MenuItem value="John Smith">John Smith</MenuItem>
          {/* Add more children as needed */}
        </Select>
        <IconButton>
          <AccessTimeIcon />
        </IconButton>
      </Box>

      {/* Payment Details */}
      <Box sx={{ mt: 2 }}>
        <Divider />
        <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ py: 1 }}>
          <Typography variant="body2">Due Date</Typography>
          <Typography variant="body2">2024/12/06</Typography>
        </Box>
        <Divider />
        <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ py: 1 }}>
          <Typography variant="body2">Amount</Typography>
          <Typography variant="body2">12,000 ETB</Typography>
        </Box>
        <Divider />
        <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ py: 1 }}>
          <Typography variant="body2">Penalty</Typography>
          <Typography variant="body2">N/A</Typography>
        </Box>
        <Divider />
        <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ py: 1 }}>
          <Typography variant="body2">Total</Typography>
          <Typography variant="body2">12,000</Typography>
        </Box>
        <Divider />
      </Box>

      {/* Payment Options */}
      <Box sx={{ mt: 2 }}>
        <Typography variant="body1">Pay With</Typography>
        <Grid container spacing={1} sx={{ mt: 1 }}>
          {/* You can replace these with actual icons or logos */}
          <Grid item xs={4}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                border: "1px solid gray",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="caption">Chapa</Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                border: "1px solid gray",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="caption">Other</Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                border: "1px solid gray",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="caption">Chapa</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Confirm Payment Button */}
      <Box sx={{ mt: 2 }}>
        <Button variant="contained" color="success" fullWidth sx={{backgroundColor:"rgba(18, 53, 36, 1)"}}>
          Confirm Payment
        </Button>
      </Box>
    </Box>
  );
};

export default PaymentPortal;
