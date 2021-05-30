import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAq3iMrSLBzJ1zOUmNUps6OBiI9dvrDm1U",
  authDomain: "crwn-shop-e72f2.firebaseapp.com",
  projectId: "crwn-shop-e72f2",
  storageBucket: "crwn-shop-e72f2.appspot.com",
  messagingSenderId: "829482399230",
  appId: "1:829482399230:web:a44a1d67354eaed77dfcaf",
  measurementId: "G-V1EN1QRCWR"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;
