
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';

// Firebase Configuration
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


window.signUp = function () {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            alert("Signup successful!");
            console.log('User signed up:', userCredential.user);
            window.location.href = "/HTML/authendication/welcome.html";
        })
        .catch(error => {
            console.error(error.message);
            alert("Error: " + error.message);
        });
}