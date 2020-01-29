// Functions for fetching data from external APIs

import { distanceAPI, timeAPI } from "./API";

export const getSearchResults = input => {
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

export const getDistanceTime = (object, type) => {
  const date = new Date().toISOString();

  let transType = "";
  if (type === "useDriving") transType = "driving";
  if (type === "useCycling") transType = "cycling";
  if (type === "usePublicTransport") transType = "public_transport";
  

  const BODY = {
    arrival_searches: [
      {
        id: "transport to work",
        coords: {
          lat: object.value.geometry.coordinates[1],
          lng: object.value.geometry.coordinates[0]
        },
        transportation: {
          type: transType
        },
        arrival_time: date,
        travel_time: 7200,
        properties: ["coverage", "travel_time_reachable"],
        reachable_postcodes_threshold: 0.5
      }
    ]
  };

  const configObj = {
    method: "POST",
    credentials: "same-origin",
    headers: {
      Accept: "application/json",
      "content-type": "application/json",
      "X-Application-Id": process.env.REACT_APP_DISTANCE_API_ID,
      "X-Api-Key": process.env.REACT_APP_DISTANCE_API_KEY,
      "Accept-Language": "en-GB"
    },
    body: JSON.stringify(BODY)
  };

  return fetch(timeAPI, configObj).then(resp => resp.json());
};
