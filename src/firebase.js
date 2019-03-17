const firebase = require('firebase');

var config = {
    apiKey: "AIzaSyAMYVOF0fZgR_eDzN1Ry4nNmxUBADlH2CE",
    authDomain: "my-project-2d3c6.firebaseapp.com",
    databaseURL: "https://my-project-2d3c6.firebaseio.com",
    projectId: "my-project-2d3c6",
    storageBucket: "my-project-2d3c6.appspot.com",
    messagingSenderId: "387136673561"
};

const app = firebase.initializeApp(config);

export const db = app.database();
export const auth = app.auth();

export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const facebookProvider = new firebase.auth.FacebookAuthProvider();

export const storage = app.storage();