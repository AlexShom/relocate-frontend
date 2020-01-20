import React, { useState, useEffect } from "react";
import { Grid, Container } from "semantic-ui-react";
import Viewer from "../components/Viewer";
import SearchCriteria from "../components/SearchCriteria";
import { mapsAPI, postcodesAPI } from "../adapters/API";

const Dashboard = props => {
  //Hooks

  const [selectedFilter, setSelectedFilter] = useState("useRent");
  const [rentValue, setRentValue] = useState(0);
  const [mapLayer, setMapLayer] = useState(null);
  const [allDistricts, setAllDistricts] = useState([]);
  const [useCommuteTime, setUseCommuteTime] = useState(false);
  const [selectedWork, setSelectedWork] = useState(null);

  //Data driven styling

  const [mapFilter, setMapFilter] = useState(["has", "name"]);
  const [mapFillColor, setMapFillColor] = useState([
    "match",
    ["get", "name"],
    "SW3",
    "#fbb03b",
    "#096925"
  ]);

  //Helpers

  const findCorrectDistrict = name => {
    return allDistricts.find(district => district.postcode === name);
  };

  const getMapLayer = () => {
    fetch(mapsAPI)
      .then(resp => resp.json())
      .then(json => json.data)
      .then(json => setMapLayer(json));
  };

  const getPostcodeInfo = () => {
    fetch(postcodesAPI)
      .then(resp => resp.json())
      .then(districts => {
        setAllDistricts(districts);
        return districts.map(district => district.postcode);
      })
      .then(districts => setMapFilter(["in", "name", ...districts]));
  };

  // filter functions

  const filterOutDistricts = () => {
    let array = null;
    if (selectedFilter === "useRent")
      array = allDistricts.filter(district => district.ave_rent <= rentValue);
    if (selectedFilter === "usePrice")
      array = allDistricts.filter(district => district.ave_price <= rentValue);
    if (selectedFilter === "useYield")
      array = allDistricts.filter(district => district.ave_yield <= rentValue);
    const filteredArray = array.map(district => district.postcode);

    setMapFilter(["in", "name", ...filteredArray]);
  };

  //Lifecycle

  useEffect(() => {
    getMapLayer();
    getPostcodeInfo();
  }, []);

  useEffect(() => {
    filterOutDistricts();
  }, [selectedFilter, rentValue]);

  //Render

  return (
    <div className="backBoard">
      <Grid>
        <Grid.Row>
          <Grid.Column name="searchCriteria" width={6}>
            <Container className="gen-box">
              <Container className="gen-box gen-bubble">
                <SearchCriteria
                  rentValue={rentValue}
                  setRentValue={setRentValue}
                  selectedFilter={selectedFilter}
                  setSelectedFilter={setSelectedFilter}
                  useCommuteTime={useCommuteTime}
                  setUseCommuteTime={setUseCommuteTime}
                  selectedWork={selectedWork}
                  setSelectedWork={setSelectedWork}
                />
              </Container>
            </Container>
            <Container className="gen-box">
              <Container className="gen-box gen-bubble">
                List placeholder
              </Container>
            </Container>
          </Grid.Column>

          <Grid.Column name="map" width={10}>
            <Container className="gen-box">
              <Container className="gen-box gen-bubble">
                Map nav buttons
              </Container>
              <Container className="gen-box">
                <Viewer
                  mapFillColor={mapFillColor}
                  setMapFillColor={setMapFillColor}
                  mapFilter={mapFilter}
                  setMapFilter={setMapFilter}
                  mapLayer={mapLayer}
                  selectedFilter={selectedFilter}
                  findCorrectDistrict={findCorrectDistrict}
                  workPoint={selectedWork ? selectedWork.value : {}}
                />
              </Container>
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Dashboard;
