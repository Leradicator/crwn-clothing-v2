import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCnyQ9BQe8jRrjbgNJtTqL247JS5t-nYyw",
  authDomain: "crwn-clothing-db-2eccb.firebaseapp.com",
  projectId: "crwn-clothing-db-2eccb",
  storageBucket: "crwn-clothing-db-2eccb.appspot.com",
  messagingSenderId: "12983842298",
  appId: "1:12983842298:web:f4e650afc5de13afeba043"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());
};
