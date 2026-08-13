// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { 
    getAuth,
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyB_bUwIKV8xOHiyj6q6zLk8tzDhZnozVoM",
  authDomain: "netflix-clone-952c4.firebaseapp.com",
  projectId: "netflix-clone-952c4",
  storageBucket: "netflix-clone-952c4.firebasestorage.app",
  messagingSenderId: "511369994002",
  appId: "1:511369994002:web:276bda1b676b7453599dcb",
  measurementId: "G-Y1SVC8VJHM",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const signup = async (name, email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error)
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
};
const login = async(email,password)=>{
try {
    
    await signInWithEmailAndPassword(auth,email,password)
} catch (error) {
    console.log(error);
toast.error(error.code.split("/")[1].split("-").join(" "));
}
}
const logout=async () => {
    try {
       await signOut(auth);
    } catch (error) {
        toast.error(error.code.split("/")[1].split("-").join(" "));
    }
}
export {auth,db ,login,signup,logout};
