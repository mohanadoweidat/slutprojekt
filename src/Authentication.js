import React, { useState } from 'react';
import firebase from './firebase';

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
        // Konto skapat
        const user = userCredential.user;
        console.log('Konto skapat:', user);
      })
      .catch((error) => {
        // Fel vid skapande av konto
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Fel vid skapande av konto:', errorCode, errorMessage);
        setError(errorMessage);
      });
  };

  const handleLogin = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Inloggning lyckades
        const user = userCredential.user;
        console.log('Inloggning lyckades:', user);
      })
      .catch((error) => {
        // Inloggning misslyckades
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Inloggning misslyckades:', errorCode, errorMessage);
        setError(errorMessage);
      });
  };

  return (
    <div>
      <h2>Authentication</h2>
      <input type="email" value={email} onChange={handleEmailChange} placeholder="Email" />
      <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
      <button onClick={handleSignUp}>Sign Up</button>
      <button onClick={handleLogin}>Log In</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Authentication;
