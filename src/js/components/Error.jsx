import React from "react";

const Error = ({ error }) => (
  <div>
    <h1>Oops! Something went wrong...</h1>
    <p>{error}</p>
    <p>Please refresh to reload app</p>
  </div>
);

export default Error;
