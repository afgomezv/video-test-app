//* React
import { FC, ReactNode, createContext, useEffect, useState } from "react";

//* Firebase
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  User,
} from "firebase/auth";
import { auth } from "../config/firebase";

interface IAuthContext {
  user?: User | null;
  isLoading: boolean;

  //*methods
  login: (email: string, password: string) => void;
  singup: (email: string, password: string) => void;
  logout: () => void;
}

interface Props {
  children: ReactNode;
}

export const authContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const login = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password);
  };

  const singup = (email: string, password: string) =>
    createUserWithEmailAndPassword(auth, email, password);

  const logout = () => signOut(auth);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser: User | null) => {
      if (currentUser !== null) {
        setUser(currentUser);
        setIsLoading(false);
      } else {
        setUser(null);
        setIsLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <authContext.Provider value={{ user, isLoading, login, singup, logout }}>
      {children}
    </authContext.Provider>
  );
};
