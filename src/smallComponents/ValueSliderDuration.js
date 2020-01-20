import React, { Fragment, useEffect } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

const ValueSliderDuration = ({ value, setValue, maxValue, minValue, step }) => {
  useEffect(() => {
    setValue(0);
  }, [maxValue]);

  return (
    <Fragment>
      <div className="checkbox-box">
        <div className="slider-box">
          <h5>Time willing to commute: {value} minutes</h5>
        </div>
        <br></br>
        <br></br>
        <br></br>

        <InputRange
          step={step}
          maxValue={maxValue}
          minValue={minValue}
          value={value}
          onChange={rent => {
            let newRent = rent;
            setValue(newRent);
          }}
        />
      </div>
    </Fragment>
  );
};
export default ValueSliderDuration;
