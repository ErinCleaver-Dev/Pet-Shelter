// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";
var provider = new firebase.auth.GoogleAuthProvider();

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyCrlaVF0J1bdtyvYqxvAfDcGQiZitrIjP4",
authDomain: "cp-ecleaver.firebaseapp.com",
projectId: "cp-ecleaver",
storageBucket: "cp-ecleaver.appspot.com",
messagingSenderId: "10020596347",
appId: "1:10020596347:web:d615f6d072e4cc15f410de"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

console.log("firebase initialized");

let googleLogin =  document.getElementById("googleLogin")

googleLogin.addEventListener('click', () => {
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    localStorage.setItem('user', token)
    window.location.href = '/';
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });

})