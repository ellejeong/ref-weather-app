import React from "react";

const Temperature = ({ temp, minTemp, maxTemp }) => (
  <>
    <div className="temp-main-container">
      <p className="temp-main">{temp}°</p>
    </div>
    <div className="temp-min-max-container">
      <span className="temp-min-max">{minTemp}°</span>
      <span className="temp-min-max">{maxTemp}°</span>
    </div>
  </>
);

export default Temperature;
