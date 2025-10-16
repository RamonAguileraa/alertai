"use client";

import Link from "next/link";

// Versión simplificada del botón de signin sin NextAuth
// TODO: Integrar con Supabase Auth cuando esté configurado
const ButtonSignin = ({ text = "Get started", extraStyle }) => {
  return (
    <Link
      href="/login"
      className={`btn ${extraStyle ? extraStyle : ""}`}
    >
      {text}
    </Link>
  );
};

export default ButtonSignin;