import React from "react";
import { Grid } from "semantic-ui-react";
import RentSlider from "../smallComponents/RentSlider.js";
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
  const changeValueRent = "useRent";
  const changeValuePrice = "usePrice";
  const changeValueYield = "useYield";

  return (
    <Grid>
      <Grid.Column style={{ minWidth: "200px" }}>
        <FilterCheckboxes
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
          message={messageRent}
          changeValue={changeValueRent}
        />
        <FilterCheckboxes
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
          message={messagePrice}
          changeValue={changeValuePrice}
        />
        <FilterCheckboxes
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
          message={messageYield}
          changeValue={changeValueYield}
        />
      </Grid.Column>

      <Grid.Column style={{ minWidth: "200px" }}>
        <RentSlider rentValue={rentValue} setRentValue={setRentValue} />
      </Grid.Column>
      <Grid.Column></Grid.Column>
    </Grid>
  );
};

export default SearchCriteria;
