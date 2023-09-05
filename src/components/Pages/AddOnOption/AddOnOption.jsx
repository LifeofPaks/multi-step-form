import React, { useState } from "react";
import "./AddOnOption.scss";
import CheckBoxImage from "../../../images/icon-checkmark.svg";

const AddOnOption = ({
  title,
  plan,
  monthly,
  yearly,
  yearlyPlan,
}) => {
  const [isChecked, setIsChecked] = useState(false);


  return (
    <div className="addOnOption">
      <div
        className={`content ${
          isChecked ? 'active' : ''
        }`}
        onClick={() => setIsChecked(!isChecked)}
      >
        <div className="left">
          <div className={`checkBox ${isChecked ? "active" : ""}`}>
            {isChecked && <img src={CheckBoxImage} alt="icon" />}
          </div>

          <div className="desc">
            <h3> {title}</h3>
            <p>{plan}</p>
          </div>
        </div>
        <div className="right">
          {yearlyPlan ? <p>+${yearly}/yr</p> : <p>+${monthly}/mo</p>}
        </div>
      </div>
    </div>
  );
};

export default AddOnOption;
