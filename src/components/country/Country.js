import React from "react";
import numFormat from "../../numFormat.js";
const Country = (props) => {
  const { country, cases, active, updated, val, recovered, deaths } = props;
  const time = new Date(updated).toUTCString();

  return (
    <>
      {!val || (
        <div className="country" id="scrollInto">
          <div className="country-header">
            <div className="country-title">
              <h3>{country}</h3>
              <h4 className="country-date">Last updated on {time}</h4>
            </div>
            <div className="total-cases">
              <h5>Total</h5> <h4>{numFormat(cases)} </h4>
            </div>
          </div>
          <div className="cases">
            <h4 className="active">Active cases : {numFormat(active)}</h4>

            <h4 className="recovered">
              Recovered cases : {numFormat(recovered)}
            </h4>
            <h4 className="death">Total Deaths : {numFormat(deaths)}</h4>
          </div>
        </div>
      )}
    </>
  );
};

export default Country;
