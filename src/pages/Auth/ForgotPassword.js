import React, { useState } from "react";
// import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "src/contexts/AuthContext";
import { InputField, useInputField } from "src/components";
import { Button } from "src/elements/Forms";
import { H2 } from "src/elements/Typography";
import "./ForgotPassword.css";

export default function ForgotPassword(props) {
  //   const emailRef = useRef()
  const [input, handleInput] = useInputField();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(input.email);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
    }

    setLoading(false);
  }

  return (
    <div className="forgot-pass">
      <H2 className="forgot-pass__title mb-4">Password Reset</H2>
      {error && <p variant="danger">{error}</p>}
      {message && <p variant="success">{message}</p>}
      <form className="forgot-pass__form">
        <InputField
          placeholder="E-mail"
          onChange={handleInput}
          id="email"
          value={input}
          required
        />
        <Button
          state="accept"
          className="forgot-pass__button"
          onClick={handleSubmit}
          disabled={loading}
          type="submit"
        >
          Reset Password
        </Button>
      </form>
      <div className="forgot-pass__bottom">
        Go to{" "}
        <a
          href="./login"
          onClick={(e) => {
            e.preventDefault();
            props.setTabIndex(0);
          }}
        >
          Login page
        </a>
      </div>
    </div>
  );
}
