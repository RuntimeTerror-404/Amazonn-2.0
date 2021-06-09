import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDasGbO7dMJuOksVS3GgU8j6Ayr-hj9rAU",
  authDomain: "clone-react-1d492.firebaseapp.com",
  projectId: "clone-react-1d492",
  storageBucket: "clone-react-1d492.appspot.com",
  messagingSenderId: "848690502127",
  appId: "1:848690502127:web:291876fb7962765ce2be1a",
  measurementId: "G-54DP6BKFEV",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
export default db;
