import React from 'react';
import { Button } from 'react-bootstrap';

const CityHistory = ({ cityHistory, handleCityHistoryClick, handleRemoveHistory }) => {
  return (
    <div className="city-history">
      <h3>City History</h3>
      {cityHistory.map((city, index) => (
        <p key={index} onClick={() => handleCityHistoryClick(city)}>
          {city}
        </p>
      ))}
      {cityHistory.length > 0 && (
        <Button variant="danger" onClick={handleRemoveHistory}>
          Remove History
        </Button>
      )}
    </div>
  );
};

export default CityHistory;
