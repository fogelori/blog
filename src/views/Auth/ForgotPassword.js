import React, { useState } from "react";
// import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext";
import useInputField from "../../components/InputField/useInputField";
import InputField from "../../components/InputField/InputField";
import Button from "../../components/Button/Button";
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
      <h2 className="forgot-pass__title mb-4">Password Reset</h2>
      {error && <p variant="danger">{error}</p>}
      {message && <p variant="success">{message}</p>}
      <form className="login_body_form">
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
      <div className="w-100 text-center mt-2">
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
      {/* <div className="w-100 text-center mt-3">
        <Link to="/login">Login</Link>
      </div>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div> */}
    </div>
  );
}
