import React from "react";
import "./AddOn.scss";
import { addOnData } from "../../../data/Data";
import AddOnOption from "../AddOnOption/AddOnOption";

const AddOn = ({ navigate, yearlyPlan, togglePlan }) => {
  return (
    <div className="addOn">
      <div className="title">
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
      </div>

      <div className="contentWrapper">
        {addOnData.map((item) => (
          <AddOnOption
            key={item.id}
            {...item}
            yearlyPlan ={yearlyPlan}
            togglePlan ={togglePlan}
          />
        ))}
      </div>

      <div className="buttonWrapper">
        <button className="secondaryBtn" onClick={() => navigate("/plan")}>
          Go Back
        </button>
        <button className="primaryBtn">Next Step</button>
      </div>
    </div>
  );
};

export default AddOn;
