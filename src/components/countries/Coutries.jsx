import { useEffect, useState } from "react";
import Countrie from "./countrie/Countrie";
import "./Countries.css";

const Coutries = () => {
  const [countries, setCoutries] = useState([]);
  const [visitedCountry, setVistedCountry] = useState([]);
  const [visitedFlag, setVisitedFlag] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCoutries(data));
  }, []);

  const handelVistedCountry = (country) => {
    const newVisitedCountry = [...visitedCountry, country];
    setVistedCountry(newVisitedCountry);
  };

  const handelVisitedFlag = (flag) => {
    const newVisitedFlag = [...visitedFlag, flag];
    setVisitedFlag(newVisitedFlag);
    console.log(visitedFlag);
  };

  return (
    <div>
      <div>
        <h1>Total Countries: {countries.length} </h1>
        {/* VisitedCountry */}
        <div>
          <h3>Visited Country List: {visitedCountry.length} </h3>

          <ol>
            {visitedCountry.map((country) => (
              <li key={country.cca3}>{country?.name?.common}</li>
            ))}
          </ol>
        </div>
        {/* Visited Flag */}
        <div className="">
          {visitedFlag.map((flag, index) => (
            <img className="img-container" key={index} src={flag} />
          ))}
        </div>
      </div>

      {/* Showcountry */}

      <div className="country-container">
        {countries.map((countrie) => (
          <Countrie
            key={countrie.cca3}
            countrie={countrie}
            handelVistedCountry={handelVistedCountry}
            handelVisitedFlag={handelVisitedFlag}
          ></Countrie>
        ))}
      </div>
    </div>
  );
};

export default Coutries;
