import { initializeApp } from "firebase/app";
import {
  signInWithPopup,
  GoogleAuthProvider,
  getAuth,
  signOut,
} from "firebase/auth";

import { getFirestore, doc } from "firebase/firestore";
// const firebaseConfig = {
//   apiKey: process.env.REACT_API_KEY,
//   authDomain: process.env.REACT_AUTH_DOMAIN,
//   projectId: process.env.REACT_PROJECT_ID,
//   storageBucket: process.env.REACT_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_MESSENGER_SERVICE_ID,
//   appId: process.env.REACT_APP_ID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyCjKdmzkINBzwuDTyT_4gWsXdacMQATnOI",
  authDomain: "iiit-placementsite.firebaseapp.com",
  projectId: "iiit-placementsite",
  storageBucket: "iiit-placementsite.appspot.com",
  messagingSenderId: "62668471555",
  appId: "1:62668471555:web:cee15f464afe2a06bafd36",
};

initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
};

export const signOutUser = async () => await signOut(auth);
