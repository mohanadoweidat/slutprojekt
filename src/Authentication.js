import React, { useState } from 'react';
import firebase from './firebase';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

const Authentication = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Account created
        const user = userCredential.user;
        console.log('Account created:', user);
      })
      .catch((error) => {
        // Error creating account
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Error creating account:', errorCode, errorMessage);
        setError(errorMessage);
      });
  };

  const handleLogin = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Login successful
        const user = userCredential.user;
        console.log('Login successful:', user);
      })
      .catch((error) => {
        // Login failed
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Login failed:', errorCode, errorMessage);
        setError(errorMessage);
      });
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <h2>Login</h2>
          <Form>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value={email} onChange={handleEmailChange} placeholder="Email" />
            </Form.Group>

            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
            </Form.Group>

            <Button variant="primary" onClick={handleSignUp} className="mb-3 space">Sign Up</Button>
            <Button variant="primary" onClick={handleLogin} className="mb-3 space">Log In</Button>
          </Form>

          {error && <Alert variant="danger">{error}</Alert>}
        </Col>
      </Row>
    </Container>
  );
};

export default Authentication;
