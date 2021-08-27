import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

// we need to somehoe seed the database

// we need a config here
const config = {
    
    apiKey: "AIzaSyA6NCH7_ENaVcE4A4KFbRKM0NTsJuhnPGc",
    authDomain: "netflix-clone-c6843.firebaseapp.com",
    projectId: "netflix-clone-c6843",
    storageBucket: "netflix-clone-c6843.appspot.com",
    messagingSenderId: "503664101878",
    appId: "1:503664101878:web:8cc5800f1f2997b13a9fd7"
     
};

const firebase = Firebase.initializeApp(config);

seedDatabase(firebase);

export { firebase };