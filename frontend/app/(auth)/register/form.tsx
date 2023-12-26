"use client";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSignup } from "@/hooks/use-signup";

export const RegisterPageClientSide = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  //   const [username, setUsername] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [confirmPassword, setConfirmPassword] = useState("");

  const { error, isLoading, signup } = useSignup();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { username, email, password, confirmPassword } = data;

    await signup(username, email, password, confirmPassword);
    setData({ username: "", email: "", password: "", confirmPassword: "" });
  };

  return (
    <div className="flex min-h-screen items-center justify-center w-full">
      <Card className="w-[400px] p-5 shadow-xl">
        <h1 className="text-3xl text-center mb-5 font-bold">Register to MdShop</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <Label htmlFor="username">Username</Label>
          <Input required value={data.username} type="text" id="username" placeholder="Username" onChange={(e) => setData({ ...data, username: e.target.value })} />
          <Label htmlFor="email">Email</Label>
          <Input required type="email" value={data.email} id="email" placeholder="Email" onChange={(e) => setData({ ...data, email: e.target.value })} />
          <Label htmlFor="password">Password</Label>
          <Input required type="password" value={data.password} id="password" placeholder="****" onChange={(e) => setData({ ...data, password: e.target.value })} />
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input required type="password" value={data.confirmPassword} id="confirmPassword" placeholder="****" onChange={(e) => setData({ ...data, confirmPassword: e.target.value })} />
          {error && <p className="text-red-500 text-center">{error}</p>}
          <Button className="mt-5 w-full" type="submit" disabled={isLoading}>
            {isLoading ? "Loading..." : "Register"}
          </Button>
        </form>
      </Card>
    </div>
  );
};
