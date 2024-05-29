import axios from "axios";
import NextAuth from "next-auth";
import { NextAuthOptions } from "next-auth";
import { decode } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          // const response = await fetch(
          //   "https://nestjs-backend-livid.vercel.app/auth/login",
          //   {
          //     method: "POST",
          //     headers: {
          //       "Content-Type": "application/json",
          //     },
          //     body: JSON.stringify({
          //       email: credentials?.email,
          //       password: credentials?.password,
          //     }),
          //   },
          // );

          const response = await axios.post(
            "https://nestjs-backend-livid.vercel.app/auth/login",
            {
              email: credentials?.email,
              password: credentials?.password,
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            },
          );

          if (!response.data) {
            throw new Error("Falha na autenticação");
          }

          // const user = await response);

          var jwt = require("jsonwebtoken");

          const decode = jwt.decode(response.data.token);

          console.log(decode);

          if (decode) {
            return {
              id: decode.id,
              name: decode.name,
              email: decode.email,
              accessToken: response.data.token,
            };
          } else {
            throw new Error("Token não fornecido");
          }
        } catch (error) {
          console.error("Erro na autorização", error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
