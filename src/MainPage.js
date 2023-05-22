import React from 'react';
import firebase from './firebase';
import { Button, Container, Row, Col } from 'react-bootstrap';

const MainPage = () => {
  const handleLogout = () => {
    firebase.auth().signOut();
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <h1>Welcome to WeatherCast</h1>
          <p>The weather today is sunny!</p>
          <Button variant="danger" onClick={handleLogout}>Logout</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default MainPage;
