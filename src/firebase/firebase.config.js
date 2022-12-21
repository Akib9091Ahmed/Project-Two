// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBV3Wa8fSE-Yvk9aZFJwkn17QG_zrBvUQ0",
  authDomain: "webproject-50762.firebaseapp.com",
  projectId: "webproject-50762",
  storageBucket: "webproject-50762.appspot.com",
  messagingSenderId: "1081902560607",
  appId: "1:1081902560607:web:2dd3bae6f6ff79122032ea"
};

/* apiKey: "AIzaSyBV3Wa8fSE-Yvk9aZFJwkn17QG_zrBvUQ0",
  authDomain: "webproject-50762.firebaseapp.com",
  projectId: "webproject-50762",
  storageBucket: "webproject-50762.appspot.com",
  messagingSenderId: "1081902560607",
  appId: "1:1081902560607:web:2dd3bae6f6ff79122032ea"*/

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;