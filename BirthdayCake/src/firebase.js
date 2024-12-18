// Import Firebase services
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyCLJ9N6ckDwiOFuwhcMiI-CcVf70xYbpPU",
    authDomain: "birthdaycake-e9461.firebaseapp.com",
    projectId: "birthdaycake-e9461",
    storageBucket: "birthdaycake-e9461.firebasestorage.app",
    messagingSenderId: "823007045446",
    appId: "1:823007045446:web:60d28c19349a8cfcd06747",
    measurementId: "G-6BHH2NFVBQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore (database)
export const db = getFirestore(app);
