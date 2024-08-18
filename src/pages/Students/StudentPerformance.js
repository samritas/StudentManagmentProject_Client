import React from "react";
import {
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box,
  Pagination,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const StudentPerformance = () => {
  const grades = ["10", "11", "12"];
  const sections = ["A", "B", "C"];
  const subjects = ["Maths", "Physics", "Chemistry"];

  const students = [
    {
      name: "John",
      firstName: "John",
      lastName: "John",
      test1: 10,
      test2: 10,
      test3: 10,
      test4: 10,
      test5: 10,
    },
    {
        name: "John",
        firstName: "John",
        lastName: "John",
        test1: 10,
        test2: 10,
        test3: 10,
        test4: 10,
        test5: 10,
      },
      {
        name: "John",
        firstName: "John",
        lastName: "John",
        test1: 10,
        test2: 10,
        test3: 10,
        test4: 10,
        test5: 10,
      },
    // Add more students as needed
  ];

  return (
    <Box sx={{ padding: 4 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 3,
        }}
      >
        <h2>Student Performance</h2>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <SearchIcon sx={{ marginRight: 1 }} />
          <TextField
            variant="outlined"
            size="small"
            placeholder="Enter student name or class ID"
          />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 3,
        }}
      >
        <FormControl variant="outlined" size="small" sx={{ minWidth: 120 }}>
          <InputLabel>Grade</InputLabel>
          <Select label="Grade" defaultValue="">
            {grades.map((grade) => (
              <MenuItem key={grade} value={grade}>
                {grade}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl variant="outlined" size="small" sx={{ minWidth: 120 }}>
          <InputLabel>Section</InputLabel>
          <Select label="Section" defaultValue="">
            {sections.map((section) => (
              <MenuItem key={section} value={section}>
                {section}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl variant="outlined" size="small" sx={{ minWidth: 120 }}>
          <InputLabel>Subject</InputLabel>
          <Select label="Subject" defaultValue="">
            {subjects.map((subject) => (
              <MenuItem key={subject} value={subject}>
                {subject}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <TableContainer component={Paper}>
        <Table aria-label="student performance table">
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Test 1</TableCell>
              <TableCell>Test 2</TableCell>
              <TableCell>Test 3</TableCell>
              <TableCell>Test 4</TableCell>
              <TableCell>Test 5</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student, index) => (
              <TableRow key={index}>
                <TableCell>{student.firstName}</TableCell>
                <TableCell>{student.lastName}</TableCell>
                <TableCell>{student.test1}</TableCell>
                <TableCell>{student.test2}</TableCell>
                <TableCell>{student.test3}</TableCell>
                <TableCell>{student.test4}</TableCell>
                <TableCell>{student.test5}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box
        sx={{ display: "flex", justifyContent: "space-between", marginTop: 2 }}
      >
        <Button variant="outlined">Previous</Button>
        <Pagination count={10} shape="rounded" />
        <Button variant="outlined">Next</Button>
      </Box>
    </Box>
  );
};

export default StudentPerformance;
