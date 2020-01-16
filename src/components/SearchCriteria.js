import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import ValueSlider from "../smallComponents/ValueSlider.js.js";
import FilterCheckboxes from "./FilterCheckboxes";

const SearchCriteria = ({
  rentValue,
  setRentValue,
  selectedFilter,
  setSelectedFilter
}) => {
  const messageRent = "Use Average Rent per week to filter";
  const messagePrice = "Use Average Price per sqft to filter";
  const messageYield = "Use Average yield in % to filter";

  const sliderChoice = () => {
    if (selectedFilter === "useRent") {
      return (
        <ValueSlider
          value={rentValue}
          setValue={setRentValue}
          maxValue={3000}
          minValue={0}
        />
      );
    } else if (selectedFilter === "usePrice") {
      return (
        <ValueSlider
          value={rentValue}
          setValue={setRentValue}
          maxValue={1500}
          minValue={0}
        />
      );
    } else {
      return (
        <ValueSlider
          usePercent={true}
          value={rentValue}
          setValue={setRentValue}
          maxValue={5}
          minValue={0}
          step={0.1}
        />
      );
    }
  };

  return (
    <Grid>
      <Grid.Column style={{ minWidth: "200px" }}>
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
      </Grid.Column>

      <Grid.Column style={{ minWidth: "200px" }}>{sliderChoice()}</Grid.Column>
    </Grid>
  );
};

export default SearchCriteria;
