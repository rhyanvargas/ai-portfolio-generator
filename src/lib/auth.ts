import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import LinkedIn from "next-auth/providers/linkedin";
import type { Session } from "next-auth";

// Define types for token and session to avoid TypeScript errors
type Token = {
  accessToken?: string;
  provider?: string;
  [key: string]: any;
};

type ExtendedSession = Session & {
  user?: {
    accessToken?: string;
    provider?: string;
    [key: string]: any;
  };
};

export const { handlers, auth, signIn, signOut } = NextAuth({
  debug: process.env.NODE_ENV === "development",
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
      authorization: {
        params: {
          // Request access to repositories and user data
          scope: "read:user user:email repo",
        },
      },
    }),
    LinkedIn({
      clientId: process.env.LINKEDIN_ID as string,
      clientSecret: process.env.LINKEDIN_SECRET as string,
      authorization: {
        params: {
          scope: "r_liteprofile r_emailaddress",
        },
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token and provider to the token
      if (account) {
        token.accessToken = account.access_token;
        token.provider = account.provider;
      }
      return token as Token;
    },
    async session({ session, token }) {
      // Send properties to the client
      if (session.user) {
        // Use type assertion to safely add properties
        const user = session.user as any;
        user.accessToken = token.accessToken;
        user.provider = token.provider;
      }
      return session as ExtendedSession;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  cookies: {
    sessionToken: {
      name: `next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
      },
    },
    callbackUrl: {
      name: `next-auth.callback-url`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
      },
    },
    csrfToken: {
      name: "next-auth.csrf-token",
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
      },
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});
