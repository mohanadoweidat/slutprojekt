import React, { useState } from 'react';
import firebase from './firebase';
import { firestore } from './firebase';
import Select from 'react-select';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { WiDaySunny, WiCloud, WiRain, WiSnow, WiThunderstorm, WiNightClear, WiNightCloudy, WiNightCloudyHigh, WiNightRain, WiNightThunderstorm, WiNightSnow } from 'react-icons/wi';
import CityHistory from './CityHistory'; 

const weatherOptions = [
  { value: 'London', label: 'London' },
  { value: 'New York', label: 'New York' },
  { value: 'Paris', label: 'Paris' },
  { value: 'Stockholm', label: 'Stockholm' },
  { value: 'Gothenburg', label: 'Gothenburg' },
  { value: 'Malmö', label: 'Malmö' },
  { value: 'Linköping', label: 'Linköping' },
  { value: 'Västerås', label: 'Västerås' },
  { value: 'Örebro', label: 'Örebro' },
  { value: 'Helsingborg', label: 'Helsingborg' },
  { value: 'Jönköping', label: 'Jönköping' },
  { value: 'Norrköping', label: 'Norrköping' },
];

const MainPage = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [cityHistory, setCityHistory] = useState([]);
 
  
  const handleLogout = () => {
    firebase.auth().signOut();
  };


  //Weather
  const handleCityChange = (selectedOption) => {
    setSelectedCity(selectedOption);
  };
  const fetchWeatherData = async (selectedCity) => {
    const city = selectedCity?.value || selectedCity;

    if (!city) {
      setWeatherData(null);
      return;
    }

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_APIKEY}`
      );
      if (response.ok) {
        const data = await response.json();
        setWeatherData(data);
        addToCityHistory(city);
      } else {
        console.log('Error:', response.status);
      }
    } catch (error) {
      console.log('Error fetching weather data:', error);
    }
  };
  const weatherIcon = (weatherCode) => {
    if (weatherData && weatherData.weather) {
      const code = weatherCode.substring(0, 2);
  
      switch (code) {
        case '01':
          return <WiDaySunny size={60} color="#fdd835" />;
        case '02':
          return <WiCloud size={60} color="#78909c" />;
        case '03':
        case '04':
          return <WiCloud size={60} color="#bdbdbd" />;
        case '09':
        case '10':
          return <WiRain size={60} color="#1565c0" />;
        case '11':
          return <WiThunderstorm size={60} color="#212121" />;
        case '13':
          return <WiSnow size={60} color="#90a4ae" />;
        case '01n':
          return <WiNightClear size={60} color="#fdd835" />;
        case '02n':
          return <WiNightCloudy size={60} color="#78909c" />;
        case '03n':
        case '04n':
          return <WiNightCloudyHigh size={60} color="#bdbdbd" />;
        case '09n':
        case '10n':
          return <WiNightRain size={60} color="#1565c0" />;
        case '11n':
          return <WiNightThunderstorm size={60} color="#212121" />;
        case '13n':
          return <WiNightSnow size={60} color="#90a4ae" />;
        default:
          return null;
      }
    } else {
      return null;
    }
  };


  //History
  const handleCityHistoryClick = (city) => {
    const selectedOption = weatherOptions.find((option) => option.value === city);

    if (selectedOption) {
      setSelectedCity(selectedOption);
    }
  };
  const handleRemoveHistory = () => {
    setCityHistory([]);
  };
  const addToCityHistory = (city) => {
    if (!cityHistory.includes(city)) {
      setCityHistory([...cityHistory, city]);
    }
  };
 
   
  return (
    <Container>
      <Row className="justify-content-center">

      <Col xs={12} md={4} lg={3}>
          <CityHistory
            cityHistory={cityHistory}
            handleCityHistoryClick={handleCityHistoryClick}
            handleRemoveHistory={handleRemoveHistory}
          />
          
        </Col>



         <Col xs={12} md={8} lg={6}>
          <h1>Welcome to WeatherCast</h1>
          
          <Select
            options={weatherOptions}
            value={selectedCity}
            onChange={handleCityChange}
            placeholder="Select a city"
          />

          {selectedCity && (
            <div>
              <h2>{selectedCity.label}</h2>
            </div>
          )}
 
          {weatherData && weatherData.weather ? (
            <div className="weather-info">
              <div className="weather-icon">{weatherIcon(weatherData.weather[0].icon)}</div>
              <div className="weather-details">
                <p>Temperature: {Math.round(weatherData.main.temp - 273.15)}°C</p>
                <p>Weather: {weatherData.weather[0].description}</p>
                <p>Humidity: {weatherData.main.humidity}%</p>
                <p>Wind Speed: {weatherData.wind.speed} m/s</p>
              </div>
            </div>
          ) : (
            <p>No weather data available</p>
          )}

          <div className="button-container">
            <Button variant="primary" onClick={() => fetchWeatherData(selectedCity)}>
              Get Weather Data
            </Button>

            <Button variant="primary">
            Save Weather Data
            </Button>
 
            <Button variant="danger" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MainPage;
