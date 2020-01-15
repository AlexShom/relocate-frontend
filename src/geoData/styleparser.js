const jsonfile = require("jsonfile");
const valuesTable = require("./propertyJSON.json");
const myCodes = require("./postcodeList.json");
const mapLayerData = require("./mapDataWithValues.json");

// console.log(Object.keys(valuesTable))
// console.log(myCodes)

const result = valuesTable.filter(row => {
  if (myCodes.includes(row.Postcode))
  return row
});

console.log(result);
jsonfile.writeFile('/Users/alexshom/Documents/GitHub/relocate/relocate-frontend/src/geoData/londonPostData.json', result)
