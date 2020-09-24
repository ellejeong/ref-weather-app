import React from "react";

const Zipcode = ({ zipcodeSubmitHandler, updateZipcode }) => (
  <div className="zipcode-container">
    <div id="zipcode-label-container">
      <label>Zip Code:</label>
    </div>
    <input
      className="zipcode-input"
      type="text"
      id="zipcode"
      name="zipcode"
      maxLength="5"
      onChange={(e) => updateZipcode(e.target.value)}
    />
    <button onClick={zipcodeSubmitHandler} className="zipcode-button">
      Update
    </button>
  </div>
);
export default Zipcode;
