import React from "react";
import { Button } from "./ui/button";
import { SignInButton, SignUpButton } from "@clerk/nextjs";

const SingIn = () => {
  return (
    <SignUpButton mode="modal">
      <button className="text-sm font-semibold hover:text-darkColor text-lightColor hover:cursor-pointer hoverEffect">
        Login
      </button>
    </SignUpButton>
  );
};

export default SingIn;
