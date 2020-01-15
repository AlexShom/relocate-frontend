import React, { Fragment } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import { Checkbox } from "semantic-ui-react";

const RentSlider = ({ rentValue, setRentValue }) => {
  return (
    <Fragment>
      <div className="checkbox-box">
        <div className={rentValue.over ? "slider-box disabled" : "slider-box"}>
          <h5>
            Budget in GBP:
            {rentValue.over ? " Over £3000" : ` £${rentValue.rent} /week`}
          </h5>
        </div>
        <br></br>
        <br></br>
        <br></br>

        <InputRange
          disabled={rentValue.over}
          maxValue={3000}
          minValue={0}
          value={rentValue.rent}
          onChange={rent => setRentValue({ ...rentValue, rent })}
        />
        <br></br>
        <Checkbox
          onChange={() => setRentValue({ ...rentValue, over: !rentValue.over })}
          checked={rentValue.over}
        />
        <h4 style={{ display: "inline" }}> Over £3000</h4>
        <br></br>
        <br></br>

        
      </div>
    </Fragment>
  );
};
export default RentSlider;
