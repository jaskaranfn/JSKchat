// App.js (or index.js)
import React, { useEffect, useState } from 'react';
import { auth } from './firebase';
import Chat from './Chat';
import SignIn from './SignIn';
import './App.css'


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="app-container">
      {user ? <Chat /> : <SignIn />}
    </div>
  );
}

export default App;
