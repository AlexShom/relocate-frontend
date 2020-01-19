import React, { Fragment, useState } from "react";
import { Checkbox } from "semantic-ui-react";
import WithCallbacks from "./DropdownComponent"

const DistanceForm = props => {
  const results = [{ key: "yo", text: "yoyo", value: "yoyoyo" }];

  return (
    <Fragment>
      <div style={{ paddingBottom: "10px" }}>
        <Checkbox />
        <h4 style={{ display: "inline" }}> Use commute time to filter</h4>
      </div>
      <p>here</p>
      {/* <WithCallbacks/> */}
    </Fragment>
  );
};

export default DistanceForm;
