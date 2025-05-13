"use client";

import { signIn } from "next-auth/react";
import { ReactNode, useState } from "react";
import { useRouter } from "next/navigation";

interface SignInButtonProps {
  provider: "github" | "linkedin";
  children: ReactNode;
}

export function SignInButton({ provider, children }: SignInButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      setIsLoading(true);
      // First fetch the CSRF token
      const csrfResponse = await fetch("/api/auth/csrf");
      const { csrfToken } = await csrfResponse.json();
      
      // Then sign in with the CSRF token
      await signIn(provider, {
        callbackUrl: "/dashboard",
        redirect: true,
        csrfToken
      });
    } catch (error) {
      console.error("Sign in error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full" onClick={handleSignIn}>
      {children}
    </div>
  );
}
