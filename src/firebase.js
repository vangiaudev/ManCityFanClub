import firebase from 'firebase/compat/app';
import 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';
import 'firebase/compat/storage';


const config = {
    apiKey: "AIzaSyBszeAvH1dOI9vVtnztP9H5rYe1THZjGAo",
    authDomain: "man-city-fan-club.firebaseapp.com",
    databaseURL: "https://man-city-fan-club-default-rtdb.firebaseio.com",
    projectId: "man-city-fan-club",
    storageBucket: "man-city-fan-club.appspot.com",
    messagingSenderId: "677602370425",
    appId: "1:677602370425:web:feb7dbaebcb351067985a8",
    measurementId: "G-WLF43ND8HS"
};

firebase.initializeApp(config);


const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');
const firebaseTeams = firebaseDB.ref('teams');
const firebasePlayers = firebaseDB.ref('players');

export {
    firebase,
    firebaseMatches,
    firebasePromotions,
    firebaseTeams,
    firebasePlayers,
    firebaseDB
}