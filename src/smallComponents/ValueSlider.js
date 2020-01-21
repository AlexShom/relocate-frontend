import React, { Fragment, useEffect } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

const ValueSlider = ({
  value,
  setValue,
  maxValue,
  minValue,
  step,
  usePercent
}) => {
  const percentRentValue = num => {
    return Math.round(num * 10) / 10;
  };

  useEffect(() => {
    setValue((maxValue+minValue)/2);
  }, [maxValue]);

  return (
    <Fragment>
      <div className="checkbox-box">
        <div className="slider-box">
  <h5>{usePercent ? "Filter in %: " : "Filter in GBP: "}{value}</h5>
        </div>
        <br></br>
        <br></br>
        <br></br>

        <InputRange
          step={step}
          maxValue={maxValue}
          minValue={minValue}
          value={percentRentValue(value)}
          onChange={rent => {
            let newRent = percentRentValue(rent);
            setValue(newRent);
          }}
        />
      </div>
    </Fragment>
  );
};
export default ValueSlider;
