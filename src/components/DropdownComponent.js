import React, { useState } from "react";
import AsyncSelect from "react-select/async";
import { getSearchResults } from "../adapters/DistanceAPI";

const DropdownComponent = ({ setSelectedWork }) => {
  const [inputValue, setInputValue] = useState("");

  const filterOptions = inputValue => {
    return getSearchResults(inputValue).then(
      results =>
        results.features &&
        results.features.map(result => {
          return {
            label: result.properties.neighbourhood
              ? result.properties.name + ", " + result.properties.neighbourhood
              : result.properties.name,
            value: result
          };
        })
    );
  };

  const loadOptions = inputValue => {
    return filterOptions(inputValue);
  };

  const handleInputChange = newValue => {
    const inputValue = newValue.replace(/\W\ /g, "");
    setInputValue(newValue);
    return inputValue;
  };

  return (
    <div>
      <AsyncSelect
        className="selector"
        placeholder="Work Postcode or address"
        isClearable
        onChange={selection => setSelectedWork(selection)}
        cacheOptions
        loadOptions={loadOptions}
        defaultOptions
        onInputChange={handleInputChange}
      />
    </div>
  );
};
export default DropdownComponent;
