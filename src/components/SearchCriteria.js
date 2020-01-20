import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import ValueSlider from "../smallComponents/ValueSlider.js.js";
import FilterCheckboxes from "./FilterCheckboxes";
import DistanceForm from "./DistanceForm";

const SearchCriteria = ({
  rentValue,
  setRentValue,
  selectedFilter,
  setSelectedFilter,
  useCommuteTime,
  setUseCommuteTime,
  selectedWork,
  setSelectedWork
}) => {
  const messageRent = "Use Average Rent per month to filter";
  const messagePrice = "Use Average Price per sqft to filter";
  const messageYield = "Use Average yield in % to filter";

  const sliderChoice = () => {
    if (selectedFilter === "useRent") {
      return (
        <ValueSlider
          value={rentValue}
          setValue={setRentValue}
          maxValue={4000}
          minValue={0}
        />
      );
    } else if (selectedFilter === "usePrice") {
      return (
        <ValueSlider
          value={rentValue}
          setValue={setRentValue}
          maxValue={2000}
          minValue={0}
        />
      );
    } else {
      return (
        <ValueSlider
          usePercent={true}
          value={rentValue}
          setValue={setRentValue}
          maxValue={8.1}
          minValue={0}
          step={0.1}
        />
      );
    }
  };

  return (
    <Grid>
      <Grid.Column style={{ minWidth: "250px" }}>
        <div className="checkbox-box">
          <FilterCheckboxes
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
            message={messageRent}
            changeValue="useRent"
          />
          <FilterCheckboxes
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
            message={messagePrice}
            changeValue="usePrice"
          />
          <FilterCheckboxes
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
            message={messageYield}
            changeValue="useYield"
          />
        </div>
        {sliderChoice()}
      </Grid.Column>

      <Grid.Column style={{ minWidth: "250px" }}>
        <div className="checkbox-box">
          <DistanceForm
            selectedWork={selectedWork}
            setSelectedWork={setSelectedWork}
            useCommuteTime={useCommuteTime}
            setUseCommuteTime={setUseCommuteTime}
          />
        </div>
      </Grid.Column>
    </Grid>
  );
};

export default SearchCriteria;
