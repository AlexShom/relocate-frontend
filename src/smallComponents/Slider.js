import React, { useState } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import { Checkbox, Label } from "semantic-ui-react";

const Slider = props => {
  const [sliderValue, setsliderValue] = useState(10000);

  return (
    <div className="checkbox-box">
      <div className="slider-box ">
        <h5> Budget in GBP £{sliderValue} /week</h5>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <InputRange
        maxValue={20000}
        minValue={0}
        value={sliderValue}
        onChange={value => setsliderValue(value)}
      />
      <br></br>
      <Checkbox size="small" />
      <h4 style={{ display: "inline" }}> Over £20 000</h4>
    </div>
  );
};
export default Slider;
