// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtF6IBB3ZJ3QKFT-M-6kyQ5HB8SdBmew8",
  authDomain: "code-recet-e93dc.firebaseapp.com",
  projectId: "code-recet-e93dc",
  storageBucket: "code-recet-e93dc.appspot.com",
  messagingSenderId: "682176336476",
  appId: "1:682176336476:web:47850b6eed8e614e238c99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const exports = {db, storage}

export default exports