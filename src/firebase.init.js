// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDWsa-yVXmioSACgVqguuXvva3uiTXO5H4",
    authDomain: "gym-trainer-d8b35.firebaseapp.com",
    projectId: "gym-trainer-d8b35",
    storageBucket: "gym-trainer-d8b35.appspot.com",
    messagingSenderId: "863419347880",
    appId: "1:863419347880:web:825d99dc909f27ba67e39d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth