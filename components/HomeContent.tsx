'use client';

import React, { use } from 'react'
import useCurrentUser from "@/hooks/useCurrentUser";
import { signOut } from "next-auth/react";

const HomeContent = () => {
    
  const {data: user} = useCurrentUser();
  return (
     <>
      <h1 className="text-4xl text-green-500">Netflix Clone</h1>
      <p className="text-red-900">Logged in as: {user?.name}</p>
      <button className="h-10 w-full bg-white" onClick={() => signOut()}>
      Logout
      </button>
    </>
  )
}

export default HomeContent