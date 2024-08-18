import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const SummaryCard = ({ title, value }) => {
  return (
    <div className='bg-gray-400 rounded-md flex flex-col items-center text-sm font-medium h-16 mx-auto text-gray-700 '>
     <p className=''>
        {title}
      </p>
      <p className=''>
        {value}
      </p>
    </div>
    // <Paper sx={{ padding: 2, textAlign: 'center' }}>
    //   <Typography variant="h6" component="div">
    //     {title}
    //   </Typography>
    //   <Typography variant="h4" component="div" sx={{ marginTop: 1 }}>
    //     {value}
    //   </Typography>
    // </Paper>
  );
};

export default SummaryCard;
