import React from "react";
import { Grid } from "semantic-ui-react";
import Slider from "../smallComponents/Slider";

const SearchCriteria = ({
  rentValue,
  bedsValue,
  setrentValue,
  setbedsValue
}) => {
  return (
    <Grid>
      <Grid.Column style={{ minWidth: "200px" }}>
        <Slider
          bedsValue={bedsValue}
          setbedsValue={setbedsValue}
          rentValue={rentValue}
          setrentValue={setrentValue}
        />
      </Grid.Column>
      <Grid.Column></Grid.Column>
    </Grid>
  );
};

export default SearchCriteria;
