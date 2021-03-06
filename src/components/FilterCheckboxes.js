import React from "react";
import { Checkbox } from "semantic-ui-react";

const FilterCheckboxes = ({
  setSelectedFilter,
  selectedFilter,
  message,
  changeValue
}) => {
  return (
    <div style={{ paddingBottom: "10px" }}>
      <Checkbox
        toggle
        onChange={() => setSelectedFilter(changeValue)}
        checked={selectedFilter === changeValue}
      />
      <h4 style={{ display: "inline" }}> {message}</h4>
    </div>
  );
};

export default FilterCheckboxes;
