import firebase from 'firebase';
import ReduxSagaFirebase from 'redux-saga-firebase';

const myFirebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBbGXAkRihO-mTWeGBraUrDCqeWVNt3f4E',
  authDomain: 'vuttr-56d52.firebaseapp.com',
  databaseURL: 'https://vuttr-56d52.firebaseio.com',
  projectId: 'vuttr-56d52',
  storageBucket: 'vuttr-56d52.appspot.com',
  messagingSenderId: '39042272415',
  appId: '1:39042272415:web:7dee10d9664aca2dfba6aa',
  measurementId: 'G-98MLXHKLRV',
});

const reduxSagaFirebase = new ReduxSagaFirebase(myFirebaseApp);

export const firebaseDatabase = firebase.database();
export default reduxSagaFirebase;
