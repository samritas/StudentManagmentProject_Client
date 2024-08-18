import React, { useState } from "react";
import { Box, Grid, Paper, Tabs, Tab } from "@mui/material";
import Header from "./Header";
import SummaryCard from "./SummaryCard";
import ProgressBar from "./ProgressBar";
import StudentPerformanceGraph from "./StudentPerformanceGraph";
import Calendar from "./Calendar";
import UpcomingEvents from "./UpcomingEvents";
import { Link } from "react-router-dom";
import MenuTabs from "./MenuTabs";

const Dashboard = () => {
  const [date, setDate] = useState(new Date()); // Define the state here
  return (
    <div className="flex flex-col">
      <Header />

      {/* <Tabs value={0} sx={{ marginBottom: 3, padding: 0 }}>
        <Tab label="Quarter 1" />
        <Tab label="Quarter 2" />
        <Tab label="Quarter 3" />
      </Tabs> */}
      <MenuTabs/>

      <Grid container spacing={3}>
        <Grid item xs={3}>
          <SummaryCard title="Total Students" value="2000" />
        </Grid>
        <Grid item xs={3}>
          <SummaryCard title="Total Students" value="2000" />
        </Grid>
        <Grid item xs={3}>
          <SummaryCard title="Total Students" value="2000" />
        </Grid>
        <Grid item xs={3}>
          <ProgressBar value={90} />
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{ marginTop: 3 }}>
        <Grid item xs={6}>
          <StudentPerformanceGraph />
        </Grid>
        <Grid item xs={3}>
          <Calendar
            onChange={setDate}
            value={date}
            tileClassName="your-custom-class" // Add custom class to calendar tiles
          />
        </Grid>
        <Grid item xs={3}>
          <UpcomingEvents />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
