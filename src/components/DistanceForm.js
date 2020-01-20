import React, { Fragment, useState } from "react";
import { Checkbox } from "semantic-ui-react";
import DropdownComponent from "./DropdownComponent";
import FilterCheckboxes from "./FilterCheckboxes";
import ValueSliderDuration from "../smallComponents/ValueSliderDuration";

const DistanceForm = ({
  useCommuteTime,
  setUseCommuteTime,
  setSelectedWork,
  selectedWork,
  setTransportType,
  transportType,
  travelDuration,
  setTravelDuration
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
          <FilterCheckboxes
            selectedFilter={transportType}
            setSelectedFilter={setTransportType}
            message="Driving"
            changeValue="useDriving"
          />
          <FilterCheckboxes
            selectedFilter={transportType}
            setSelectedFilter={setTransportType}
            message="Cycling"
            changeValue="useCycling"
          />
          <FilterCheckboxes
            selectedFilter={transportType}
            setSelectedFilter={setTransportType}
            message="Public Transport"
            changeValue="usePublicTransport"
          />
          {selectedWork && <h4>{selectedWork.label}</h4>}
          <DropdownComponent
            setSelectedWork={setSelectedWork}
            selectedWork={selectedWork}
          />
          <ValueSliderDuration
            value={travelDuration}
            setValue={setTravelDuration}
            maxValue={120}
            minValue={0}
          />
        </Fragment>
      )}
    </Fragment>
  );
};

export default DistanceForm;
