import React, { Fragment } from "react";
import { Checkbox } from "semantic-ui-react";

const FilterCheckboxes = ({
  setFilterBoolean,
  filterBoolean,
  message,
  changeValue
}) => {
  return (
    <div className="checkbox-box">
      {console.log(changeValue)}
      <Checkbox
        onChange={() =>
          setFilterBoolean({
            ...filterBoolean,
            [changeValue]: !filterBoolean[changeValue]
          })
        }
        checked={filterBoolean[changeValue]}
      />
      <h4 style={{ display: "inline" }}> {message}</h4>
    </div>
  );
};

export default FilterCheckboxes;
