import React from 'react';

const SavedPlaces = ({ savedWeatherData, weatherIcon }) => {
  return (
    <div className="saved-places">
      <h3>Saved Places</h3>
      {savedWeatherData && savedWeatherData.entries && savedWeatherData.entries.length > 0 ? (
        savedWeatherData.entries.map((entry, index) => (
          <div key={index} className="savedweather-info">
            <div className="savedweather-icon">{weatherIcon(entry.data.weather[0].icon)}</div>
            <div className="savedweather-details">
              <p className="city-name">{entry.city}</p>
              <div className="savedweather-data">
                <div>
                  <p className="temperature">
                    Temperature: {Math.round(entry.data.main.temp - 273.15)}°C
                  </p>
                  <p className="savedweather-description">
                    Weather: {entry.data.weather[0].description}
                  </p>
                </div>
                <div>
                  <p className="humidity">Humidity: {entry.data.main.humidity}%</p>
                  <p className="wind-speed">Wind Speed: {entry.data.wind.speed} m/s</p>
                </div>
              </div>
              <p className="saved-date">Saved Date: {entry.date}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No saved weather data available</p>
      )}
    </div>
  );
};

export default SavedPlaces;
