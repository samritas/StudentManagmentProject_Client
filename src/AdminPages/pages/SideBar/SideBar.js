import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import ClassIcon from "@mui/icons-material/Class";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ScheduleIcon from "@mui/icons-material/Schedule";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PaymentIcon from "@mui/icons-material/Payment";

const Sidebar = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [open, setOpen] = useState(false);
  const [openAdministration, setOpenAdministration] = useState(false);
  const [student, IsStudent] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClickAdministration = () => {
    setOpenAdministration(!openAdministration);
  };

  // Navigation handlers for each menu item
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        fontSize: "14px",
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
          // backgroundColor: '#002B16', // Sidebar background color
          // color: 'white', // Default text color
        },
      }}
    >
      <List>
        <ListItem button onClick={() => handleNavigation("/dashboard")}>
          <h1 className="text-2xl font-bold mb-6 items-center">Logo</h1>
        </ListItem>
      </List>
      {!student ? (
        <List>
          <ListItem button onClick={() => handleNavigation("/dashboard")}>
            <ListItemIcon sx={{ color: "#002B16", fontSize: "14px" }}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>

          <ListItem
            button
            onClick={() => handleNavigation("/ParentInformation")}
          >
            <ListItemIcon sx={{ color: "#002B16" }}>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Parents" />
          </ListItem>

          <ListItem
            button
            onClick={() => handleNavigation("/TeachersInformation")}
          >
            <ListItemIcon sx={{ color: "#002B16" }}>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Teachers" />
          </ListItem>

          <ListItem
            button
            onClick={() => handleNavigation("/studentInformation")}
          >
            <ListItemIcon sx={{ color: "#002B16" }}>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Students" />
          </ListItem>

          <ListItem button onClick={handleClick}>
            <ListItemIcon sx={{ color: "#002B16" }}>
              <ClassIcon />
            </ListItemIcon>
            <ListItemText primary="Classroom" />
            {open ? (
              <ExpandLess sx={{ color: "#002B16" }} />
            ) : (
              <ExpandMore sx={{ color: "#002B16" }} />
            )}
          </ListItem>

          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                button
                sx={{ pl: 4 }}
                onClick={() => handleNavigation("/class-level-registration")}
              >
                <ListItemText primary="Class Level Registration" />
              </ListItem>
              <ListItem
                button
                sx={{ pl: 4 }}
                onClick={() => handleNavigation("/evaluation-schedule")}
              >
                <ListItemText primary="Evaluation Schedule" />
              </ListItem>

              {/* <ListItem button sx={{ pl: 4 }} onClick={() => handleNavigation('/payment')}>
              <ListItemText primary="Payment" />
            </ListItem> */}
              <ListItem
                button
                sx={{ pl: 4 }}
                onClick={() => handleNavigation("/performance")}
              >
                <ListItemText primary="Performance" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={handleClickAdministration}>
            <ListItemIcon sx={{ color: "#002B16" }}>
              <AdminPanelSettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Administration" />
            {openAdministration ? (
              <ExpandLess sx={{ color: "#002B16" }} />
            ) : (
              <ExpandMore sx={{ color: "#002B16" }} />
            )}
          </ListItem>

          <Collapse in={openAdministration} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                button
                sx={{ pl: 4 }}
                onClick={() => handleNavigation("/deduction")}
              >
                <ListItemText primary="Deduction" />
              </ListItem>
              <ListItem
                button
                sx={{ pl: 4 }}
                onClick={() => handleNavigation("/update-salary")}
              >
                <ListItemText primary="Update Salary" />
              </ListItem>
              <ListItem
                button
                sx={{ pl: 4 }}
                onClick={() => handleNavigation("/set-homeroom-teacher")}
              >
                <ListItemText primary="Set Homeroom Teacher" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={() => handleNavigation("/login")}>
            <ListItemIcon sx={{ color: "#002B16" }}>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      ) : (
        // The 'else' part - what to display when student is true
        <List>
          <ListItem button onClick={() => handleNavigation("/student-home")}>
            <ListItemIcon sx={{ color: "#002B16", fontSize: "14px" }}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>

          <ListItem button onClick={() => handleNavigation("/Subjects")}>
            <ListItemIcon sx={{ color: "#002B16" }}>
              <MenuBookIcon />
            </ListItemIcon>
            <ListItemText primary="Subjects" />
          </ListItem>

          <ListItem button onClick={() => handleNavigation("/Questions")}>
            <ListItemIcon sx={{ color: "#002B16" }}>
              <HelpOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="Questions" />
          </ListItem>

          <ListItem button onClick={() => handleNavigation("/Today-Schedule")}>
            <ListItemIcon sx={{ color: "#002B16" }}>
              <ScheduleIcon />
            </ListItemIcon>
            <ListItemText primary="Today-Schedule" />
          </ListItem>

          <ListItem button onClick={() => handleNavigation("/Report-card")}>
            <ListItemIcon sx={{ color: "#002B16" }}>
              <CreditCardIcon />
            </ListItemIcon>
            <ListItemText primary="Report Card" />
          </ListItem>
          <ListItem button onClick={() => handleNavigation("/Payment")}>
            <ListItemIcon sx={{ color: "#002B16" }}>
              <PaymentIcon />
            </ListItemIcon>
            <ListItemText primary="Payment" />
          </ListItem>
          <ListItem button onClick={() => handleNavigation("/Payment-history")}>
            <ListItemIcon sx={{ color: "#002B16" }}>
              <PaymentIcon />
            </ListItemIcon>
            <ListItemText primary="Payment History" />
          </ListItem>

          {/* <ListItem button onClick={handleClick}>
            <ListItemIcon sx={{ color: "#002B16" }}>
              <ClassIcon />
            </ListItemIcon>
            <ListItemText primary="Classroom" />
            {open ? (
              <ExpandLess sx={{ color: "#002B16" }} />
            ) : (
              <ExpandMore sx={{ color: "#002B16" }} />
            )}
          </ListItem> */}

          {/* <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                button
                sx={{ pl: 4 }}
                onClick={() => handleNavigation("/class-level-registration")}
              >
                <ListItemText primary="Class Level Registration" />
              </ListItem>
              <ListItem
                button
                sx={{ pl: 4 }}
                onClick={() => handleNavigation("/evaluation-schedule")}
              >
                <ListItemText primary="Evaluation Schedule" />
              </ListItem>

             
              <ListItem
                button
                sx={{ pl: 4 }}
                onClick={() => handleNavigation("/performance")}
              >
                <ListItemText primary="Performance" />
              </ListItem>
            </List>
          </Collapse> */}

          {/* <ListItem button onClick={handleClickAdministration}>
            <ListItemIcon sx={{ color: "#002B16" }}>
              <AdminPanelSettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Administration" />
            {openAdministration ? (
              <ExpandLess sx={{ color: "#002B16" }} />
            ) : (
              <ExpandMore sx={{ color: "#002B16" }} />
            )}
          </ListItem> */}

          {/* <Collapse in={openAdministration} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                button
                sx={{ pl: 4 }}
                onClick={() => handleNavigation("/deduction")}
              >
                <ListItemText primary="Deduction" />
              </ListItem>
              <ListItem
                button
                sx={{ pl: 4 }}
                onClick={() => handleNavigation("/update-salary")}
              >
                <ListItemText primary="Update Salary" />
              </ListItem>
              <ListItem
                button
                sx={{ pl: 4 }}
                onClick={() => handleNavigation("/set-homeroom-teacher")}
              >
                <ListItemText primary="Set Homeroom Teacher" />
              </ListItem>
            </List>
          </Collapse> */}

          {/* <ListItem button onClick={() => handleNavigation("/login")}>
            <ListItemIcon sx={{ color: "#002B16" }}>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem> */}
        </List>
      )}
    </Drawer>
  );
};

export default Sidebar;
