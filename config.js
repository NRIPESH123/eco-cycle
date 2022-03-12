import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyAFxoUcAYrpAfLC1peeXndZV1JbPjU79OA",
    authDomain: "eco-cycle-4674d.firebaseapp.com",
    databaseURL: "https://eco-cycle-4674d-default-rtdb.firebaseio.com",
    projectId: "eco-cycle-4674d",
    storageBucket: "eco-cycle-4674d.appspot.com",
    messagingSenderId: "947470795118",
    appId: "1:947470795118:web:5f769cca0b98fa0a6d417f"
  };




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


