import React, { useState } from "react";
import AuthInput from "../components/AuthInput";
import { useNavigate } from "react-router-dom";
import { useGlobalAuth } from "../hooks/useAuthContext";

export default function LogIn() {
  const { loggingIn, forgotPassword } = useGlobalAuth();
  const [login, setLogin] = useState({ email: "", password: "" });
  const [hasError, setHasError] = useState({ status: false, message: "" });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!login.email || !login.password) {
      setHasError({ status: true, message: "Please fill all fields!" });
      return;
    }
    setHasError({ status: false, message: "" });
    try {
      await loggingIn(login.email, login.password)
        .then((res) => navigate("/"))
        .catch((err) => {
          setHasError({ status: true, message: err.message });
          console.log(err);
        });
    } catch (error) {
      console.log(error.message);
      setHasError({ status: true, message: error.message });
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await forgotPassword(login.email)
        .then(() => {
          console.log("Reset password send");
          window.open("https://mail.google.com/mail/u/0/#inbox", "_blank");
        })
        .catch((err) => {
          setHasError({ status: true, message: err.message });
          console.log(err);
        });
    } catch (error) {
      console.log(error.message);
      setHasError({ status: true, message: error.message });
    }
  };

  const cleanErrorMessage = hasError.message.replace("Firebase: ", "");

  return (
    <div className="auth-page fixed-top">
      <main
        className="form-signin w-100 m-auto bg-dark"
        data-bs-theme="dark"
        style={{ mixBlendMode: "hard-light" }}
      >
        <form>
          <h1 className="h3 mb-3 fw-normal my-5 py-3 signin text-align-center">
            Login
          </h1>
          {hasError.status === true && (
            <h5 className="text-danger">{cleanErrorMessage}</h5>
          )}
          <AuthInput
            id="floatingInput"
            type="email"
            placeholder="Enter Email Address"
            onChange={(e) =>
              setLogin((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          <AuthInput
            id="floatingPassword"
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setLogin((prev) => ({ ...prev, password: e.target.value }))
            }
          />

          <button
            onClick={handleLogin}
            className="btn btn-danger w-100 pt-2 mt-3"
            type="submit"
          >
            Sign in
          </button>
          <p className="my-3" style={{ textAlign: "start" }}>
            <a
              onClick={handleResetPassword}
              className="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover"
            >
              Forgot password ?
            </a>
          </p>
          <p className="mt-3 text-dark-emphasis">
            New to Netflix?{" "}
            <a
              className="link-danger link-opacity-100 link-offset-3 link-underline-opacity-25 link-underline-opacity-100-hover"
              href="/signup"
            >
              {" "}
              Sign up now
            </a>
          </p>
        </form>
      </main>
    </div>
  );
}
