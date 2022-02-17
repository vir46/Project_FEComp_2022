import React, { useState } from "react";
// import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "./index.css";
import Swal from "sweetalert2";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const alert = () => {
    console.log(username, password);
    if (username === "admin" && password === "admin") {
      Swal.fire({
        title: "Welcome",
        text: "You are logged in",
        icon: "success",
        timer: 3000,
        confirmButtonText: "OK",
      });
      
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `akunnya salah,, akun yang bener (user="admin",password="admin").. coba login ulang`,
        timer: 3000,
        // footer: '<a href="">Why do I have this issue?</a>',
      });
    }
  };

  return (
    <div>
      <div className="container">
        <div className="card">
          {/* <div class="main-block"> */}
          <h1>Login</h1>

          <form onSubmit={alert}>
            <hr />
            {/* <label id="icon" for="name">
              <i class="fas fa-envelope"></i>
            </label> */}
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              name="name"
              id="name"
              placeholder="Email"
              required
            />

            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="name"
              id="name"
              placeholder="Password"
              required
            />
            <hr />
            <hr />
            <div class="btn-block">
              <p>
                By clicking Register, you agree on our{" "}
                <a href="https://www.w3docs.com/privacy-policy">
                  Privacy Policy for W3Docs
                </a>
                .
              </p>
              <button type="submit" href="/">
                Submit
              </button>
            </div>
          </form>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
