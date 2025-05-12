"use client";
import { SignInButton } from "@clerk/nextjs";
import React from "react";
import { Button } from "./ui/button";

const SignIn = () => {
  return (
    <SignInButton mode="modal">
      <Button className="text-sm font-semibold hover:text-darkColor text-lightColor hover:cursor-pointer hoverEffect">
        Login
      </Button>
    </SignInButton>
  );
};

export default SignIn;
