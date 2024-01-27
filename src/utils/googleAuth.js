import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBWdwwE5PmfvNJOS7E5bBdo3wAHvbVa8mQ",
    authDomain: "genai-68e2a.firebaseapp.com",
    projectId: "genai-68e2a",
    storageBucket: "genai-68e2a.appspot.com",
    messagingSenderId: "308824446098",
    appId: "1:308824446098:web:6e86e02a6f6b7eee8dc24b"
  };
// Initialize the Firebase app
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
