import React from "react";
import numFormat from "../../numFormat.js";

const Card = (props) => {
  const {
    active,
    deaths,
    recovered,
    type,
    todayCases,
    todayDeaths,
    todayRecovered,
  } = props;
  let cases;
  let newCases;
  if (type === "active") {
    cases = numFormat(active);
    newCases = numFormat(todayCases);
  }
  if (type === "recovered") {
    cases = numFormat(recovered);
    newCases = numFormat(todayRecovered);
  }
  if (type === "death") {
    cases = numFormat(deaths);
    newCases = numFormat(todayDeaths);
  }

  return (
    <div className={`card ${type}`}>
      <h2 className="card-type">{type}</h2>
      <h3>{cases}</h3>
      <div className="today-cases">
        <h4>Daily increase :</h4>
        <h4>
          {newCases}{" "}
          <span>
            <i className="bx bx-up-arrow-alt"></i>
          </span>
        </h4>
      </div>
    </div>
  );
};

export default Card;
