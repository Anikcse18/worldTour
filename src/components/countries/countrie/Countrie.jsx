// import React from "react";
import { useState } from "react";
import "./Countrie.css";

export default function Countrie({
  countrie,
  handelVistedCountry,
  handelVisitedFlag,
  handelVisitedTimeZone,
}) {
  const { name, flags, cca3, population, timezones } = countrie;
  const [visted, setvisited] = useState(false);
  // console.log(timezones);

  const handelVisited = () => {
    setvisited(!visted);
  };
  // console.log(flags?.png);

  return (
    <div className={`box ${visted ? "visited" : "nonVisited"}`}>
      <h2 style={{ color: visted ? "blue" : "white" }}>
        Countrie: {name?.common}
      </h2>
      <img src={flags?.png} alt="" />
      <p style={visted ? { color: "blue" } : { color: "white" }}>
        Country: {cca3}
      </p>
      <p style={{ color: visted ? "blue" : "white" }}>
        Population: {population}
      </p>
      <button
        onClick={() => {
          handelVisitedFlag(flags?.png);
        }}
      >
        Flag
      </button>

      <button
        onClick={() => {
          handelVistedCountry(countrie);
        }}
      >
        Mark Visited
      </button>

      <button
        onClick={() => {
          handelVisitedTimeZone(timezones);
        }}
      >
        Time Zone
      </button>

      <button onClick={handelVisited}>{visted ? "Visited" : "Go"}</button>

      {visted ? "I have visited this country" : "I will GO there"}
    </div>
  );
}
