// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAzJ606AEpya9-WRIH8cVmER26L06Ry_84",
    authDomain: "biotech-4120a.firebaseapp.com",
    projectId: "biotech-4120a",
    storageBucket: "biotech-4120a.appspot.com",
    messagingSenderId: "689785462295",
    appId: "1:689785462295:web:ed2cf835f5f6b38f0dc652",
    measurementId: "G-BH0LVNRW5W"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
