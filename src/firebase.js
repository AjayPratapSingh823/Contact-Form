import firebase from "firebase/app";
import "firebase/database";
var firebaseConfig = {
    apiKey: "AIzaSyBR3-HtVJCC_fK4nKZitZwKLlnsC97-GOc",
    authDomain: "react-contact-form-82a9c.firebaseapp.com",
    projectId: "react-contact-form-82a9c",
    storageBucket: "react-contact-form-82a9c.appspot.com",
    messagingSenderId: "521486835883",
    appId: "1:521486835883:web:fcce29985d012c31ead7ee"
  };
  const fireDb = firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref();