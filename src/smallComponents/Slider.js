import React, { Fragment } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import { Checkbox } from "semantic-ui-react";

const Slider = ({ rentValue, setrentValue, bedsValue, setbedsValue }) => {
  return (
    <Fragment>
      <div className="checkbox-box">
        <div className={rentValue.over ? "slider-box disabled" : "slider-box"}>
          <h5>
            Budget in GBP:
            {rentValue.over ? " Over £20 000" : ` £${rentValue.rent} /week`}
          </h5>
        </div>
        <br></br>
        <br></br>
        <br></br>

        <InputRange
          disabled={rentValue.over}
          maxValue={20000}
          minValue={0}
          value={rentValue.rent}
          onChange={rent => setrentValue({ ...rentValue, rent })}
        />
        <br></br>
        <Checkbox
          onChange={() => setrentValue({ ...rentValue, over: !rentValue.over })}
          checked={rentValue.over}
        />
        <h4 style={{ display: "inline" }}> Over £20 000</h4>
        <br></br>
        <br></br>

        <div className={bedsValue.over ? "slider-box disabled" : "slider-box"}>
          <h5>
            Number of Bedrooms: {bedsValue.over ? " Over 5" : bedsValue.beds}
          </h5>
        </div>
        <br></br>
        <br></br>
        <br></br>

        <InputRange
          disabled={bedsValue.over}
          maxValue={5}
          minValue={1}
          value={bedsValue.beds}
          onChange={beds => setbedsValue({ ...bedsValue, beds })}
        />
        <br></br>
        <Checkbox
          onChange={() => setbedsValue({ ...bedsValue, over: !bedsValue.over })}
          checked={bedsValue.over}
        />
        <h4 style={{ display: "inline" }}> Over 5</h4>
      </div>
    </Fragment>
  );
};
export default Slider;
