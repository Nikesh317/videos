import React from "react";

const Spinner = (props) => {
  return (
    <div
      className="ui active dimmer"
      style={{ marginTop: "10px", height: "80vh", marginLeft: "15px" }}
    >
      <div className="ui big text loader"> {props.message}</div>
    </div>
  );
};

// this default props is used instead of adding the props in spinner tag in index.js
Spinner.defaultProps = {
  message: "Loading please wait....",
};

export default Spinner;
