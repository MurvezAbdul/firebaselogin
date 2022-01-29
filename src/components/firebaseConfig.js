import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyDUfTnm1uRMTS9tBhVFVQ4Ke4087keAtu0",
  authDomain: "fir-connection-7c58f.firebaseapp.com",
  projectId: "fir-connection-7c58f",
  storageBucket: "fir-connection-7c58f.appspot.com",
  messagingSenderId: "974181338041",
  appId: "1:974181338041:web:55ea404c0b7ca3778cc468"
};


const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)