import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth"

const firebaseConfig = {

  apiKey: "AIzaSyBSTxJgU72MEceMD-WlRQKAW6c1YCyS25o",

  authDomain: "student-portal-e6a18.firebaseapp.com",

  projectId: "student-portal-e6a18",

  storageBucket: "student-portal-e6a18.appspot.com",

  messagingSenderId: "975277582464",

  appId: "1:975277582464:web:6d152ccb8886b2f64d5e65"

};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
