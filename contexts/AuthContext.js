import React, { createContext, useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router'

import firebase from '../config/firebase';

const AuthContext = createContext();

const beforeLoginPaths = [
  '/',
  '/login',
  '/signup'
]

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthReady, setIsAuthReady] = useState(false);

  const login = useCallback((email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(res => {
        router.push('/dashboard');
      })
      .catch(error => {
        alert(error);
      });
  })

  const signup = useCallback((email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(res => {
        router.push('/dashboard');
      })
      .catch(error => {
        alert(error);
      });
  });

  const logout = useCallback(() => {
    firebase.auth().signOut()
      .then(res => router.push('/'))
      .catch(error => alert(error));
  });

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      const pathname = window.location.pathname
      if (!user && !beforeLoginPaths.includes(pathname)) {
        router.push('/')
      } else if (user && beforeLoginPaths.includes(pathname)) {
        router.push('/dashboard')
      }
      setCurrentUser(user);
      setIsAuthReady(true);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isAuthReady,
        login,
        logout,
        signup,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
