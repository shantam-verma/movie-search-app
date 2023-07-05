import React, { useState } from "react";
import AuthInput from "../components/AuthInput";
import { useNavigate } from "react-router-dom";
import { useGlobalAuth } from "../hooks/useAuthContext";

export default function SignUp() {
  const { signUp, googleSignIn } = useGlobalAuth();
  const navigate = useNavigate();
  const [registration, setRegistration] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [hasError, setHasError] = useState({ status: false, message: "" });

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn()
        .then(() => navigate("/"))
        .catch((err) => {
          setHasError({ status: true, message: err.message });
          console.log(err);
        });
    } catch (error) {
      setHasError({ status: true, message: error.message });
      console.log(error);
    }
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    if (!registration.name || !registration.email || !registration.password) {
      setHasError({ status: true, message: "Fill all fields!" });
      return;
    }
    setHasError({ status: false, message: "" });
    try {
      await signUp(registration.email, registration.password)
        .then(() => navigate("/"))
        .catch((err) => {
          console.log(err);
          setHasError({ status: true, message: err.message });
        });
    } catch (error) {
      setHasError({ status: true, message: error.message });
      console.log(error);
    }
  };

  const cleanErrorMessage = hasError.message.replace("Firebase: ", "");
  return (
    <>
      <div className="auth-page fixed-top">
        <main
          className="form-signin w-100 m-auto bg-dark"
          data-bs-theme="dark"
          style={{ mixBlendMode: "hard-light" }}
        >
          <form>
            <h1 className="h3 mb-3 fw-normal my-5 py-3 signin text-align-center">
              Create New Account
            </h1>
            {hasError.status === true && (
              <h5 className="text-danger">{cleanErrorMessage}</h5>
            )}

            <AuthInput
              id="floatingInput"
              type="text"
              placeholder="Enter Your Name"
              onChange={(e) =>
                setRegistration((prev) => ({ ...prev, name: e.target.value }))
              }
            />
            <AuthInput
              id="floatingInput"
              placeholder="Enter Email Address"
              type="email"
              onChange={(event) =>
                setRegistration((prev) => ({
                  ...prev,
                  email: event.target.value,
                }))
              }
            />
            <AuthInput
              type="password"
              className="myInput form-control p-3"
              id="floatingPassword"
              placeholder="Password"
              onChange={(event) =>
                setRegistration((prev) => ({
                  ...prev,
                  password: event.target.value,
                }))
              }
            />

            <button
              onClick={handleRegistration}
              className="btn btn-danger w-100 pt-2 mt-3"
              type="submit"
            >
              Register
            </button>
            <p className="mt-3 text-dark-emphasis">
              Already a user?
              <a
                className="link-danger link-opacity-100 link-offset-3 link-underline-opacity-25 link-underline-opacity-100-hover"
                href="/login"
              >
                {" "}
                Sign in here
              </a>
            </p>
            <div className="or-container">
              <div className="line-separator"></div>
              <div className="or-label">or</div>
              <div className="line-separator"></div>
            </div>
            <button
              onClick={handleGoogleSignIn}
              type="button"
              className="login-with-google-btn"
            >
              Sign in with Google
            </button>
          </form>
        </main>
      </div>
    </>
  );
}
