
import { initializeApp } from "firebase/app";
import { getAuth, getuAth } from "firebase/auth";
import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAJzVeYCmVJ7S3dXR6Di3uXltEcNEOJ8DY",
  authDomain: "fir-todo-list-9b4e3.firebaseapp.com",
  projectId: "fir-todo-list-9b4e3",
  storageBucket: "fir-todo-list-9b4e3.appspot.com",
  messagingSenderId: "1015962906888",
  appId: "1:1015962906888:web:b7699caafd2394b2eb3cbd"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);