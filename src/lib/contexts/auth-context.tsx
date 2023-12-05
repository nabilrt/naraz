import { initializeApp } from "firebase/app";
import {
  User,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import firebaseConfig from "../firebase";

type AuthProviderType = {
  currentUser: any;
  signIn: any;
  signUp: any;
  signOut: any;
};

export const AuthProvider = createContext<AuthProviderType | null>(null);

export const AuthProviderContext = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  initializeApp(firebaseConfig);
  const [currentUser, setCurrentUser] = useState<User>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user!);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const signIn = (email: string, password: string) => {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signUp = async (fullName: string, email: string, password: string) => {
    const auth = getAuth();

    await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(auth.currentUser!, {
      displayName: fullName,
    });

    const user = auth.currentUser;

    setCurrentUser({
      ...user!,
    });
  };

  const signOut = () => {
    const auth = getAuth();
    return auth.signOut();
  };

  const value = { currentUser, signIn, signUp, signOut };

  return (
    <AuthProvider.Provider value={value}>
      {!loading && children}
    </AuthProvider.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthProvider);

  if (context === null) {
    throw new Error("useAuth must be used within a AuthProviderContext");
  }

  return context;
};
