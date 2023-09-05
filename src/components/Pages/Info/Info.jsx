import React from "react";
import "./Info.scss";

const Info = () => {
  return (
    <section className="info ">
      <div className="title">
        <h1>Personal info</h1>
        <p>Please provide your name, email address and phone number</p>
      </div>

      <form>
        <div className="inputWrapper">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="e.g. Stephen King"
            autoComplete="off"
          />
        </div>

        <div className="inputWrapper">
          <label htmlFor="email">Email Address</label>
          <input
            type="text"
            id="email"
            placeholder=" e.g. stephenking@lorem.com"
            autoComplete="off"
          />
        </div>

        <div className="inputWrapper">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            id="phone"
            placeholder="  e.g. +1 234 567 890"
            autoComplete="off"
          />
        </div>

        <button className="primaryBtn">Next Step</button>
      </form>
    </section>
  );
};

export default Info;
