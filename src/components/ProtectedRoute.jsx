import React from "react";
import { useGlobalAuth } from "../hooks/useAuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  // let { user } = useGlobalAuth();
  const isUserLoggedIn = localStorage.getItem("isUserLoggedIn")
  if (!isUserLoggedIn) {
    return <Navigate to="/login" />;
  }
  return children;
}
