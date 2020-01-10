import React, { useState } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

const Slider = props => {
  const [sliderValue, setsliderValue] = useState(10000);

  return (
    <div>
      <div className="slider-box">
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
      <input type="checkbox"/><label>Over £20 000</label>
    </div>
  );
};
export default Slider;
