import React, { Fragment } from "react";
import { Checkbox } from "semantic-ui-react";

const BooleanCheckbox = ({ checked, setter, getter, message, description }) => {
  return (
    <div style={{ display: "inline-blocks", color: "white" }}>
      <span style={{ paddingTop: "10px" }}>
        <Checkbox
          toggle
          size="tiny"
          checked={checked}
          onChange={() => setter(!getter)}
        />
        <h4 style={{ display: "inline" }}> {message}</h4>
      </span>
      <div
        style={{ maxWidth: "200px", paddingBottom: "10px", color: "lightgrey" }}
      >
        <h5>{description}</h5>
      </div>
    </div>
  );
};

export default BooleanCheckbox;
