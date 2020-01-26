import React, { useState, useEffect, Fragment } from "react";
import { Grid, Container, Modal, Header, Loader } from "semantic-ui-react";
import Viewer from "../components/Viewer";
import SearchCriteria from "../components/SearchCriteria";
import { mapsAPI, postcodesAPI } from "../adapters/API";
import { getDistanceTime } from "../adapters/DistanceAPI";
import RankingList from "../components/RankingList";
import { ColorArray } from "../smallComponents/ColorOptions";

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
  const [displayList, setDisplayList] = useState([]);
  const [rankingBooleans, setRankingBooleans] = useState({
    crimeRate: false,
    education: false,
    availability: false,
    averageBedrooms: false,
    population: false
  });
  const [rankSortOrder, setRankSortOrder] = useState({
    averageBedrooms: "ASC",
    population: "ASC"
  });

  //Data driven styling

  const [mapFilter, setMapFilter] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("none");
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

  const checkIfRankerSelected = () => {
    if (
      rankingBooleans.crimeRate ||
      rankingBooleans.education ||
      rankingBooleans.availability ||
      rankingBooleans.averageBedrooms ||
      rankingBooleans.population
    ) {
      return true;
    } else {
      return false;
    }
  };

  //Ranker

  const districtSorter = list => {
    let array = [...list];

    array.forEach(district => (district.rankingScore = 0));

    if (rankingBooleans.crimeRate) {
      let sortedArray = array.sort(sortWithAttribute("crime_rate"));
      sortedArray.forEach(
        district => (district.rankingScore += sortedArray.indexOf(district))
      );
    }
    if (rankingBooleans.education) {
      let sortedArray = array.sort(sortWithAttribute("education", "DESC"));
      sortedArray.forEach(
        district => (district.rankingScore += sortedArray.indexOf(district))
      );
    }
    if (rankingBooleans.availability) {
      let sortedArray = array.sort(sortWithAttribute("availability", "DESC"));
      sortedArray.forEach(
        district => (district.rankingScore += sortedArray.indexOf(district))
      );
    }
    if (rankingBooleans.averageBedrooms) {
      if (rankSortOrder.averageBedrooms === "ASC") {
        let sortedArray = array.sort(sortWithAttribute("average_bedrooms"));
        sortedArray.forEach(
          district => (district.rankingScore += sortedArray.indexOf(district))
        );
      } else {
        let sortedArray = array.sort(
          sortWithAttribute("average_bedrooms", "DESC")
        );
        sortedArray.forEach(
          district => (district.rankingScore += sortedArray.indexOf(district))
        );
      }
    }
    if (rankingBooleans.population) {
      if (rankSortOrder.population === "ASC") {
        let sortedArray = array.sort(sortWithAttribute("population"));
        sortedArray.forEach(
          district => (district.rankingScore += sortedArray.indexOf(district))
        );
      } else {
        let sortedArray = array.sort(sortWithAttribute("population", "DESC"));
        sortedArray.forEach(
          district => (district.rankingScore += sortedArray.indexOf(district))
        );
      }
    }
    return array.sort(sortWithAttribute("rankingScore"));
  };

  //Sort helpers

  const sortBy = (key, order = "ASC") => (a, b) => {
    if (a[key] < b[key]) return order === "ASC" ? -1 : 1;
    if (a[key] > b[key]) return order === "ASC" ? 1 : -1;
    return 0;
  };

  const sortWithAttribute = (term, order) => sortBy(term, order);

  //Getters

  const getMapLayer = () => {
    fetch(mapsAPI)
      .then(resp => {
        console.log("setting map loader", resp);
        setLoadingFetch(true);
        return resp;
      })
      .then(resp => resp.json())
      .then(json => json.data)
      .then(json => setMapLayer(json))
      .then(json => {
        console.log("setting map loader", json);
        setLoadingFetch(false);
      });
  };

  const getPostcodeInfo = () => {
    fetch(postcodesAPI)
      .then(resp => {
        console.log("setting pcode loader", resp);
        setLoadingFetch(true);
        return resp;
      })
      .then(resp => resp.json())
      .then(districts => {
        setAllDistricts(districts);
        setDisplayList(districts);
        return districts.map(district => district.postcode);
      })
      .then(districts => {
        setMapFilter(["in", "name", ...districts]);
        return districts;
      })
      .then(dist => {
        console.log("setting pcode loader", dist);
        setLoadingFetch(false);
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
                  dist.properties.travel_time_reachable.min / 60
                );
              } else if (
                dist.code.toUpperCase().includes(item.postcode.toUpperCase())
              ) {
                item.travelTime = Math.ceil(
                  dist.properties.travel_time_reachable.min / 60
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
    setDisplayList(districtSorter(array2));
    if (useRanking && checkIfRankerSelected()) {
      styleMap(districtSorter(array2));
    } else {
      setMapFillColor("#096925");
    }
  };

  const styleMap = array => {
    const tempArray = [...array].splice(0, 58);
    const result = [];
    let count = 0;
    tempArray.forEach(district => {
      result.push(district.postcode);
      result.push(ColorArray[count++]);
    });
    result.push("#E22500");
    setMapFillColor(["match", ["get", "name"], ...result]);
  };

  //Lifecycle

  useEffect(() => {
    getMapLayer();
    getPostcodeInfo();
  }, []);

  useEffect(() => {
    filterOutDistricts();
  }, [
    selectedFilter,
    selectedWork,
    rentValue,
    travelDuration,
    useCommuteTime,
    useRanking,
    rankingBooleans,
    rankSortOrder
  ]);

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
            </Grid.Column>

            <Grid.Column name="map" width={10}>
              <Container className="gen-box">
                <Container className="gen-box">
                  <Viewer
                    selectedDistrict={selectedDistrict}
                    useCommuteTime={useCommuteTime}
                    transportType={transportType}
                    mapFillColor={mapFillColor}
                    mapFilter={mapFilter}
                    setMapFilter={setMapFilter}
                    mapLayer={mapLayer}
                    selectedFilter={selectedFilter}
                    findCorrectDistrict={findCorrectDistrict}
                    workPoint={selectedWork ? selectedWork.value : {}}
                  />
                </Container>
              </Container>
              <Container className="gen-box">
                <Container className="gen-box gen-bubble">
                  {useRanking && (
                    <RankingList
                      selectedDistrict={selectedDistrict}
                      setSelectedDistrict={setSelectedDistrict}
                      list={displayList}
                    />
                  )}
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
