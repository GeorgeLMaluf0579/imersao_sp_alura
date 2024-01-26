import React from "react";
import './Sidebar.css';
import SidebarNav from "../SidebarNav/SidebarNav";
import Library from "../Library/Library";

const Sidebar = () => {
  return(
    <div className="sidebar">
      <SidebarNav />
      <Library />
    </div>
  )
}

export default Sidebar