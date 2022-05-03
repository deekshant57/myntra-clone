import { createContext, useState, useEffect, useContext } from "react";
import { auth } from '../firebase';

export const AuthContext = createContext();

export function useAuth() {
   return useContext(AuthContext);
}

export const AuthContextProvider = ({ children }) => {

   const [currentUser, setCurrentUser] = useState();

   function signup(email, password) {
      return auth.createUserWithEmailAndPassword(email, password);
   }

   useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
         setCurrentUser(user);
      });

      return unsubscribe;
   }, []);

   return (
      <AuthContext.Provider value={{ currentUser, signup }}>
         {children}
      </AuthContext.Provider>
   );
};
