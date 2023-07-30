import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {

  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
  ],
  // for private route
  pages: {
    signIn: "/login"
  },
}

export default NextAuth(authOptions)