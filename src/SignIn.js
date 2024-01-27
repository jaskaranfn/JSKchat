import React from 'react';
// import { auth } from './firebase';
import { getAuth, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth';

function SignIn() {
  const handleSignInWithGoogle = async () => {
    try {
      const auth = getAuth(); // Use getAuth to get the auth instance
      const provider = new GoogleAuthProvider();
      await signInWithRedirect(auth, provider);
    } catch (error) {
      console.error('Error signing in with Google:', error.message);
    }
  };

  return (<>
      <div className='signindiv'>
     
        <div >
      <h2 id='signinheading'>Sign In</h2>
        <div>
          <p> this is website made by jaskaran singh (@jaskaran_fn)Welcome to the future of seamless communication with our revolutionary chat application! PROTOchat</p> 
        </div>
      <button id='btnsi' onClick={handleSignInWithGoogle}>Sign In with Google</button>
    </div></div></>
  );
}

export default SignIn;

