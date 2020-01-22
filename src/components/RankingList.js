import React from "react";
import { Table } from "semantic-ui-react";

const RankingList = ({ list }) => {
  let count = 0;
  return (
    <table>
      <thead style={{ textAlign: "left" }}>
        <tr>
          <th>Postcode</th>
          <th>Crime score</th>
          <th>Education score</th>
          <th>Availability score</th>
          <th>Average Bedrooms score</th>
          <th>Population Density score</th>
        </tr>
      </thead>
      <tbody>
        {list.map(element => {
          return (
            <tr className={`list-item-${++count}`} key={element.postcode}>
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
