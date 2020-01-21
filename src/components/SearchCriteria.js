import React, { useEffect, Fragment } from "react";
import { Grid } from "semantic-ui-react";
import ValueSlider from "../smallComponents/ValueSlider";
import FilterCheckboxes from "./FilterCheckboxes";
import DistanceForm from "./DistanceForm";
import BooleanCheckbox from "../smallComponents/BooleanCheckbox";
import OrderCheckBoxes from "../smallComponents/orderCheckBoxes";

const SearchCriteria = ({
  rentValue,
  setRentValue,
  selectedFilter,
  setSelectedFilter,
  useCommuteTime,
  setUseCommuteTime,
  selectedWork,
  setSelectedWork,
  setTransportType,
  transportType,
  travelDuration,
  setTravelDuration,
  useRanking,
  setUseRanking,
  rankingBooleans,
  setRankingBooleans,
  rankSortOrder,
  setRankSortOrder
}) => {
  const messageRent = "Use Average Rent per month to filter";
  const messagePrice = "Use Average Price per sqft to filter";
  const messageYield = "Use Average yield in % to filter";

  const sliderChoice = () => {
    if (selectedFilter === "useRent") {
      return (
        <ValueSlider
          value={rentValue}
          setValue={setRentValue}
          maxValue={4000}
          minValue={1100}
        />
      );
    } else if (selectedFilter === "usePrice") {
      return (
        <ValueSlider
          value={rentValue}
          setValue={setRentValue}
          maxValue={2000}
          minValue={346}
        />
      );
    } else {
      return (
        <ValueSlider
          usePercent={true}
          value={rentValue}
          setValue={setRentValue}
          maxValue={8.1}
          minValue={1.9}
          step={0.1}
        />
      );
    }
  };

  return (
    <Fragment>
      <Grid>
        <Grid.Column style={{ minWidth: "250px" }}>
          <div className="checkbox-box">
            <FilterCheckboxes
              selectedFilter={selectedFilter}
              setSelectedFilter={setSelectedFilter}
              message={messageRent}
              changeValue="useRent"
            />
            <FilterCheckboxes
              selectedFilter={selectedFilter}
              setSelectedFilter={setSelectedFilter}
              message={messagePrice}
              changeValue="usePrice"
            />
            <FilterCheckboxes
              selectedFilter={selectedFilter}
              setSelectedFilter={setSelectedFilter}
              message={messageYield}
              changeValue="useYield"
            />
          </div>
          {sliderChoice()}
        </Grid.Column>

        <Grid.Column style={{ minWidth: "250px" }}>
          <div className="checkbox-box">
            <DistanceForm
              travelDuration={travelDuration}
              setTravelDuration={setTravelDuration}
              selectedWork={selectedWork}
              setSelectedWork={setSelectedWork}
              useCommuteTime={useCommuteTime}
              setUseCommuteTime={setUseCommuteTime}
              setTransportType={setTransportType}
              transportType={transportType}
            />
          </div>
        </Grid.Column>
      </Grid>
      <div className="checkbox-box">
        <div style={{ paddingBottom: "5px" }}>
          <BooleanCheckbox
            toggle={true}
            message="Rank options"
            getter={useRanking}
            setter={setUseRanking}
            checked={useRanking}
            description="Rank each postcode from best to worst by selected criteria"
          />
        </div>
        {useRanking && (
          <Grid>
            <Grid.Column width={8}>
              <BooleanCheckbox
                message="Crime Rate"
                getter={rankingBooleans.crimeRate}
                setter={crimeRate =>
                  setRankingBooleans({ ...rankingBooleans, crimeRate })
                }
                checked={rankingBooleans.crimeRate}
                description="Crime rate ranked from least to most incidents"
              />
              <BooleanCheckbox
                message="Education"
                getter={rankingBooleans.education}
                setter={education =>
                  setRankingBooleans({ ...rankingBooleans, education })
                }
                checked={rankingBooleans.education}
                description="Area university education score (number of degree educated) from highest to lowest"
              />

              <BooleanCheckbox
                message="Availability"
                getter={rankingBooleans.availability}
                setter={availability =>
                  setRankingBooleans({ ...rankingBooleans, availability })
                }
                checked={rankingBooleans.availability}
                description="Ranked according to the average number of sales per month from most to least"
              />
            </Grid.Column>
            <Grid.Column width={8}>
              <BooleanCheckbox
                message="Average bedrooms"
                getter={rankingBooleans.averageBedrooms}
                setter={averageBedrooms =>
                  setRankingBooleans({ ...rankingBooleans, averageBedrooms })
                }
                checked={rankingBooleans.averageBedrooms}
                description="Average number of bedrooms per house in the  postcode district"
              />
              {rankingBooleans.averageBedrooms && (
                <OrderCheckBoxes
                  rKey="averageBedrooms"
                  rankSortOrder={rankSortOrder}
                  setRankSortOrder={averageBedrooms =>
                    setRankSortOrder({ ...rankSortOrder, averageBedrooms })
                  }
                />
              )}
              <BooleanCheckbox
                message="Population Density"
                getter={rankingBooleans.population}
                setter={population =>
                  setRankingBooleans({ ...rankingBooleans, population })
                }
                checked={rankingBooleans.population}
                description="Average population in the postcode district"
              />
              {rankingBooleans.population && (
                <OrderCheckBoxes
                  rKey="population"
                  rankSortOrder={rankSortOrder}
                  setRankSortOrder={population =>
                    setRankSortOrder({ ...rankSortOrder, population })
                  }
                />
              )}
              <BooleanCheckbox
                message="Social Grade AB"
                getter={rankingBooleans.socialGrade}
                setter={socialGrade =>
                  setRankingBooleans({ ...rankingBooleans, socialGrade })
                }
                checked={rankingBooleans.socialGrade}
                description="Ranked by NRS social grade"
              />
              {rankingBooleans.socialGrade && (
                <OrderCheckBoxes
                  rKey="socialGrade"
                  rankSortOrder={rankSortOrder}
                  setRankSortOrder={socialGrade =>
                    setRankSortOrder({ ...rankSortOrder, socialGrade })
                  }
                />
              )}
            </Grid.Column>
          </Grid>
        )}
      </div>
    </Fragment>
  );
};

export default SearchCriteria;
