import React, { useEffect, useState } from "react";
// import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import useInputField from "../../components/InputField/useInputField";
import InputField from "../../components/InputField/InputField";
import Button from "../../components/Button/Button";
import "./Login.css";

export default function Login(props) {
  //   const emailRef = useRef()
  //   const passwordRef = useRef()
  const [input, handleInput] = useInputField();
  const { login, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);
  // console.log("login");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(input.emailLogin, input.passwordLogin);
      // https://stackoverflow.com/questions/61930133/firebase-auth-signinwithemailandpassword-using-try-catch-async-await-uncaught
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  useEffect(() => {
    if (currentUser) {
      navigate(location.state?.to || "/", { replace: true });
    }
  }, [currentUser, location.state?.to, navigate]);

  return (
    <div className="login">
      <h2 className="login__title mb-4">Log In</h2>
      {error && <p variant="danger">{error}</p>}
      <form className="login_body_form">
        <InputField
          placeholder="E-mail"
          onChange={handleInput}
          id="emailLogin"
          value={input}
          required
        />
        <InputField
          placeholder="Password"
          type="password"
          onChange={handleInput}
          id="passwordLogin"
          value={input}
          required
        />
        <Button
          state="accept"
          className="login__button"
          onClick={handleSubmit}
          disabled={loading}
          type="submit"
        >
          Login
        </Button>
      </form>
      <div className="w-100 text-center mt-2">
        <a
          href="./forgot-password"
          onClick={(e) => {
            e.preventDefault();
            props.setTabIndex(2);
          }}
        >
          Forgot Password?
        </a>
      </div>
      {/* <div className="w-100 text-center mt-3">
        <Link to="/forgot-password">Forgot Password?</Link>
      </div> */}
    </div>
  );
}
