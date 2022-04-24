import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged,
  // updateEmail,
  // updatePassword,
} from "firebase/auth";
import useFirebaseDB from "../hooks/useFirebaseDB";
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const { getFirebaseDB } = useFirebaseDB();
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
    // https://stackoverflow.com/questions/61930133/firebase-auth-signinwithemailandpassword-using-try-catch-async-await-uncaught
  }

  function logout() {
    return signOut(auth).then(() => {
      setCurrentUser();
      navigate("/");
    });
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  function updateEmail(email) {
    return updateEmail(currentUser, email);
  }

  function updatePassword(password) {
    return updatePassword(currentUser, password);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      const userDoc = user && (await getFirebaseDB("users", user.uid));
      userDoc && setCurrentUser({ ...user, extraFields: userDoc });
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, [getFirebaseDB]);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
