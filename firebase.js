import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:  "AIzaSyBANle7MnNQMPXuxC-HLPA-d2MQ-p2c6QA",
  authDomain: "auth-development-2da18.firebaseapp.com",
  projectId: "auth-development-2da18",
  storageBucket: "auth-development-2da18.appspot.com",
  messagingSenderId: "132814518434",
  appId: "1:132814518434:web:2cb1200f4a575327147ffb"
};

firebase.initializeApp(firebaseConfig)

const fireAuthorization = firebase.auth();
const fireStorage = firebase.storage();
const fireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;


export {
    fireAuthorization,
    fireStorage,
    fireStore,
    timestamp
};