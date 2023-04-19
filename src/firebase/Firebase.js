import {getFirestore} from "firebase/firestore"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBeVjcoLJdlGc93cDhAfKnj_MyxqlAtwWM",
  authDomain: "rxstore-proyectoch.firebaseapp.com",
  projectId: "rxstore-proyectoch",
  storageBucket: "rxstore-proyectoch.appspot.com",
  messagingSenderId: "895048653480",
  appId: "1:895048653480:web:48e50e75dfccf1dd71409d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);