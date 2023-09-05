import React from "react";
import "./MyPlan.scss";

const MyPlan = ({
  yearlyPlan,
  yearly,
  monthly,
  image,
  title,
  index,
  planIndex,
  setPlanIndex,
}) => {
  return (
    <div
      className={`myPlan ${planIndex == index ? "active" : ""}`}
      onClick={() => setPlanIndex(index)}
    >
      <img src={image} alt="icon" />
      <h3>{title}</h3>
      {yearlyPlan ? <p>${yearly}/yr</p> : <p>${monthly}/mo</p>}
      {yearlyPlan && <span>2 months free</span>}
    </div>
  );
};

export default MyPlan;
