// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBEa0x1COkQ4eJRSpRK_Tr3oa4zSSc_08M",
    authDomain: "facuprz-ecommercereact.firebaseapp.com",
    projectId: "facuprz-ecommercereact",
    storageBucket: "facuprz-ecommercereact.appspot.com",
    messagingSenderId: "44816215144",
    appId: "1:44816215144:web:a8b91b538726b2b7dadfdd",
    measurementId: "G-9NWLM25Z68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;