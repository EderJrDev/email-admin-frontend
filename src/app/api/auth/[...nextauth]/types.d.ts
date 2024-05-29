// types.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    accessToken: string | unknown;
  }

  interface Session {
    accessToken: string | unknown;
  }

  interface JWT {
    accessToken: string | unknown;
  }
}
