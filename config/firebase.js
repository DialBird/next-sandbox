import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAHiTShJd-oDreoWi6xCYnt07tjZYh-dvY",
  authDomain: "sample-f5a0c.firebaseapp.com",
  databaseURL: "https://sample-f5a0c.firebaseio.com",
  projectId: "sample-f5a0c",
  storageBucket: "sample-f5a0c.appspot.com",
  messagingSenderId: "63915581384",
  appId: "1:63915581384:web:58b8645f4ca8580d"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export const db = firebase.firestore();

export default firebase;
