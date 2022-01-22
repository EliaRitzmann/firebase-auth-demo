import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAGYAvQr6V703Y0OQVFa7NHxAQkUz66UkY",
    authDomain: "auth-demo-15e93.firebaseapp.com",
    projectId: "auth-demo-15e93",
    storageBucket: "auth-demo-15e93.appspot.com",
    messagingSenderId: "819513343231",
    appId: "1:819513343231:web:61ac925b4c3c369b3720ca"
  };

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

export default app