import React from 'react';
import { Box, Button, Typography, TextField, Grid, MenuItem } from '@mui/material';

const style = {
  width: '100%',
  maxWidth: 900,
  bgcolor: '#ffffff',
  borderRadius: '10px',
  boxShadow: 0,
  p: 4,
  mx: 'auto',
  mt: 5,
};

const buttonStyle = {
  backgroundColor: '#002B16',
  color: '#ffffff',
  '&:hover': {
    backgroundColor: '#004528',
  },
};

export default function Deduction() {
  return (
    <Box sx={style}>
      <Typography variant="h6" component="h2" sx={{ mb: 3, color: '#000000' }}>
        Deducation
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="First Name"
            defaultValue="Primary"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Last Name"
            defaultValue="Test"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Reason For Deduction"
            defaultValue="Monday"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            type="text"
         
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Amount"
            variant="outlined"
            type="number"
           
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Date"
            variant="outlined"
            type="date"
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
      </Grid>
      <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between' }}>
        <Button variant="contained" sx={buttonStyle}>
          Add Now
        </Button>
        <Button variant="outlined" sx={{ color: '#002B16', borderColor: '#002B16' }}>
          Cancel
        </Button>
      </Box>
    </Box>
  );
}
