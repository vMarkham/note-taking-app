// src/components/SignIn.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const SignIn: React.FC = () => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    try {
      await signInWithPopup(auth, provider);
      // Redirect or update app state on successful sign-in.
      if (auth.currentUser) {
        console.log(auth.currentUser);
        console.log("User is signed in with Google!");
        navigate("/notes");
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error("An unknown error occurred.");
      }
    }
  };

  return (
    <div>
      <button
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        onClick={signInWithGoogle}
      >
        Sign In with Google
      </button>
    </div>
  );
};

export default SignIn;
