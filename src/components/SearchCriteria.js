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
  const messageOver = `Over ${rentValue.rent}`;


  return (
    <Grid>
      <Grid.Column style={{ minWidth: "200px" }}>
        <FilterCheckboxes
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
          message={messageRent}
          changeValue={"useRent"}
        />
        <FilterCheckboxes
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
          message={messagePrice}
          changeValue={"usePrice"}
        />
        <FilterCheckboxes
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
          message={messageYield}
          changeValue={"useYield"}
        />
      </Grid.Column>

      <Grid.Column style={{ minWidth: "200px" }}>
        <ValueSlider
          value={rentValue}
          setValue={setRentValue}
          messageOver={messageOver}
        />
      </Grid.Column>
      <Grid.Column></Grid.Column>
    </Grid>
  );
};

export default SearchCriteria;
