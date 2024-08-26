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

export default function EvaluationScheduleForm() {
  return (
    <Box sx={style}>
      <h1 className="text-2xl font-bold mb-6" > Evaluation Schedule</h1>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            select
            label="Class Level"
            defaultValue="10"
            variant="outlined"
          >
            <MenuItem value="10">10</MenuItem>
            <MenuItem value="11">11</MenuItem>
            <MenuItem value="12">12</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            select
            label="Section"
            defaultValue="A"
            variant="outlined"
          >
            <MenuItem value="A">A</MenuItem>
            <MenuItem value="B">B</MenuItem>
            <MenuItem value="C">C</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            select
            label="Subject"
            defaultValue="Maths"
            variant="outlined"
          >
            <MenuItem value="Maths">Maths</MenuItem>
            <MenuItem value="Physics">Physics</MenuItem>
            <MenuItem value="Chemistry">Chemistry</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            select
            label="Quarter Level"
            defaultValue="Term 1"
            variant="outlined"
          >
            <MenuItem value="Term 1">Term 1</MenuItem>
            <MenuItem value="Term 2">Term 2</MenuItem>
            <MenuItem value="Term 3">Term 3</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Evaluation Level"
            defaultValue="Primary"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Evaluation Type"
            defaultValue="Test"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            select
            label="Day"
            defaultValue="Monday"
            variant="outlined"
          >
            <MenuItem value="Monday">Monday</MenuItem>
            <MenuItem value="Tuesday">Tuesday</MenuItem>
            <MenuItem value="Wednesday">Wednesday</MenuItem>
            <MenuItem value="Thursday">Thursday</MenuItem>
            <MenuItem value="Friday">Friday</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Date"
            defaultValue="10/10/2023"
            variant="outlined"
            type="date"
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Start Time"
            defaultValue="10/10/2023"
            variant="outlined"
            type="datetime-local"
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="End Time"
            defaultValue="10/10/2023"
            variant="outlined"
            type="datetime-local"
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
