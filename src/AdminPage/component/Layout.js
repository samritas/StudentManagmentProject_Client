import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../pages/SideBar/SideBar";

const Layout = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <div style={{ flexGrow: 1, padding: "20px", backgroundColor: "#f5f5f5", overflowY: "auto" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
