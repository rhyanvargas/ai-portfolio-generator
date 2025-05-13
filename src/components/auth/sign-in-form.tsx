"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "lucide-react";
import { signIn } from "next-auth/react";

export function SignInForm() {
  const [isLoading, setIsLoading] = useState({
    github: false,
    linkedin: false
  });

  const handleSignIn = async (provider: "github" | "linkedin") => {
    try {
      // Set loading state for the specific provider
      setIsLoading(prev => ({ ...prev, [provider]: true }));
      
      // Fetch CSRF token first
      const csrfResponse = await fetch("/api/auth/csrf");
      const { csrfToken } = await csrfResponse.json();
      
      // Then initiate sign in with the CSRF token
      await signIn(provider, {
        callbackUrl: "/dashboard",
        redirect: true,
        csrfToken
      });
    } catch (error) {
      console.error(`Error signing in with ${provider}:`, error);
    } finally {
      setIsLoading(prev => ({ ...prev, [provider]: false }));
    }
  };

  return (
    <div className="grid grid-cols-1 gap-4">
      <Button
        variant="outline"
        className="w-full flex items-center gap-2"
        onClick={() => handleSignIn("github")}
        disabled={isLoading.github}
      >
        <GithubIcon className="h-4 w-4" />
        {isLoading.github ? "Signing in..." : "Sign in with GitHub"}
      </Button>
      
      <Button
        variant="outline"
        className="w-full flex items-center gap-2"
        onClick={() => handleSignIn("linkedin")}
        disabled={isLoading.linkedin}
      >
        <LinkedinIcon className="h-4 w-4" />
        {isLoading.linkedin ? "Signing in..." : "Sign in with LinkedIn"}
      </Button>
    </div>
  );
}
