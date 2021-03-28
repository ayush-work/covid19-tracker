import React from "react";

const Card = (props) => {
  const {
    active,
    deaths,
    recovered,
    message,
    type,
    todayCases,
    todayDeaths,
    todayRecovered,
  } = props;
  let cases;
  let newCases;
  if (type === "active") {
    cases = new Intl.NumberFormat("en-IN").format(active);
    newCases = new Intl.NumberFormat("en-IN").format(todayCases);
    // formatCases(active, todayCases);
  }
  if (type === "recovered") {
    cases = new Intl.NumberFormat("en-IN").format(recovered);
    newCases = new Intl.NumberFormat("en-IN").format(todayRecovered);
  }
  if (type === "death") {
    cases = new Intl.NumberFormat("en-IN").format(deaths);
    newCases = new Intl.NumberFormat("en-IN").format(todayDeaths);
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
