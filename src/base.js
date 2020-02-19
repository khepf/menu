import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDYua8j3in1lZ4BErMLdzxNBtolzBee0X0",
  authDomain: "catch-of-the-day-96ef0.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-96ef0.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;