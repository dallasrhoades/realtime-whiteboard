import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// import firebase package //
import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

//configure firebase //
  var config = {
    apiKey: "AIzaSyAL0w7UO_aKn_1Gc3v2sF8LH8Zplq_TMgg",
    authDomain: "demofirebaseterps-7bf7e.firebaseapp.com",
    databaseURL: "https://demofirebaseterps-7bf7e.firebaseio.com",
    projectId: "demofirebaseterps-7bf7e",
    storageBucket: "",
    messagingSenderId: "487668714918"
  };
  firebase.initializeApp(config);
  firebase.firestore().enablePersistence();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
