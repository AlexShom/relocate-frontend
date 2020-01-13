const jsonfile = require("jsonfile");
const json = require("./nocollection.json");

let counter = 0;

json.forEach(element => {
  let file = `/Users/alexshom/Documents/GitHub/relocate/relocate-frontend/src/geoData/individuals/${counter}.json`;
  jsonfile.writeFile(file, element, function(err) {
    if (err) console.error(err);
    console.log(`writing file ${counter}`);
    ++counter;
  });
});
