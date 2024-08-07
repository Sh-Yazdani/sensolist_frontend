import { sendOtpToken } from "@/ApiCall/authentication";
import NextAuth, { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";

const refreshAccessToken = async (token: JWT) => {
  try {
    const res = await fetch(
      "https://sensolist-backend.vercel.app/auth/refresh",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }
    );
    const refreshedTokens = await res.json();

    if (!res.ok) throw refreshedTokens;

    return {
      ...token,
      accessToken: refreshedTokens.accessToken,
      expiresOn: refreshedTokens.expiresOn,
      refreshToken: refreshedTokens.refreshToken ?? token.refreshToken,
    };
  } catch (e) {
    console.error("Failed to refresh access token", e);
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
};

const authOptions: NextAuthOptions = {
  secret: process.env.JWT_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        otpToken: { label: "OTP Token", type: "text" },
        code: { label: "Code", type: "text" },
      },
      authorize: async (credentials) => {
        if (!credentials) return null;
        const response = await sendOtpToken(
          credentials.code,
          credentials.otpToken
        );
        if (response.statusCode === 200) {
          return {
            ...response,
            id: "id" + Math.random().toString(16).slice(2),
          };
        } else {
          throw Error(response.message || "Invalid credentials");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Store the access token in the JWT token
      if (user) {
        token.accessToken = user.accessToken;
        token.expiresOn = user.expiresOn;
      }
      if (Date.now() < (token.expiresOn as number)) {
        return token;
      }

      return refreshAccessToken(token);
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken as string;
      session.expiresOn = token.expiresOn as string;
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  pages: { signIn: "/authentication/login" },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
