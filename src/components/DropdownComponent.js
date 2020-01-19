import React, { useState } from "react";
import AsyncSelect from "react-select/async";

const colourOptions = [
  { name: "hoe", label: "hoe" },
  { value: "hoes", label: "hoes" }
];

const DropdownComponent = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (newValue: string) => {
    setInputValue(newValue);
  };

  const loadOptions = (inputValue, callback) => {
    setTimeout(() => {
      callback(inputValue);
    }, 1000);
  };

  return (
    <div>
      <pre>inputValue: "{inputValue}"</pre>
      <AsyncSelect
        cacheOptions
        loadOptions={loadOptions}
        defaultOptions
        onInputChange={handleInputChange}
      />
    </div>
  );
};

export default DropdownComponent;
