"use client";

import React, { createContext, useReducer, ReactNode, Dispatch } from "react";

// Define the types for your context and state
interface AuthState {
  user: any; // Adjust the type according to your user object
}

interface AuthContextProps {
  state: AuthState;
  dispatch: Dispatch<any>; // Adjust the action type according to your actions
}

// Create the context with an initial value
export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// Define the action types
type AuthAction = { type: "LOGIN"; payload: any } | { type: "LOGOUT" };

// Define the reducer function
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

// Define the provider component

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  console.log("AuthContextProvider", state);
  return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>;
};
