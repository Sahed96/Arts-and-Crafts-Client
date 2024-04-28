// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5DPunnKfV_43emEn1Wrd5cemT8e6W31w",
  authDomain: "art-and-craft-25847.firebaseapp.com",
  projectId: "art-and-craft-25847",
  storageBucket: "art-and-craft-25847.appspot.com",
  messagingSenderId: "193799836593",
  appId: "1:193799836593:web:04dfddb83953c9ce582390"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;