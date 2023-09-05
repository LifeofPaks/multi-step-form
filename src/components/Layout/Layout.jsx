import React from "react";
import "./Layout.scss";
import Sidebar from "../Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Info from "../Pages/Info/Info";

const Layout = () => {
  return (
    <div className="layout">
        <Sidebar />

      <div className="main">
        <Routes>
          <Route path="info" element={<Info />} />
        </Routes>
      </div>
    </div>
  );
};

export default Layout;
