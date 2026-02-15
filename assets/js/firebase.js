import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-analytics.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCjUb8PCRGvl3ARR18EmLCj03gIaYrqZNM",
  authDomain: "innerloop-4a944.firebaseapp.com",
  projectId: "innerloop-4a944",
  storageBucket: "innerloop-4a944.firebasestorage.app",
  messagingSenderId: "860903409138",
  appId: "1:860903409138:web:8195437444681d4737576b",
  measurementId: "G-P8X8Y05JGJ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export async function submitEmail(email) {
  await addDoc(collection(db, "waitlist"), {
    email: email,
    timestamp: serverTimestamp()
  });
}