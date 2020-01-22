import React, { useState, Fragment } from "react";
import { Table, Button } from "semantic-ui-react";

const RankingList = ({ list }) => {
  const [showMore, setShowMore] = useState(false);
  let firstHalf = [...list];
  let halfResult = firstHalf.splice(0, 60);
  let count = 0;
  return (
    <Fragment>
      <table>
        <thead style={{ textAlign: "left" }}>
          <tr>
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

/* <Table inverted celled>
        <Table.Body>
          {list.map(element => {
            return (
              <Table.Row
                key={element.postcode}
                className={`list-item-${++count}`}
              >
                <Table.Cell>{element.postcode}</Table.Cell>
                <Table.Cell>Education score: {element.education}</Table.Cell>
                <Table.Cell>Crime score: {element.crime_rate}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table> */
