import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

var firebaseConfig = {
    apiKey: "AIzaSyCzkKp9A_PFCtqm4HddCKKjA4RlOnas3xI",
    authDomain: "vue-calendar-c21db.firebaseapp.com",
    projectId: "vue-calendar-c21db",
    storageBucket: "vue-calendar-c21db.appspot.com",
    messagingSenderId: "878710187599",
    appId: "1:878710187599:web:3b4dfe0032dc90c966ac3a",
    measurementId: "G-P30BY79LB1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

db.settings({
    timestampsInSnapshots: true
});

export default db;