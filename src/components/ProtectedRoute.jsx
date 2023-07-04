import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isUserLoggedIn = localStorage.getItem("isUserLoggedIn");
  if (!isUserLoggedIn) {
    return <Navigate to="/login" />;
  }
  return children;
}
