import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect, getRedirectResult, signInWithPopup  ,GithubAuthProvider  ,  FacebookAuthProvider} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var button = document.getElementById("btn1");
button.addEventListener("click", () => {

    var email = document.getElementById("inp1").value;
    var password = document.getElementById("inp2").value;
    var name = document.getElementById("name").value;
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password , name)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            window.location.href = "./login.html"
            // ...
        })
        .catch(() => {
            // const errorCode = error.code;
            // const errorMessage = error.message;
            alert("your email is alredy exist in the database so please create a new email");
            // ..
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


//login eith google
//login eith google
const googlebtn = document.getElementById("google")
googlebtn.addEventListener("click", () => {
    // signInWithRedirect(auth, provider);
    provider1.setCustomParameters({
        'login_hint': 'user@example.com'
    });
    signInWithPopup(auth, provider1)
        .then((result1) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result1.user;
            // IdP data available using getAdditionalUserInfo(result)
            window.location.href = "./index.html"
            // ...
        }).catch((error1) => {
            // Handle Errors here.
            const errorCode = error1.code;
            const errorMessage = error1.message;
            // The email of the user's account used.
            const email = error1.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error1);
            console.log(errorMessage , credential , email , errorCode);
            // ...
        });
        
    })
    var login1 = document.getElementById("logi")
    login1.addEventListener("click", () => {
    window.location.href = "./login.html"
})
//login eith google
//login eith google



//login eith facebook
//login eith facebook
const facebtn = document.getElementById("face")

facebtn.addEventListener("click", () =>{
    // provider.addScope('user_birthday');
    provider2.setCustomParameters({
        'display': 'popup'
    });
    signInWithPopup(auth, provider2)
    .then((result) => {
        // The signed-in user info.
        const user = result.user;
        
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        
        // IdP data available using getAdditionalUserInfo(result)
        // ...
    })
    .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);
        
        // ...
    });
})
// })
        
    
    //login eith facebook
    //login eith facebook
    
    const gitbtn = document.getElementById("git")
    gitbtn.addEventListener("click" , ()=>{
        provider.setCustomParameters({
            'allow_signup': 'false'
          });
          signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GithubAuthProvider.credentialFromError(error);
    // ...
  });

    })
    
    
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const auth = getAuth(app);
    const provider1 = new GoogleAuthProvider(app);
    const provider2 = new FacebookAuthProvider(app);
    const provider = new GithubAuthProvider(app); 