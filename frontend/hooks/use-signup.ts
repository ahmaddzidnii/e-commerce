"use client";

import { useState } from "react";
import { useAuthContext } from "./use-auth-context";
import { axiosInstance } from "@/lib/axios";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email: string, password: string) => {
    setLoading(true);
    setError(null);

    const response = await axiosInstance.post("/register", { email, password });

    if (response.status !== 201) {
      setLoading(false);
      setError(response.data.message);
      return;
    }
    if (response.status === 201) {
      localStorage.setItem("user", JSON.stringify(response.data));

      dispatch({ type: "LOGIN", payload: response.data });
      setLoading(false);
    }
  };

  return { error, loading, signup };
};
