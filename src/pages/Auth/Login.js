import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "src/contexts/AuthContext";
import { InputField, useInputField } from "src/components";
import { Button } from "src/elements/Forms";
import { H2 } from "src/elements/Typography";
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
      <H2 className="login__title">Log In</H2>
      {error && <p variant="danger">{error}</p>}
      <form className="login__form">
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
      <div className="login__bottom">
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
