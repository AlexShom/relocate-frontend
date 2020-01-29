import React, { useState, Fragment } from "react";
import { Button } from "semantic-ui-react";

const RankingList = ({ list, setSelectedDistrict, selectedDistrict }) => {
  const [showMore, setShowMore] = useState(false);
  let firstHalf = [...list];
  let halfResult = firstHalf.splice(0, 60);
  let count = 0;
  return (
    <Fragment>
      <table>
        <thead style={{ textAlign: "left" }}>
          <tr>
            <th>Select:</th>
            <th>Rank</th>
            <th>Postcode</th>
            <th>Crime score</th>
            <th>Education score</th>
            <th>Availability score</th>
            <th>Average Bedrooms score</th>
            <th>Population Density score</th>
          </tr>
        </thead>
        <tbody>
          {!showMore &&
            halfResult.map(element => {
              return (
                <tr className={`list-item-${++count}`} key={element.postcode}>
                  <td>
                    <Button
                      name={element.postcode}
                      color={"blue"}
                      inverted
                      basic
                      content={element.postcode}
                      onClick={(e, { name }) => {
                        if (selectedDistrict === name) {
                          setSelectedDistrict("");
                        } else {
                          setSelectedDistrict(name);
                        }
                      }}
                    ></Button>
                  </td>
                  <td>{list.indexOf(element) + 1}</td>
                  <td>{element.postcode}</td>
                  <td>{element.crime_rate}</td>
                  <td>{element.education}</td>
                  <td>{element.availability}</td>
                  <td>{element.average_bedrooms}</td>
                  <td>{element.population}</td>
                </tr>
              );
            })}
          {showMore &&
            list.map(element => {
              return (
                <tr className={`list-item-${++count}`} key={element.postcode}>
                  <td>
                    <Button
                      name={element.postcode}
                      color={"blue"}
                      inverted
                      basic
                      content={element.postcode}
                      onClick={(e, { name }) => {
                        if (selectedDistrict === name) {
                          setSelectedDistrict("");
                        } else {
                          setSelectedDistrict(name);
                        }
                      }}
                    ></Button>
                  </td>
                  <td>{list.indexOf(element) + 1}</td>
                  <td>{element.postcode}</td>
                  <td>{element.crime_rate}</td>
                  <td>{element.education}</td>
                  <td>{element.availability}</td>
                  <td>{element.average_bedrooms}</td>
                  <td>{element.population}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <div style={{ textAlign: "center" }}>
        {!showMore && (
          <Button onClick={() => setShowMore(true)} content="Show More" />
        )}
        {showMore && (
          <Button onClick={() => setShowMore(false)} content="Show Less" />
        )}
      </div>
    </Fragment>
  );
};

export default RankingList;
