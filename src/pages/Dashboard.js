import React, { useState, useEffect, Fragment } from "react";
import { Grid, Container, Modal, Header, Loader } from "semantic-ui-react";
import Viewer from "../components/Viewer";
import SearchCriteria from "../components/SearchCriteria";
import { mapsAPI, postcodesAPI } from "../adapters/API";
import { getDistanceTime } from "../adapters/DistanceAPI";

const Dashboard = props => {
  //Hooks

  const [selectedFilter, setSelectedFilter] = useState("useRent");
  const [rentValue, setRentValue] = useState(0);
  const [mapLayer, setMapLayer] = useState(null);
  const [allDistricts, setAllDistricts] = useState([]);
  const [useCommuteTime, setUseCommuteTime] = useState(false);
  const [selectedWork, setSelectedWork] = useState(null);
  const [transportType, setTransportType] = useState("useDriving");
  const [travelDuration, setTravelDuration] = useState(0);
  const [loadingFetch, setLoadingFetch] = useState(false);
  const [useRanking, setUseRanking] = useState(false);
  const [rankingBooleans, setRankingBooleans] = useState({
    crimeRate: false,
    education: false,
    availability: false,
    socialGrade: false,
    averageBedrooms: false,
    population: false
  });
  const [rankSortOrder, setRankSortOrder] = useState({
    socialGrade: "ASC",
    averageBedrooms: "ASC",
    population: "ASC"
  });

  //Data driven styling

  const [mapFilter, setMapFilter] = useState([]);
  const [mapFillColor, setMapFillColor] = useState([
    "match",
    ["get", "name"],
    "SW3",
    "#fbb03b",
    "#096925"
  ]);

  //Misc Helpers

  const findCorrectDistrict = name => {
    return allDistricts.find(district => district.postcode === name);
  };

  //Sorters

  const districtSorter = () => {
    let term = "";
    if (selectedFilter === "useRent") term = "ave_rent";
    if (selectedFilter === "usePrice") term = "ave_price";
    if (selectedFilter === "useYield") term = "ave_yield";
    console.log(allDistricts.sort(sortWithTerm(term)));
  };

  const sortBy = (key, order = "asc") => (a, b) => {
    if (a[key] < b[key]) return order === "asc" ? -1 : 1;
    if (a[key] > b[key]) return order === "asc" ? 1 : -1;
    return 0;
  };

  const sortWithTerm = term => sortBy(term);

  //Getters

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
      .then(districts => {
        setMapFilter(["in", "name", ...districts]);
        return districts;
      });
  };

  const getTimeMap = () => {
    if (selectedWork) {
      setLoadingFetch(true);
      let newAllArray = [...allDistricts];
      getDistanceTime(selectedWork, transportType)
        .then(json =>
          json.results[0].districts.map(dist => {
            newAllArray.map(item => {
              if (item.postcode.toUpperCase() === dist.code.toUpperCase()) {
                item.travelTime = Math.ceil(
                  dist.properties.travel_time_reachable.mean / 60
                );
              } else if (
                dist.code.toUpperCase().includes(item.postcode.toUpperCase())
              ) {
                item.travelTime = Math.ceil(
                  dist.properties.travel_time_reachable.mean / 60
                );
              }
            });
            //
          })
        )
        .then(() => {
          setAllDistricts(newAllArray);
          setLoadingFetch(false);
        });
    }
  };

  // filter function

  const filterOutDistricts = () => {
    let array = null;
    if (selectedFilter === "useRent")
      array = allDistricts.filter(district => district.ave_rent <= rentValue);
    if (selectedFilter === "usePrice")
      array = allDistricts.filter(district => district.ave_price <= rentValue);
    if (selectedFilter === "useYield")
      array = allDistricts.filter(district => district.ave_yield <= rentValue);

    let array2 = [...array];
    if (useCommuteTime && selectedWork)
      array2 = array.filter(district => district.travelTime <= travelDuration);

    const filteredArray = array2.map(district => district.postcode);

    setMapFilter(["in", "name", ...filteredArray]);
  };

  //Lifecycle

  useEffect(() => {
    getMapLayer();
    getPostcodeInfo();
  }, []);

  useEffect(() => {
    filterOutDistricts();
  }, [selectedFilter, selectedWork, rentValue, travelDuration, useCommuteTime]);

  useEffect(() => {
    getTimeMap();
  }, [selectedWork, transportType]);
  //Render

  return (
    <Fragment>
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
                    setTransportType={setTransportType}
                    transportType={transportType}
                    travelDuration={travelDuration}
                    setTravelDuration={setTravelDuration}
                    useRanking={useRanking}
                    setUseRanking={setUseRanking}
                    rankingBooleans={rankingBooleans}
                    setRankingBooleans={setRankingBooleans}
                    rankSortOrder={rankSortOrder}
                    setRankSortOrder={setRankSortOrder}
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
                    useCommuteTime={useCommuteTime}
                    transportType={transportType}
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
      <Modal open={loadingFetch} basic size="small">
        <Header textAlign="center" content="Loading Realtime Data" />
        <Modal.Content>
          <Loader active />
        </Modal.Content>
      </Modal>
    </Fragment>
  );
};

export default Dashboard;
