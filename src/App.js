import { useEffect, useState } from "react";
import Card from "./Card";
import Search from "./Search";
function App() {
  const [active, setActive] = useState("");
  const [death, setDeath] = useState("");
  const [recovered, setRecovered] = useState("");
  const [data, setData] = useState({});

  const allData = async function () {
    const response = await fetch("https://corona.lmao.ninja/v2/all?yesterday");
    const data = await response.json();
    const {
      active,
      recovered,
      deaths,
      updated,
      todayRecovered,
      todayDeaths,
      todayCases,
    } = data;
    setActive(active);
    setDeath(deaths);
    setRecovered(recovered);

    setData({
      updated,
      active,
      deaths,
      recovered,
      todayCases,
      todayDeaths,
      todayRecovered,
    });
  };
  const getData = async function () {
    const response = await fetch(
      "https://corona.lmao.ninja/v2/countries?yesterday&sort"
    );
    const data = await response.json();
  };
  useEffect(() => {
    allData();
    getData();
  }, [active, death, recovered]);

  return (
    <>
      <div className="heading">
        <h2>traCovid</h2>
      </div>
      <div className="app">
        <section className="card-container">
          <Card type="active" {...data} />
          <Card type="recovered" {...data} />
          <Card type="death" {...data} />
        </section>
        <Search></Search>
      </div>
    </>
  );
}

export default App;
