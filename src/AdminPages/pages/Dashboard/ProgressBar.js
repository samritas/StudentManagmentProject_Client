import React from "react";
import { Box, Typography, LinearProgress } from "@mui/material";

const ProgressBar = ({ value }) => {
  return (
    <div>
      <p className="mb-4">Term Completion</p>
    <div class="w-full  rounded-lg bg-gray-400">
      <div
        class="bg-green-800 text-xs font-medium r p-0.5 leading-none rounded-lg"
        style={{width:"45%" , textAlign:"center" ,color:"white"}}
      >
       {`${value}%`}
      </div>
    </div>
    </div>

    // <Box sx={{ width: '100%' }}>
    //   <Typography variant="body1" sx={{ marginBottom: 1 }}>Term Completion</Typography>
    //   <LinearProgress variant="determinate" value={value} />
    //   <Typography variant="body2" sx={{ marginTop: 1, textAlign: 'right' }}>{`${value}%`}</Typography>
    // </Box>
  );
};

export default ProgressBar;
