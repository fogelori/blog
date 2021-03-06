import React, { useState } from "react";
import { useAuth } from "src/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { InputField, useInputField } from "src/components";
import { Button } from "src/elements/Forms";
import useFirebaseDB from "src/hooks/useFirebaseDB";
import { H2 } from "src/elements/Typography";
import "./Signup.css";

export default function Signup() {
  const { addNewDoc } = useFirebaseDB();
  //   const emailRef = useRef();
  //   const passwordRef = useRef();
  //   const passwordConfirmRef = useRef();
  const [input, handleInput] = useInputField();
  // const { input, handleChangeInput } = useInputField();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (input.password !== input.passwordConfirm) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      const newUser = await signup(input.emailSignup, input.passwordSignup);
      await addNewDoc("users", newUser.user.uid, {
        role: "reader",
        email: newUser.user.email,
      });
      navigate("/");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  return (
    <div className="signup">
      <H2 className="signup__title">Sign Up</H2>
      {error && <p variant="danger">{error}</p>}
      <div className="signup__body">
        <form className="signup__form">
          <InputField
            placeholder="E-mail"
            onChange={handleInput}
            id="emailSignup"
            value={input}
            required
          />
          <InputField
            placeholder="Password"
            type="password"
            onChange={handleInput}
            id="passwordSignup"
            value={input}
            required
          />
          <InputField
            placeholder="Password Confirmation"
            type="password"
            onChange={handleInput}
            id="passwordConfirmSignup"
            value={input}
            required
          />
          <Button
            state="accept"
            className="signup__button"
            onClick={handleSubmit}
            disabled={loading}
            type="submit"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
}
