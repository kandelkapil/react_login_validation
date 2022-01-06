import React, { useState } from "react";

import { ProtectedRoute } from "./ProtectedRoute";

const Login = () => {
  const [username, setusername] = useState();
  const [password, setpassword] = useState();
  const [errors, seterrors] = useState([{}]);
  const userinfo = { name: "user123", pass: "pass" };
  const [valid, setvalid] = useState(false);

  const validate_form = (e) => {
    e.preventDefault();
    let errors = {};

    if (username === userinfo.name && password === userinfo.pass) {
      errors["login"] = "Login Successful.";
      setvalid(true);
      <ProtectedRoute isvalid={valid} />;
      console.log("setvalid is true");
    }

    if (username === userinfo.name && password !== userinfo.pass) {
      errors["confirm_password"] = "Password don't match.";
    }
    if (username !== userinfo.name && password !== userinfo.pass) {
      errors["confirm_user_pass"] = "Wrong Credentials";
    }

    if (!username && !password) {
      errors["confirm_field"] = "Please fill both fields.";
    }
    if (!username && password) {
      errors["username"] = "Please enter your username.";
    }
    if (username && !password) {
      errors["password"] = "Please enter your password.";
    }
    seterrors(errors);
    setusername("");
    setpassword("");
  };
  return (
    <div className="login">
      <form action="" onSubmit={validate_form}>
        <div className="card-items">
          <div className="user-name">
            <label htmlFor="username">Username</label>
            <input
              autoComplete="off"
              type="text"
              id="username"
              value={username}
              onChange={(e) => setusername(e.target.value)}
            />
            <div className="text-danger">{errors.username}</div>
          </div>
          <div className="passwd">
            <label htmlFor="password">Password</label>
            <input
              autoComplete="off"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
            <div className="text-danger-pass">{errors.password}</div>
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>

          <div className="text-sucess">{errors.login}</div>
          <div className="text-danger-pass">{errors.confirm_password}</div>
          <div className="text-danger-pass">{errors.confirm_field}</div>
          <div className="text-danger-pass">{errors.confirm_user_pass}</div>
        </div>
      </form>
    </div>
  );
};

export default Login;
