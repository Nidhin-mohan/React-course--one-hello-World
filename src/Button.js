import React from "react";

const Button = ({ title = " default" }) => (
  <div>
    <button className="btn">{title}</button>
  </div>
);

export default Button; 