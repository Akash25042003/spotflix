
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import { getAuth, sendPasswordResetEmail } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCOZSWm-sZsL74ARaCFkSaAj2AM3_DmawY",
    authDomain: "spotflix-e9fc6.firebaseapp.com",
    projectId: "spotflix-e9fc6",
    storageBucket: "spotflix-e9fc6.firebasestorage.app",
    messagingSenderId: "391478381222",
    appId: "1:391478381222:web:93b5d4a720655f3dd8c267",
    measurementId: "G-YTP35Z05M5"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


window.resetPassword = function () {
    const email = document.getElementById("email").value;
    sendPasswordResetEmail(auth, email)
        .then(() => {
            alert("Password reset email sent! Check your inbox.");
        })
        .catch(error => {
            console.error("Error: ", error.message);
            alert("Error: " + error.message);
        });
};