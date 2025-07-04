import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/auth";
import prismadb from "@/lib/prismadb";

const serverAuth = async () => {
    const session = await getServerSession(authOptions);

    if(!session?.user?.email) {
        throw new Error("Not signed in");
    }

    const currentUser = await prismadb.user.findUnique({
        where: {
            email: session.user.email,
        }
    });

    if (!currentUser) {
        throw new Error("Not signed in");
    }

    return { currentUser };
};

export default serverAuth;