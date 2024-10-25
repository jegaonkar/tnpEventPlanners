import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBoShZWASvtW4-X9QhSd8iw88hRfrYxu0w",
  authDomain: "tnptry-f282c.firebaseapp.com",
  projectId: "tnptry-f282c",
  storageBucket: "tnptry-f282c.appspot.com",
  messagingSenderId: "960333825790",
  appId: "1:960333825790:web:8540625bbab00ef2db87af",
  measurementId: "G-2B3S1XF56X",
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app); // Create the database instance

export { database };
