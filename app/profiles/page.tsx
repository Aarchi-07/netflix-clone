import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/auth";
import ProfileGate from "@/components/ProfileGate";

export default async function Profiles() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect('/auth');
    }

    return (
        <ProfileGate />
    );
}