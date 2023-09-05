import React, { useState } from "react";
import "./Plan.scss";
import { plansData } from "../../../data/Data";
import MyPlan from "../MyPlan/MyPlan";

const Plan = ({ yearlyPlan, togglePlan, navigate }) => {
  const [planIndex, setPlanIndex] = useState(0);


  return (
    <div className="plan page">
      <div className="title">
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
      </div>

      <div className="plansWrapper">
        {plansData.map((plan, index) => (
          <MyPlan
            key={plan.id}
            {...plan}
            yearlyPlan={yearlyPlan}
            planIndex={planIndex}
            setPlanIndex={setPlanIndex}
            index={index}
          />
        ))}
      </div>

      <div className="togglePlan">
        <p className={yearlyPlan ? "" : "active"}>Monthly</p>
        <div
          className={`toggler ${yearlyPlan ? "active" : ""}`}
          onClick={togglePlan}
        >
          <span className="track"></span>
        </div>
        <p className={yearlyPlan ? "active" : ""}>Yearly</p>
      </div>

      <div className="buttonWrapper">
        <button className="secondaryBtn" onClick={() => navigate("/info")}>
          Go Back
        </button>
        <button className="primaryBtn">Next Step</button>
      </div>
    </div>
  );
};

export default Plan;
