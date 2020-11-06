import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBPoExDHwV7MlYHZmVMFy0odwpBJIZoUpo",
    authDomain: "twitter-clone-bcd70.firebaseapp.com",
    databaseURL: "https://twitter-clone-bcd70.firebaseio.com",
    projectId: "twitter-clone-bcd70",
    storageBucket: "twitter-clone-bcd70.appspot.com",
    messagingSenderId: "803077562985",
    appId: "1:803077562985:web:514830c4ab2bf5bef278f8",
    measurementId: "G-HS64JE0CSE"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();

  export default db;