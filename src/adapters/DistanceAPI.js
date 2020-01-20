import { distanceAPI } from "./API";

const getSearchResults = input => {
  const configObj = {
    method: "GET",
    credentials: "same-origin",
    headers: {
      Accept: "application/json",
      "X-Application-Id": process.env.REACT_APP_DISTANCE_API_ID,
      "X-Api-Key": process.env.REACT_APP_DISTANCE_API_KEY,
      "Accept-Language": "en-GB"
    }
  };

  return fetch(
    distanceAPI +
      `?query=${input}` +
      "&focus.lat=51.5074&focus.lng=-0.1278&within.country=GBR",
    configObj
  ).then(resp => resp.json());
};

export default getSearchResults;
