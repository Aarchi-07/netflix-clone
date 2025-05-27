import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/auth";
import HomeContent from "@/components/HomeContent";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth");
  }


  return (
   <HomeContent />
  );
}