import React from "react";
import Temperature from "../components/Temperature.jsx";
import Zipcode from "../components/Zipcode.jsx";

const WeatherContainer = ({
  weatherData,
  updateZipcode,
  zipcodeSubmitHandler,
}) => {
  const { main, name, weather } = weatherData;
  const { icon, description } = weather[0];

  const convertKelvinToCelsius = (temp) => {
    return Math.round(parseInt(temp, 10) - 273);
  };

  return (
    <>
      <div className="weather-container">
        <p className="city-name">
          {name}
          <img
            src={`http://openweathermap.org/img/w/${icon}.png`}
            alt="weather-icon"
          />
        </p>
        <p className="weather-description">{description}</p>
        <Temperature
          temp={convertKelvinToCelsius(main.temp)}
          minTemp={convertKelvinToCelsius(main.temp_min)}
          maxTemp={convertKelvinToCelsius(main.temp_max)}
        />
      </div>
      <hr />
      <Zipcode
        updateZipcode={updateZipcode}
        zipcodeSubmitHandler={zipcodeSubmitHandler}
      />
    </>
  );
};

export default WeatherContainer;
