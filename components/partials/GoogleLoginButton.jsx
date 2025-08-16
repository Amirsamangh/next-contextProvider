"use client";
import React from "react";
import { motion } from "framer-motion";

export default function GoogleLoginButton({ text = "ورود با گوگل", onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center justify-center gap-3 rounded-3xl
                 bg-white px-4 py-2 mx-4 text-neutral-800
                 shadow-sm ring-1 ring-neutral-200 transition-all
                 hover:shadow-md hover:ring-neutral-300 cursor-pointer"
    >
      <img
        src="https://www.svgrepo.com/show/355037/google.svg"
        alt="Google"
        className="h-5 w-5"
      />
      <span>{text}</span>
    </button>
  );
}