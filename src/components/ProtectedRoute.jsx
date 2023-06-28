import React from "react";
import { useGlobalAuth } from "../hooks/useAuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  let { user } = useGlobalAuth();
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
}
