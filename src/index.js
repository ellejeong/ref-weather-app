import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import WeatherContainer from "./js/components/WeatherContainer.jsx";
import Error from "./js/components/Error.jsx";

import "../public/styles/index.css";

const App = () => {
  const [hasError, setErrors] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [zipcode, updateZipcode] = useState(null);

  // Normally, I would put the access token in a .env file utilizing the dot-env package
  // I would also normally put fetch calls in a separate directory for client APIs
  async function fetchData(zipcode = "10036") {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=709847967f5e54b97308c1b2cae4dee5`
    ).then((response) => {
      if (!response.ok) {
        setErrors(response.statusText);
        throw Error(response.statusText);
      }
      return response;
    });

    res
      .json()
      .then((res) => JSON.parse(JSON.stringify(res)))
      .then((parsedRes) => setWeatherData(parsedRes))
      .catch((err) => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  const zipcodeSubmitHandler = () => {
    fetchData(zipcode);
  };

  if (hasError) {
    return (
      <div className="container">
        <Error error={hasError} />
      </div>
    );
  }

  if (!weatherData) {
    return (
      <div className="container">
        <h1>Pending...</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <WeatherContainer
        zipcode={zipcode}
        updateZipcode={updateZipcode}
        zipcodeSubmitHandler={zipcodeSubmitHandler}
        weatherData={weatherData}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
