import React, { Fragment, useEffect } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import { Checkbox } from "semantic-ui-react";

const ValueSlider = ({ value, setValue, maxValue, minValue, step, usePercent }) => {
  const percentRentValue = num => {
    return Math.round(num * 10) / 10;
  };

  useEffect(() => {
    setValue({ ...value, rent: 0 });
  }, [maxValue]);

  return (
    <Fragment>
      <div className="checkbox-box">
        <div className={value.over ? "slider-box disabled" : "slider-box"}>
          <h5>
            {usePercent ? "Filter in %:" : "Filter in GBP:"}
            {value.over ? `${maxValue} and over` : ` ${value.rent} `}
          </h5>
        </div>
        <br></br>
        <br></br>
        <br></br>

        <InputRange
          step={step}
          disabled={value.over}
          maxValue={maxValue}
          minValue={minValue}
          value={percentRentValue(value.rent)}
          onChange={rent => {
            let newRent = percentRentValue(rent);
            setValue({ ...value, rent: newRent });
          }}
        />
        <br></br>
        <Checkbox
          onChange={() => setValue({ ...value, over: !value.over })}
          checked={value.over}
        />
        <h4 style={{ display: "inline" }}> {`${maxValue} and over`}</h4>
        <br></br>
        <br></br>
      </div>
    </Fragment>
  );
};
export default ValueSlider;
