import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { collection, getFirestore, getDocs, getDoc } from 'firebase/firestore';


const firebaseApp = initializeApp( {
    apiKey: "AIzaSyC5EG-4xARRWM3iHHzsKukDM1nZQh6A7Xg",
    authDomain: "tradeforeveryone-f1f9d.firebaseapp.com",
    projectId: "tradeforeveryone-f1f9d",
    storageBucket: "tradeforeveryone-f1f9d.appspot.com",
    messagingSenderId: "387514272816",
    appId: "1:387514272816:web:7e4b7b04472780916771f5",
    measurementId: "G-DB4T0R9ZGX"

  }); 

const auth = getAuth(firebaseApp);

onAuthStateChanged(auth, user => {
    if(user != null ) {
        console.log('logged in!');
    } else {
        console.log('No User');
    }
});

