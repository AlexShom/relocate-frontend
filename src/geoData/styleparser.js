const jsonfile = require("jsonfile");
// const list = require("./postcodeList.json");
const fetch = require("node-fetch");

// `https://api.propertydata.co.uk/rents?key=Y4U1F6RMFG&postcode=${code}&bedrooms=2`

const getData = () => {
  return new Promise((resolve, reject) => {
    // const list = require("./postcodeList.json");
    const list = ["E10", "E11"];

    const promiseArr = list.map(i => {
      return fetchData(i);
    });

    resolve(Promise.all(promiseArr));
  });
};

const fetchData = code => {
  const url = `https://api.propertydata.co.uk/rents?key=Y4U1F6RMFG&postcode=${code}&bedrooms=1`;
  return new Promise(resolve => {
    return fetch(url)
      .then(resp => resp.json())
      .then(data => {
        console.log(`starting item ${data.postcode}`);
        setTimeout(() => {
          resolve(data);
        }, 3000);
      })
      .catch(error => console.log(error));
  });
};

const writeData = array => {
  let file =
    "/Users/alexshom/Documents/GitHub/relocate/relocate-frontend/src/geoData/individuals/1_beds_rent.json";
  jsonfile.writeFile(file, array);
};

const runner = async () => {
  const array = await getData();
  console.log("writing to json:", array);
  writeData(array);
};

runner();
