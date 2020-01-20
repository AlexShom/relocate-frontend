import React, { Fragment, useState } from "react";
import { Checkbox } from "semantic-ui-react";
import DropdownComponent from "./DropdownComponent";

const DistanceForm = ({
  useCommuteTime,
  setUseCommuteTime,
  setSelectedWork,
  selectedWork
}) => {
  return (
    <Fragment>
      <div style={{ paddingBottom: "10px" }}>
        <Checkbox
          checked={useCommuteTime}
          onChange={() => setUseCommuteTime(!useCommuteTime)}
        />
        <h4 style={{ display: "inline" }}> Use commute time to filter</h4>
      </div>
      {useCommuteTime && (
        <Fragment>
          <div>
            <Checkbox />
            <h4 style={{ display: "inline" }}> Driving</h4>
          </div>
          <div>
            <Checkbox />
            <h4 style={{ display: "inline" }}> Cycling</h4>
          </div>
          <div style={{paddingBottom: "10px"}}>
            <Checkbox />
            <h4 style={{ display: "inline" }}> Public Transport</h4>
          </div>
          {selectedWork && <h4>{selectedWork.label}</h4>}
          <DropdownComponent
            setSelectedWork={setSelectedWork}
            selectedWork={selectedWork}
          />
        </Fragment>
      )}
    </Fragment>
  );
};

export default DistanceForm;
