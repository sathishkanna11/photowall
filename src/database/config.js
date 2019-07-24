import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAEvajLbWoxUc-lMG17UxulkLoDv5ZP4EE",
    authDomain: "photowall-f7727.firebaseapp.com",
    databaseURL: "https://photowall-f7727.firebaseio.com",
    projectId: "photowall-f7727",
    storageBucket: "photowall-f7727.appspot.com",
    messagingSenderId: "455244566978",
    appId: "1:455244566978:web:eda7a7e346f57c09"
  };

  firebase.initializeApp(firebaseConfig)

  const database = firebase.database()

  export {database}