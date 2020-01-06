
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDLkd-ICaxGFi-5hgzaiT6SgcbgBMJ3c6c",
    authDomain: "loginfirebase-9ba6a.firebaseapp.com",
    databaseURL: "https://loginfirebase-9ba6a.firebaseio.com",
    projectId: "loginfirebase-9ba6a",
    storageBucket: "loginfirebase-9ba6a.appspot.com",
    messagingSenderId: "294889501584",
    appId: "1:294889501584:web:cc8397bdde20ef97313915",
    measurementId: "G-M7WSDZHXR0"
  };

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;