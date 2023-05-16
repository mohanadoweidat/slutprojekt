import React from 'react';
import firebase from './firebase';

const MainPage = () => {
  const handleLogout = () => {
    firebase.auth().signOut();
  };

  return (
    <div>
      <h1>Welcome to WeatherCast</h1>
      <p>The weather today is sunny!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default MainPage;
