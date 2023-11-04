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
  User,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  getDocs,
  collection,
} from "firebase/firestore";
import { PersonalDetails } from "./modules/portal/Profile/components/Personal/PersonalDetails.types";
import { AcademicDetails } from "./modules/portal/Profile/components/Academic/AcademicDetails.types";
import { Company } from "./modules/portal/Companies/Company.types";

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
export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalInfo: { role: string } | undefined
) => {
  const userDocRef = doc(db, "users", userAuth!.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log("error creating the user");
    }
  }

  return userDocRef;
};

export const getUserDetails = async (userAuth: User) => {
  const personalDetailsRef = doc(
    db,
    "users",
    userAuth!.uid,
    "details",
    "personalDetails"
  );
  const academicDetailsRef = doc(
    db,
    "users",
    userAuth!.uid,
    "details",
    "academicDetails"
  );
  try {
    const personalDetailsSnapshot = await getDoc(personalDetailsRef);
    const academicDetailsSnapshot = await getDoc(academicDetailsRef);

    const personalDetails = personalDetailsSnapshot.exists()
      ? personalDetailsSnapshot.data()
      : null;
    const academicDetails = academicDetailsSnapshot.exists()
      ? academicDetailsSnapshot.data()
      : null;

    return { personalDetails, academicDetails };
  } catch (error) {
    console.error("Error fetching user details:", error);
    throw error; // Rethrow the error or handle it according to your needs
  }
};

export const updateDetails = async (
  userAuth: User,
  personal_formfields: PersonalDetails,
  academic_formfields: AcademicDetails
) => {
  const userPersonalDoc = doc(
    db,
    "users",
    userAuth!.uid,
    "details",
    "personalDetails"
  );
  const userAcademicDoc = doc(
    db,
    "users",
    userAuth!.uid,
    "details",
    "academicDetails"
  );
  try {
    await setDoc(userPersonalDoc, {
      ...personal_formfields,
    });
    await setDoc(userAcademicDoc, {
      ...academic_formfields,
    });
  } catch (error) {
    console.log("Couldn't update the personal details");
  }
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

export const getUser = async (userAuth: User) => {
  const userRef = doc(db, "users", userAuth!.uid);
  const userSnapshot = await getDoc(userRef);
  return userSnapshot.data();
};

// Companies Bullshit
export const addCompany = async (company: Company) => {
  const companyRef = doc(db, "companies", company.name);
  const companySnapshot = await getDoc(companyRef);
  if (!companySnapshot.exists()) {
    try {
      await setDoc(companyRef, { ...company });
    } catch (error) {
      console.log("Couldn't Add the company to the list");
    }
  }
};

export const getAllCompanies = async () => {
  const allCompaniesSnapshots = await getDocs(collection(db, "companies"));
  const allCompaniesData: Company[] = [];
  if (allCompaniesSnapshots) {
    allCompaniesSnapshots.forEach((doc) =>
      allCompaniesData.push(doc.data() as Company)
    );
  }
  return allCompaniesData;
};
