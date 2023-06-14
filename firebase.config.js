// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, GithubAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAU0NM8mvK6ncUhbP6VUck5PzXrEw9AzQM",
  authDomain: "git-connected-2229a.firebaseapp.com",
  projectId: "git-connected-2229a",
  storageBucket: "git-connected-2229a.appspot.com",
  messagingSenderId: "536737870416",
  appId: "1:536737870416:web:c93c54a6cc167e575a1755"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GithubAuthProvider(app)

const db = getFirestore()

export { auth, db, provider }