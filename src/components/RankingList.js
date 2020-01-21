import React from "react";

const RankingList = ({ list }) => {
  let count = 0;
  return (
    <ol>
      {list.map(element => {
        return (
          <li key={element.postcode}>
            <div className={`list-item-${++count}`}>{element.postcode}</div>
          </li>
        );
      })}
    </ol>
  );
};

export default RankingList;
