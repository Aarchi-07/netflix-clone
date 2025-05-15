import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LogoutButton from "../components/LogoutButton";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth");
  }


  return (
    <>
      <h1 className="text-4xl text-green-500">Netflix Clone</h1>
      <LogoutButton />
    </>
  );
}