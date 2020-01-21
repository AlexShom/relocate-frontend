import React from "react";

const RankingList = ({ list }) => {
  return (
    <ol>
      {list.map(element => {
        return (
          <li key={element.postcode}>
            <div>{element.postcode}</div>
          </li>
        );
      })}
    </ol>
  );
};

export default RankingList;
