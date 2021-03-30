import React from "react";
import { useState, useEffect } from "react";
import Country from "../country/Country";
import ScrollIntoView from "react-scroll-into-view";
const Search = () => {
  const [inputVal, setInputVal] = useState("");

  const [results, setResults] = useState();

  const getCountryData = async function (query) {
    try {
      const response = await fetch(
        `https://disease.sh/v3/covid-19/countries/${query}?strict=false`
      );
      const data = await response.json();
      if (response.ok) {
        setResults(data);
      }
    } catch (e) {}
  };

  useEffect(() => {
    getCountryData(inputVal);
  }, [inputVal]);

  return (
    <>
      <div className="search">
        <i className="bx bx-search"></i>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Search Country"
        />
        <ScrollIntoView selector="#scrollInto">
          <button className="btn hidden" onClick={getCountryData}>
            Submit
          </button>
        </ScrollIntoView>
      </div>

      <Country {...results} val={inputVal}></Country>
    </>
  );
};

export default Search;
