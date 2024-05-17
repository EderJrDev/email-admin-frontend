import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const nextAuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },

      async authorize(credentials, req) {
        const response = await fetch(
          "https://nestjs-backend-livid.vercel.app/auth/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
          },
        );

        const data = await response.json();
        console.log("dataa", data);
        if (response.ok && data.token) {
          return data;
        }

        return null;
      },
    }),
  ],

  pages: {
    signIn: "/",
  },
  // callbacks: {
  //   async jwt({ token, user }) {
  //     // Add the token to the jwt object if available
  //     if (user) {
  //       token.accessToken = user.accessToken; // Adjust this based on your token structure
  //     }
  //     return token;
  //   },
  //   async session({ session, token }) {
  //     // Add the token to the session object
  //     if (token) {
  //       session.accessToken = token.accessToken;
  //     }
  //     return session;
  //   },
  // },
};

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST, nextAuthOptions };
