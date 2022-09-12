import React from 'react'
import styles from './LoginWithGoogle.module.css'
import { FcGoogle } from 'react-icons/fc';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


function LoginWithGoogle() {
  const provider = new GoogleAuthProvider();

  const auth = getAuth();

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
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
  }

  return (
    <div className={styles['main-container']} onClick={handleLogin}>
      <FcGoogle />
      <div className={styles['main-label']}>
        Google
      </div>
    </div>
  )
}

export default LoginWithGoogle