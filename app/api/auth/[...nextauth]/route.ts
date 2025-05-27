import NextAuth from "next-auth";
import { authOptions } from "./auth";

const handler = NextAuth(authOptions);

// Export named functions for GET and POST
export { handler as GET, handler as POST };