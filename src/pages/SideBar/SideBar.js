// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// import {
//   Dashboard,
//   People,
//   Class,
//   AdminPanelSettings,
//   ExitToApp,
//   ExpandLess,
//   ExpandMore,
// } from "@mui/icons-material"; // Icons from Material UI

// const Sidebar = () => {
//   const navigate = useNavigate(); // Initialize useNavigate hook
//   const [open, setOpen] = useState(false);
//   const [openAdministration, setOpenAdministration] = useState(false);

//   const handleClick = () => {
//     setOpen(!open);
//   };

//   const handleClickAdministration = () => {
//     setOpenAdministration(!openAdministration);
//   };

//   // Navigation handlers for each menu item
//   const handleNavigation = (path) => {
//     navigate(path);
//   };

//   return (
//     <div className="w-60 bg-white h-full shadow-md">
//       <ul className="flex flex-col text-sm p-4">
//         {/* Dashboard */}
//         <li
//           className="flex items-center p-3 cursor-pointer hover:bg-gray-200"
//           onClick={() => handleNavigation("/dashboard")}
//         >
//           <Dashboard
//             className="text-green-800 mr-4"
//             style={{ fontSize: "20px" }}
//           />
//           <span className="text-gray-800" style={{ fontSize: "14px" }}>
//             Dashboard
//           </span>
//         </li>

//         {/* Parents */}
//         <li
//           className="flex items-center p-3 cursor-pointer hover:bg-gray-200"
//           onClick={() => handleNavigation("/ParentInformation")}
//         >
//           <People
//             className="text-green-800 mr-4"
//             style={{ fontSize: "20px" }}
//           />
//           <span className="text-gray-800" style={{ fontSize: "14px" }}>
//             Parents
//           </span>
//         </li>

//         {/* Teachers */}
//         <li
//           className="flex items-center p-3 cursor-pointer hover:bg-gray-200"
//           onClick={() => handleNavigation("/TeachersInformation")}
//         >
//           <People
//             className="text-green-800 mr-4"
//             style={{ fontSize: "20px" }}
//           />
//           <span className="text-gray-800" style={{ fontSize: "14px" }}>
//             Teachers
//           </span>
//         </li>

//         {/* Students */}
//         <li
//           className="flex items-center p-3 cursor-pointer hover:bg-gray-200"
//           onClick={() => handleNavigation("/studentInformation")}
//         >
//           <People
//             className="text-green-800 mr-4"
//             style={{ fontSize: "20px" }}
//           />
//           <span className="text-gray-800" style={{ fontSize: "14px" }}>
//             Students
//           </span>
//         </li>

//         {/* Classroom - Collapsible */}
//         <li
//           className="flex items-center p-3 cursor-pointer hover:bg-gray-200"
//           onClick={handleClick}
//         >
//           <Class className="text-green-800 mr-4" style={{ fontSize: "20px" }} />
//           <span className="text-gray-800" style={{ fontSize: "14px" }}>
//             Classroom
//           </span>
//           <span className="ml-auto">
//             {open ? (
//               <ExpandLess className="text-green-800" />
//             ) : (
//               <ExpandMore className="text-green-800" />
//             )}
//           </span>
//         </li>

//         {/* Collapsible List for Classroom */}
//         {open && (
//           <ul className="ml-8 space-y-2">
//             <li
//               className="cursor-pointer p-2 hover:bg-gray-200 text-gray-700"
//               onClick={() => handleNavigation("/class-level-registration")}
//               style={{ fontSize: "14px" }}
//             >
//               Class Level Registration
//             </li>
//             <li
//               className="cursor-pointer p-2 hover:bg-gray-200 text-gray-700"
//               onClick={() => handleNavigation("/evaluation-schedule")}
//               style={{ fontSize: "14px" }}
//             >
//               Evaluation Schedule
//             </li>
//             <li
//               className="cursor-pointer p-2 hover:bg-gray-200 text-gray-700"
//               onClick={() => handleNavigation("/student-list")}
//               style={{ fontSize: "14px" }}
//             >
//               Student List
//             </li>
//             <li
//               className="cursor-pointer p-2 hover:bg-gray-200 text-gray-700"
//               onClick={() => handleNavigation("/payment")}
//               style={{ fontSize: "14px" }}
//             >
//               Payment
//             </li>
//             <li
//               className="cursor-pointer p-2 hover:bg-gray-200 text-gray-700"
//               onClick={() => handleNavigation("/performance")}
//               style={{ fontSize: "14px" }}
//             >
//               Performance
//             </li>
//           </ul>
//         )}

//         {/* Administration - Collapsible */}
//         <li
//           className="flex items-center p-3 cursor-pointer hover:bg-gray-200"
//           onClick={handleClickAdministration}
//         >
//           <AdminPanelSettings
//             className="text-green-800 mr-4"
//             style={{ fontSize: "20px" }}
//           />
//           <span className="text-gray-800" style={{ fontSize: "14px" }}>
//             Administration
//           </span>
//           <span className="ml-auto">
//             {openAdministration ? (
//               <ExpandLess className="text-green-800" />
//             ) : (
//               <ExpandMore className="text-green-800" />
//             )}
//           </span>
//         </li>

//         {/* Collapsible List for Administration */}
//         {openAdministration && (
//           <ul className="ml-8 space-y-2">
//             <li
//               className="cursor-pointer p-2 hover:bg-gray-200 text-gray-700"
//               onClick={() => handleNavigation("/deduction")}
//               style={{ fontSize: "14px" }}
//             >
//               Deduction
//             </li>
//             <li
//               className="cursor-pointer p-2 hover:bg-gray-200 text-gray-700"
//               onClick={() => handleNavigation("/update-salary")}
//               style={{ fontSize: "14px" }}
//             >
//               Update Salary
//             </li>
//             <li
//               className="cursor-pointer p-2 hover:bg-gray-200 text-gray-700"
//               onClick={() => handleNavigation("/set-homeroom-teacher")}
//               style={{ fontSize: "14px" }}
//             >
//               Set Homeroom Teacher
//             </li>
//           </ul>
//         )}

//         {/* Logout */}
//         <li
//           className="flex items-center p-3 cursor-pointer hover:bg-gray-200"
//           onClick={() => handleNavigation("/logout")}
//         >
//           <ExitToApp
//             className="text-green-800 mr-4"
//             style={{ fontSize: "20px" }}
//           />
//           <span className="text-gray-800" style={{ fontSize: "14px" }}>
//             Logout
//           </span>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;
// change this into teilwing and give the icons and texts font size 14px
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
          <ListItemIcon sx={{ color: '#002B16' }}> {/* Icon color */}
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
