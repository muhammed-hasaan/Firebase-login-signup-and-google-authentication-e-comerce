import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect, getRedirectResult, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


//   })
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var button = document.getElementById("btn1");
button.addEventListener("click", () => {

    var email = document.getElementById("inp1").value;
    var password = document.getElementById("inp2").value;
    var name = document.getElementById("naam").value;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password , name)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(email, password)
            console.log(user);
            window.location.href = "./index.html"
            localStorage.setItem("arr",JSON.stringify(arr));
           var sue = JSON.parse(localStorage.getItem("arr"))
           document.getElementById("users").innerText=sue
           console.log(sue)


        })
        .catch((error) => {
            alert("This Email doesnot exist in Firebase");
        });

})

const firebaseConfig = {
    apiKey: "AIzaSyD3PmQwBxjfkUTrQzgSCJrki3ZKXf3D_xg",
    authDomain: "login-signup-7ff44.firebaseapp.com",
    projectId: "login-signup-7ff44",
    storageBucket: "login-signup-7ff44.appspot.com",
    messagingSenderId: "26129023367",
    appId: "1:26129023367:web:41237dc374e08b64005322",
    measurementId: "G-55DHTJMQ53"
};


var sign = document.getElementById("sine")
sign.addEventListener("click", () => {
    window.location.href = "./index.html"
})

// Initialize Firebase
const googlebtn = document.getElementById("google")
googlebtn.addEventListener("click", () => {
    // signInWithRedirect(auth, provider);
    provider.setCustomParameters({
        'login_hint': 'user@example.com'
    });
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            window.location.href = "./index.html"
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });

})


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider(app);
const auth = getAuth(app);