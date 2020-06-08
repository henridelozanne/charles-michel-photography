import firebase from 'firebase';
require("firebase/firestore");
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDg7HgNqqY0nM5MGaTXtBSYzb0D2u5wZVg",
  authDomain: "charles-michel-photography.firebaseapp.com",
  databaseURL: "https://charles-michel-photography.firebaseio.com",
  projectId: "charles-michel-photography",
  storageBucket: "charles-michel-photography.appspot.com",
  messagingSenderId: "925025316357",
  appId: "1:925025316357:web:d7e59a9d7e5bdea2b3766c",
  measurementId: "G-DS34J8FJR1"
};

const fb = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { fb, db };