import * as React from 'react';
import { Box, Button, Typography, Modal, TextField, Grid, IconButton } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#ffffff',  // White background for contrast
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
//   border: '2px solid #002B16',  // Adding a border with the theme color
};

const buttonStyle = {
  backgroundColor: '#002B16',
  color: '#ffffff',
  '&:hover': {
    backgroundColor: '#004528',
  },
};

export default function AddStudent({ open, handleClose }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="add-student-modal-title"
      aria-describedby="add-student-modal-description"
    >
      <Box sx={style}>
        <Typography id="add-student-modal-title" variant="h6" component="h2" sx={{ mb: 2, color: '#002B16' }}>
          Add Student
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <IconButton color="primary" aria-label="upload picture" component="label">
              <input hidden accept="image/*" type="file" />
              <PhotoCamera sx={{ color: '#002B16' }} />
            </IconButton>
            <Typography variant="body2">Upload Photo</Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="First Name" variant="outlined" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Last Name" variant="outlined" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Class Level" variant="outlined" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Class Section (optional)" variant="outlined" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Parent A Name" variant="outlined" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Parent B Name" variant="outlined" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Parent A Email" variant="outlined" type="email" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Parent B Email" variant="outlined" type="email" />
          </Grid>
        </Grid>
        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="contained" sx={buttonStyle} onClick={handleClose}>
            Add Now
          </Button>
          <Button variant="outlined" sx={{ color: '#002B16', borderColor: '#002B16' }} onClick={handleClose}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
