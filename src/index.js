import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { collection, getFirestore, getDocs, getDoc } from 'firebase/firestore';
import { isWindows } from 'nodemon/lib/utils';


const firebaseApp = initializeApp( {
    apiKey: "AIzaSyC5EG-4xARRWM3iHHzsKukDM1nZQh6A7Xg",
    authDomain: "tradeforeveryone-f1f9d.firebaseapp.com",
    projectId: "tradeforeveryone-f1f9d",
    storageBucket: "tradeforeveryone-f1f9d.appspot.com",
    messagingSenderId: "387514272816",
    appId: "1:387514272816:web:7e4b7b04472780916771f5",
    measurementId: "G-DB4T0R9ZGX"

  }); 
  import { getDatabase, ref, set } from "firebase/database";

function writeUserData(name, username, email, password) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
  });
}

const auth = getAuth(firebaseApp);

onAuthStateChanged(auth, user => {
    if(user != null ) {
        console.log('logged in!');
    } else {
        console.log('Successfull');
    }
});
/**DeneyselÇalışma */
const user = getUser(firebaseApp) ; 

{ 
"name" ; {
"username" ; {
"email" ; {
"password"; {
}
}
}
}
var btnLog=document.getElementById("btn");
	btnLog.onclick=function(){
        if(user === true)
		window.alert("Siteme Hoşgeldiniz");
        else {
            Window.alert("Tekrar Deneyiniz!")
        }
	}
var btnregister=document.getElementById("register") ; 
    btnregister.onclick=function(){
        if(user===firebaseApp) 
            window.location.port="http://127.0.0.1:5501/src/index.html";
        else {
            windows.alert("Bilgiler Eksik Girildi!")
        }
        }
    }

