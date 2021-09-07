import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../actions";
import "../css/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="login">
      <h1>Login</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch(login);
          dispatch(login(email, password));
        }}
      >
        <input
          className="inp"
          type="email"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          className="inp"
          type="password"
          placeholder="password"
          onChange={e => setPassword(e.target.value)}
          required
        />
        <input className="btn" type="submit" value="Login" />
      </form>
      <div className="email-pass">
        <p>Email : eve.holt@reqres.in</p>
        <p>Password : cityslika</p>
      </div>
    </div>
  );
};

export default Login;
