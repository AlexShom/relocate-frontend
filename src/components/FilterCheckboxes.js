import React, { Fragment } from "react";
import { Checkbox } from "semantic-ui-react";

const FilterCheckboxes = ({
  setSelectedFilter,
  selectedFilter,
  message,
  changeValue
}) => {
  return (
    <div className="checkbox-box">
      <Checkbox
        onChange={() => setSelectedFilter(changeValue)}
        checked={selectedFilter === changeValue}
      />
      <h4 style={{ display: "inline" }}> {message}</h4>
    </div>
  );
};

export default FilterCheckboxes;
