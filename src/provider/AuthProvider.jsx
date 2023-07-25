import { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext();

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase.config';

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

const signUp = (email, password)=>{
  setLoading(true)
  return createUserWithEmailAndPassword(auth,email,password)
};

const logIn = (email,password)=>{
  setLoading(true)
  return signInWithEmailAndPassword(auth,email,password)
};

const logOut =()=>{
  return signOut(auth);
}



  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    })
    return () => {
      unsubscribed();
    }
  }, [])

  const authInfo = {
    user,
    loading,
    signUp,
    logIn,
    logOut
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;