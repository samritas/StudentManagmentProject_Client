import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  IconButton,
} from "@mui/material";
import DetailsIcon from "@mui/icons-material/Details";
import { useNavigate } from "react-router-dom";
function ReportCard() {
  const navigate = useNavigate();

  const handleDetailClick = () => {
    navigate("/Evaluation"); // Route to the detail page
  };
  return (
    <Box sx={{ p: { xs: 2, md: 4 }, mx: "auto" }}>
      {/* Header */}
      
        <Typography variant="h5" fontWeight="bold" mb={3}>
          Report Card
        </Typography>
       

      {/* Quarter Tabs */}
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

      {/* Evaluation List */}
      <Box>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Subject</TableCell>
                <TableCell>Grade</TableCell>
                <TableCell>detail</TableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.from({ length: 6 }).map((_, index) => (
                <TableRow key={index}>
                  <TableCell>Maths</TableCell>
                  <TableCell>A</TableCell>
                  <TableCell>
                  <IconButton onClick={handleDetailClick}>
                    <DetailsIcon sx={{color:"rgba(18, 53, 36, 1)"}} />
                  </IconButton>
                </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default ReportCard;
