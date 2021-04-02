import React, { useState, useEffect, useContext } from 'react';
import { fireAuthorization } from '../../firebase.js';

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext)
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  const signup = (email, password) => {
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
    signup
  };

  return (
    <AuthContext.Provider value = {value}>
      {children}
    </AuthContext.Provider>
  )
};