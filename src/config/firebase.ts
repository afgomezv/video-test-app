import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-pvQHWryOXz0kMBHZxDTR_Bla0RVY4lY",
  authDomain: "skillsup-auth.firebaseapp.com",
  projectId: "skillsup-auth",
  storageBucket: "skillsup-auth.appspot.com",
  messagingSenderId: "1012810263830",
  appId: "1:1012810263830:web:909173bf96ca44913f7437",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
