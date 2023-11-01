/* eslint-disable @typescript-eslint/no-explicit-any */
import { initializeApp } from "firebase/app";
import {
  signInWithPopup,
  GoogleAuthProvider,
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { IUser } from "./projectX-sdk";

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
const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth: IUser) => {
  const userDocRef = doc(db, "users", userAuth!.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { email, role } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        email,
        createdAt,
        role,
      });
    } catch (error) {
      console.log("error creating the user");
    }
  }

  return userDocRef;
};

export const createAuthUserUsingEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
};
export const signOutUser = async () => await signOut(auth);
