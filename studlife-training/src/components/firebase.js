import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA7SnRoem-ZgKA6EOyLLLBoJEo99TBWeO8",
    authDomain: "studlife-training-4f3d6.firebaseapp.com",
    databaseURL: "https://studlife-training-4f3d6.firebaseio.com",
    projectId: "studlife-training-4f3d6",
    storageBucket: "studlife-training-4f3d6.appspot.com",
    messagingSenderId: "20486722992",
    appId: "1:20486722992:web:7c2022d304ecdd3756f275",
    measurementId: "G-J5M8HJKCJ8"
};
firebase.initializeApp(firebaseConfig);
export default firebase;