import React, { useState, useEffect, useContext } from 'react';
import { fireAuthorization } from '../../firebase.js';

export const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext)
};

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  function signUpUser(email, password) {
    return fireAuthorization.createUserWithEmailAndPassword(email, password)
  }

  useEffect(() => {
    const unsub = fireAuthorization.onAuthStateChanged(user => {
      setCurrentUser(user)
    })

    return unsub;
  }, [])


  const value = {
    currentUser,
    signUpUser
  };

  return (
    <AuthContext.Provider
      value = {value}
    >
      {children}
    </AuthContext.Provider>
  )
};