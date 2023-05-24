
// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmMzaYyrj87bf_StnyX30Wo3MJYwKNnQg",
  authDomain: "weather-webb.firebaseapp.com",
  projectId: "weather-webb",
  storageBucket: "weather-webb.appspot.com",
  messagingSenderId: "601150611555",
  appId: "1:601150611555:web:21e4b0f6d12b9be10c1856"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Export the necessary Firebase modules
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firebase;
