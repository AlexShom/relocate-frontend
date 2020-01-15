import React, { Fragment } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import { Checkbox } from "semantic-ui-react";

const ValueSlider = ({ value, setValue, messageOver }) => {
  return (
    <Fragment>
      <div className="checkbox-box">
        <div className={value.over ? "slider-box disabled" : "slider-box"}>
          <h5>
            Budget in GBP:
            {value.over ? ` ${messageOver}` : ` £${value.rent} `}
          </h5>
        </div>
        <br></br>
        <br></br>
        <br></br>

        <InputRange
          disabled={value.over}
          maxValue={3000}
          minValue={0}
          value={value.rent}
          onChange={rent => setValue({ ...value, rent })}
        />
        <br></br>
        <Checkbox
          onChange={() => setValue({ ...value, over: !value.over })}
          checked={value.over}
        />
        <h4 style={{ display: "inline" }}> {messageOver}</h4>
        <br></br>
        <br></br>
      </div>
    </Fragment>
  );
};
export default ValueSlider;
