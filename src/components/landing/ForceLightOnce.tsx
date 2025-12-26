// src/components/landing/ForceLightOnce.tsx
"use client";
import { useEffect } from "react";

// Forces the landing page to render in light theme only.
export default function ForceLightOnce() {
  useEffect(() => {
    const html = document.documentElement;
    html.classList.remove("dark");            // for darkMode: 'class'
    html.setAttribute("data-theme", "light"); // for darkMode: ['class','[data-theme="dark"]']
  }, []);
  return null;
}