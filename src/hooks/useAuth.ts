// src/hooks/useAuth.ts
// useAuth.ts
import { useState, useEffect } from "react";
import { auth } from "../firebase";

interface User {
  displayName: string | null;
  email: string | null;
    uid: string;
}

const useAuth = (): User | null => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser({
          displayName: currentUser.displayName,
          email: currentUser.email,
          uid: currentUser.uid,
        });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return user;
};

export default useAuth;
