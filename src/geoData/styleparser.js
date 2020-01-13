const jsonfile = require("jsonfile");
const json = require("./nocollection.json");


const array = json.features.map(element => {
  return element.properties.name
});

console.log(array)
// const file = '/Users/alexshom/Documents/GitHub/relocate/relocate-frontend/src/geoData/averageRents.json'


jsonfile.writeFile(file, array)