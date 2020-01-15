const jsonfile = require("jsonfile");

const mapData = require("./mapWithRentalsTest.json");
const beds0 = require("./individuals/0_beds_rent.json");
const beds1 = require("./individuals/1_beds_rent.json");
const beds2 = require("./individuals/2_beds_rent.json");
const beds3 = require("./individuals/3_beds_rent.json");
const beds4 = require("./individuals/4_beds_rent.json");
const beds5 = require("./individuals/5_beds_rent.json");
const rentals = require("./rentals.json");

// //

// const bedsArray = [beds0, beds1, beds2, beds3, beds4, beds5]

// const bedsRent = (featureCollection, bedsNum) => {
//   array = featureCollection.map(resp => {
//     if (resp.data) {
//       return { [resp.postcode]: resp.data.long_let.average };
//     } else {
//       return null;
//     }
//   });
//   return {[bedsNum]: cleaner(array)}
// };

// cleaner = (array) => {
//   return array.filter(el => el !== null)
// }

// //

// makeArray = (array) => {
//   const newArray = array.map(collection => bedsRent(collection, array.indexOf(collection)))
//   return (newArray)
// }

// finalObj = makeArray(bedsArray)

// jsonfile.writeFile("/Users/alexshom/Documents/GitHub/relocate/relocate-frontend/src/geoData/rentals.json", finalObj)

const assignRents = (json, array, value) => {
  json.features.map(feature => {
    array[value][value].map(pair => {
      let key = Object.keys(pair)[0];
      // console.log(pair[key])

      if (feature.properties.name === key) {
        feature.properties[`beds${value}Rent`] = pair[key];
      }
      if (!feature.properties[`beds${value}Rent`]) {
        feature.properties[`beds${value}Rent`] = "FIND";
      }
    });
  });
};

const summary = (feature) => {
  count = 0;
  counter = 0
  console.log(feature.properties)
  if (typeof feature.properties[`beds0Rent`] == "number") {
    count += feature.properties[`beds0Rent`];
    ++counter
    console.log("hit 0",feature.properties.name, count, counter)
    
  }
  if (typeof feature.properties[`beds1Rent`] == "number") {
    count += feature.properties[`beds1Rent`];
    ++counter
    console.log("hit 0",feature.properties.name, count, counter)

  }
  if (typeof feature.properties[`beds2Rent`] == "number") {
    count += feature.properties[`beds2Rent`];
    ++counter
    console.log("hit 0",feature.properties.name, count, counter)

  }
  if (typeof feature.properties[`beds3Rent`] == "number") {
    count += feature.properties[`beds3Rent`];
    ++counter
    console.log("hit 0",feature.properties.name, count, counter)

  }
  if (typeof feature.properties[`beds4Rent`] == "number") {
    count += feature.properties[`beds4Rent`];
    ++counter
    console.log("hit 0",feature.properties.name, count, counter)

  }
  return (count/counter)
};

const addMissingRent = (mData, value) => {
  mData.features.map(feature => {
    if (feature.properties[`beds${value}Rent`] === "FIND") {
      let newRent = summary(feature)
      console.log(newRent);
      // feature.properties[`beds${value}Rent`] = {};
    }
  });
};

const runner = () => {
  // console.log(mapData.features.map(feature => feature.properties))
  addMissingRent(mapData, 3);
  // console.log(mapData.features.map(feature => feature.properties));
  // jsonfile.writeFile("/Users/alexshom/Documents/GitHub/relocate/relocate-frontend/src/geoData/mapWithRentalsTest.json", mapData)
};

runner();
