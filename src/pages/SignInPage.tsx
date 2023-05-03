// src/pages/SignInPage.tsx
import React from "react";
import SignIn from "../components/SignIn";

const SignInPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full py-6 px-4">
        <h1 className="text-3xl font-bold mb-4">Sign In</h1>
        <SignIn />
        <p className="mt-4 text-gray-600">
          Don't have an account?{" "}
          <a href="#" className="text-blue-500 hover:text-blue-700 font-medium">
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
