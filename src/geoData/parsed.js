
const array = ['E1','SE1','E1W','SE2','E2','SE3','E3','E1W','SE4','E4','SE5','E5','SE6','E6','SE7','E7','SE8','E8','SE9','E9','SE10','E10','SE11','E11','SE12','E12','SE13','E13','SE14','E14','SE15','E15','SE16','E16','SE17','E17','SE18','E18','SE19','E20','SE20','SE21','WC1','WC1A','WC1B','WC1E','WC1H','WC1N','WC1R','WC1V','WC1X','WC2A','WC2B','WC2E','WC2H','WC2N','WC2R','SW1A','SW1E','SW1H','SW1P','SW1V','SW1W','SW1X','SW1Y','SE22','WC2','SE23','SE24','EC1','EC1R','EC1V','EC1N','EC1Y','EC1M','EC1A','SE25','EC2','EC2A','EC2Y','EC2M','EC2V','EC2R','EC2N','SE26','EC3','EC3A','EC3V','EC3N','EC3M','EC3R','SE27','EC4','EC4A','EC4Y','EC4N','EC4M','EC4V','EC4R','SE28','N1','N1C','SW1','N2','SW2','N3','SW3','N4','N5','SW4','SW5','N6','SW6','N7','SW7','N8','SW8','N9','SW9','N10','SW10','N11','SW11','N12','SW12','N13','SW13','N14','SW14','N15','SW15','N16','SW16','N17','SW17','N18','SW18','N19','SW19','N20','SW20','N21','N22','W1','W1B','W1C','W1D','W1F','W1G','W1H','W1J','W1K','W1S','W1T','W1U','W1W','W2','NW1','W3','NW2','W4','NW3','W5','NW4','W6','NW5','W7','NW6','W8','NW7','W9','NW8','W10','NW9','W11','NW10','W12','NW11','W13','W14']

// let result = []
// features.map(feature => {
//   if (array.includes(feature.properties.name)) {
//     result.push(feature)
//   } 
// })


// console.log(result)

///////////////////////
// const jsonfile = require('jsonfile')
 
// const file = '/Users/alexshom/Documents/GitHub/relocate/relocate-frontend/src/geoData/data.json'
// const obj = {
//   "type": "FeatureCollection",
//   "features": result}
 
// jsonfile.writeFile(file, obj, function (err) {
//   if (err) console.error(err)
// })
///////////////////////

// const datanum = require('./DisJS.json')
// console.log(datanum.features.map(feature => feature.properties.name))

const data = require("./individuals/data.json");
console.log(
  data.map(datum => {
    let key = datum.postcode;
    return {
      [key]: { [datum.bedrooms]: datum.data.long_let.average }
    };
  })
);