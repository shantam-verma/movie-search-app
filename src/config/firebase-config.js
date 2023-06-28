import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: "search-movie-app-auth.firebaseapp.com",
  projectId: "search-movie-app-auth",
  storageBucket: "search-movie-app-auth.appspot.com",
  messagingSenderId: "363735110224",
  appId: "1:363735110224:web:e3f034a2c18814bc3d3755",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
