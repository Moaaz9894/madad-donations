// Firebase configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyByMfc-wXuHqyB0wNkO5NVg7yGA8V8-JVo",
  authDomain: "madad-donations.firebaseapp.com",
  projectId: "madad-donations",
  storageBucket: "madad-donations.firebasestorage.app",
  messagingSenderId: "713022149467",
  appId: "1:713022149467:web:4945fe10abc6b11221407e"
};

export const app = initializeApp(firebaseConfig);