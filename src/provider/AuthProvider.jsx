import React, { createContext, useState } from 'react';
export const AuthContext = createContext();

import { getAuth } from "firebase/auth";
import app from '../firebase.config';

const auth = getAuth(app);

const AuthProvider = () => {
  const [user, setUser]= useState(null);
  const [loading, setLoading]= useState(true);

  const authInfo={
    user,
    loading,

  }

  return (
    <AuthContext.Provider value={authInfo}>
      
    </AuthContext.Provider>
  );
};

export default AuthProvider;