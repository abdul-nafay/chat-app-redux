import firebase from 'firebase'
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCWrOq3MTBY0wWuQ6Wq40MWUlBQggixNzo",
    authDomain: "chat-app-75820.firebaseapp.com",
    databaseURL: "https://chat-app-75820.firebaseio.com",
    projectId: "chat-app-75820",
    storageBucket: "chat-app-75820.appspot.com",
    messagingSenderId: "773935514197",
    appId: "1:773935514197:web:1c920048149c3610"
  };
  // Initialize Firebase
 const fire = firebase.initializeApp(firebaseConfig);
 export default fire;
