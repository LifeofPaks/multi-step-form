import React, { useState } from "react";
import "./Layout.scss";
import Sidebar from "../Sidebar/Sidebar";
import { Route, Routes, useNavigate } from "react-router-dom";
import Info from "../Pages/Info/Info";
import Plan from "../Pages/Plan/Plan";
import AddOn from "../Pages/AddOn/AddOn";
import Summary from "../Pages/Summary/Summary";

const Layout = () => {
  const [yearlyPlan, setYearlyPlan] = useState(false);

  const navigate = useNavigate();

  const togglePlan = () => {
    setYearlyPlan(!yearlyPlan);
  };

  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <Routes>
          <Route path="info" element={<Info />} />
          <Route
            path="plan"
            element={
              <Plan
                yearlyPlan={yearlyPlan}
                togglePlan={togglePlan}
                navigate={navigate}
              />
            }
          />
          <Route
            path="add-ons"
            element={
              <AddOn
                navigate={navigate}
                yearlyPlan={yearlyPlan}
                togglePlan={togglePlan}
              />
            }
          />

          <Route path="summary" element={<Summary navigate={navigate} />} />
        </Routes>
      </div>
    </div>
  );
};

export default Layout;
