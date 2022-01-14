import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAgfVBuxDrREmZvPSKpzS07G7CZKtjuykQ",
    authDomain: "voorbereidings-project.firebaseapp.com",
    projectId: "voorbereidings-project",
    storageBucket: "voorbereidings-project.appspot.com",
    messagingSenderId: "768836089462",
    appId: "1:768836089462:web:1b26b5ccc70cf011869157",
    measurementId: "G-BJS32JMLTY"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();