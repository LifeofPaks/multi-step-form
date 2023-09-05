import React from "react";
import "./Sidebar.scss";
import { NavLink } from "react-router-dom";
import { sidebarData } from "../../data/Data";

const Sidebar = () => {
  return (
    <section className="sidebar">
      {sidebarData.map((item) => (
        <NavLink activeclassname="active" className="link" to={item.link} key={item.id}>
          <span>{item.id}</span>
          <div className="titleWrapper">
            <p>{item.step}</p>
            <h1>{item.action}</h1>
          </div>
        </NavLink>
      ))}
    </section>
  );
};

export default Sidebar;
