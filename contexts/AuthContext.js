import React, { createContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router'

import firebase from '../config/firebase';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState(null);

  const login = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(res => {
        router.push('/dashboard');
      })
      .catch(error => {
        alert(error);
      });
  }

  const signup = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(res => {
        router.push('/dashboard');
      })
      .catch(error => {
        alert(error);
      });
  }

  const logout = () => {
    firebase.auth().signOut()
      .then(res => router.push('/'))
      .catch(error => alert(error));
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
