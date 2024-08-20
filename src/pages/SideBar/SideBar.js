
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Collapse } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import ClassIcon from '@mui/icons-material/Class';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const Sidebar = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [open, setOpen] = React.useState(false);
  const [openAdministration, setOpenAdministration] = React.useState(false);

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
        fontSize:"14px",
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          // backgroundColor: '#002B16', // Sidebar background color
          // color: 'white', // Default text color
        },
      }}
    >
      <List>
      <ListItem button onClick={() => handleNavigation('/dashboard')}>
          <h1 className="text-2xl font-bold mb-6 items-center ">Logo</h1>
        </ListItem>
        <ListItem button onClick={() => handleNavigation('/dashboard')}>
          <ListItemIcon sx={{ color: '#002B16',fontSize:"14px" }}> {/* Icon color */}
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>

        <ListItem button onClick={() => handleNavigation('/ParentInformation')}>
          <ListItemIcon sx={{ color: '#002B16',fontSize:"" }}> {/* Icon color */}
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Parents" />
        </ListItem>

        <ListItem button onClick={() => handleNavigation('/TeachersInformation')}>
          <ListItemIcon sx={{ color: '#002B16' }}> {/* Icon color */}
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Teachers" />
        </ListItem>

        <ListItem button onClick={() => handleNavigation('/studentInformation')}>
          <ListItemIcon sx={{ color: '#002B16' }}> {/* Icon color */}
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Students" />
        </ListItem>

        <ListItem button onClick={handleClick}>
          <ListItemIcon sx={{ color: '#002B16' }}> {/* Icon color */}
            <ClassIcon />
          </ListItemIcon>
          <ListItemText primary="Classroom" />
          {open ? <ExpandLess sx={{ color: '#002B16' }} /> : <ExpandMore sx={{ color: '#002B16' }} />}
        </ListItem>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 4 }} onClick={() => handleNavigation('/class-level-registration')}>
              <ListItemText primary="Class Level Registration" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }} onClick={() => handleNavigation('/evaluation-schedule')}>
              <ListItemText primary="Evaluation Schedule" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }} onClick={() => handleNavigation('/student-list')}>
              <ListItemText primary="Student List" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }} onClick={() => handleNavigation('/payment')}>
              <ListItemText primary="Payment" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }} onClick={() => handleNavigation('/performance')}>
              <ListItemText primary="Performance" />
            </ListItem>
          </List>
        </Collapse>

        <ListItem button onClick={handleClickAdministration}>
          <ListItemIcon sx={{ color: '#002B16' }}> {/* Icon color */}
            <AdminPanelSettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Administration" />
          {openAdministration ? <ExpandLess sx={{ color: '#002B16' }} /> : <ExpandMore sx={{ color: '#002B16' }} />}
        </ListItem>

        <Collapse in={openAdministration} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 4 }} onClick={() => handleNavigation('/deduction')}>
              <ListItemText primary="Deducation" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }} onClick={() => handleNavigation('/update-salary')}>
              <ListItemText primary="Update Salary" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }} onClick={() => handleNavigation('/set-homeroom-teacher')}>
              <ListItemText primary="Set Homeroom Teacher" />
            </ListItem>
          </List>
        </Collapse>

        <ListItem button onClick={() => handleNavigation('/login')}>
          <ListItemIcon sx={{ color: '#002B16' }}> {/* Icon color */}
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
