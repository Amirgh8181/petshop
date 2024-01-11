import axios from "axios"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const url = process.env.CLIENT_SOURCE_URL as string

interface loginResponseData{
  status:string, 
  token:string, 
  username:string, 
  id:string, 
  email:string, 
}


const handler = NextAuth({
  session: {
    strategy: "jwt"
  },
  providers: [
    CredentialsProvider({
      // initial credential 
      credentials: {
        email: {},
        password: {}
      },
      // request to api and check valid user auth data
      async authorize(credentials, req) {
        const credentialDetail = { email: credentials?.email as string, password: credentials?.password as string }
        //console.log(credentialDetail);

        const request = await axios.post(`${url}/api/auth/login`, credentialDetail, {
          headers: { "Content-Type": "application/json" },
        })
        // if user data is valid return response and save response in user in callback jwt
        if (request.data) {
          console.log(request.data);
          
          const response: loginResponseData = {
            status: request.data?.status,
            token: request.data?.token,
            username: request.data?.username,
            id: request.data?.id,
            email: request.data?.email
          }
          return response
        }
        //if user data is unvalid return null
        return null;

      }
    })
  ],
  // show custom login form for auth credential
  pages: {
    signIn: "/auth/Login"
  },
  // create custom session and this type in types/nexr-auth.d.ts
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email
        token.username = user.username;
        token.token = user.token;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.email = token.email;
        session.user.username = token.username;
        session.user.token = token.token;
      }
      return session;
    },

  }

})

export { handler as GET, handler as POST }