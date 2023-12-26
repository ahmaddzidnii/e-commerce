"use client";

import { useState } from "react";
import { useAuthContext } from "./use-auth-context";
import { axiosInstance } from "@/lib/axios";
import { toast } from "sonner";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (username: string, email: string, password: string, confirmPassword: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axiosInstance.post("/register", { username, email, password, confirmPassword });

      if (response.status === 201) {
        localStorage.setItem("user", JSON.stringify(response.data));

        dispatch({ type: "LOGIN", payload: response.data });
        setIsLoading(false);
        toast.success("Register Success");
      }
    } catch (error: any) {
      setError(error.response.data.errors);
      setIsLoading(false);
    }
  };

  return { error, isLoading, signup };
};
