import NextAuth from 'next-auth'
// type of callback in next-auth and import this address in tsconfig.json in include section
declare module "next-auth" {
    interface User {
        email: string,
        username: string;
        token: string;
    }

    interface Session extends DefaultSession {
        user: User;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        email: string,
        username: string;
        token: string;
    }
}