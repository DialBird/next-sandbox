import React, { createContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router'

import firebase from '../config/firebase';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState(null);

  const login = async (email, password) => {
    await firebase.auth().signInWithEmailAndPassword(email, password).catch(error => {
      alert(error);
    });
    router.push('/dashboard');
  }

  const signup = async (email, password) => {
    const { user } =
      await firebase.auth().createUserWithEmailAndPassword(email, password).catch(error => {
        alert(error);
      });
    router.push('/dashboard');
  }

  const logout = async () => {
    await firebase.auth().signOut().catch(error => alert(error));
    router.push('/');
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        login,
        signup,
        logout,
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
