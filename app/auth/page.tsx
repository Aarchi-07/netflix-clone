"use client";

import axios from "axios";
import { useCallback, useState } from "react";
import Input from "@/components/input";

const Auth = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [variant, setVariant] = useState("login");

    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => (currentVariant === "login" ? "register" : "login"));
    }, []);

    const register = useCallback(async () => {
        try {
            await axios.post('/api/register', {
                name,
                email,
                password,
            });
        } catch (error) {
            console.log(error);
        }
    }, [email, name, password]);

    return (
      <div
        className="relative h-full w-full bg-no-repeat bg-center bg-fixed bg-cover"
        style={{
          backgroundImage:
            'url("https://assets.nflxext.com/ffe/siteui/vlv3/fa7be975-efc3-48c6-8188-f07fdd1aa476/web/IN-en-20250428-TRIFECTA-perspective_e045264e-b4d4-4a6f-b2cc-f95e3344a332_large.jpg")',
        }}
      >
        <div className="bg-black w-full h-full lg:bg-black/50">
            <nav className="px-35 py-5">
                <img src="/images/logo.png" alt="Logo" className="h-19" />
            </nav>
            <div className="flex justify-center">
                <div className="bg-black/70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                    <h2 className="text-white text-4xl mb-8 font-semibold">
                        {variant === "login" ? "Sign in" : "Register"}
                    </h2>
                    <div className="flex flex-col gap-4">
                        {variant === "register" && (
                            <Input 
                                label="Username"
                                onChange={(ev: any) => setName(ev.target.value)}
                                id="name"
                                value={name}
                            />
                        )}
                        <Input 
                            label="Email"
                            onChange={(ev: any) => setEmail(ev.target.value)}
                            id="email"
                            type="email"
                            value={email}
                        />
                        <Input 
                            label="Password"
                            onChange={(ev: any) => setPassword(ev.target.value)}
                            id="password"
                            type="password"
                            value={password}
                        />
                    </div>
                    <button onClick= {register} className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
                        {variant === "login" ? "Login" : "Sign up"}
                    </button>
                    <p className="text-neutral-500 mt-12">
                        {variant === "login" ? "First time using Netflix?" : "Already have an account?"}
                        <span onClick= {toggleVariant} className="text-white cursor-pointer hover:underline">
                            {variant === "login" ? "Create an account" : "Login"}
                        </span>
                    </p>
                </div>
            </div>
        </div>
      </div>
    );
  };
  
  export default Auth;
  