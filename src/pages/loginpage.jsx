import { useState } from "react";
import "./loginandsignup.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import axios from "axios";



function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  function onshow() {
    setShowPassword(!showPassword);
  }

  const eventHandler = async (event) => {
    axios
      .post("http://localhost:3001/login", { username, password })
      .then((result) => {
        console.log(result);
        if (result.data == "Success") {
          navigate("/home");
        }
      });
    event.preventDefault();
    setErrorMessage("");

    if (!username || !password) {
      setErrorMessage("Both feilds are required");
      return;
    }

    try {
      console.log("Login successful");
    } catch {
      setErrorMessage("Error!!! Login failed");
    }
  };
  const usernameHandler = (event) => {
    setUsername(event.target.value);

    console.log(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
    console.log(event.target.value);
  };
  //   function onShowPassword() {
  //     setShowPassword(!showPassword);
  //   }

  return (
    <>
      <Header />
      <div className="login-section">
        <div className="loginContainer">
          <h1>Login</h1>
          <p>Login to get access of information</p>
          <form onSubmit={eventHandler}>
            <label htmlFor="username">Username:</label>
            <input
              type="username"
              placeholder="enter you username"
              value={username}
              onChange={usernameHandler}
              required
            />
            <label htmlFor="password">Password:</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={passwordHandler}
              minLength={8}
              required
            />
            <label htmlFor="">
              <input type="checkbox" onClick={onshow} />
              show password
            </label>
            <button className="submitbtn" type="submit">
              Login
            </button>
          </form>
          {errorMessage && (
            <div style={{ color: "red", textAlign: "center" }}>
              {errorMessage}
            </div>
          )}

          <p>
            Not registered?
            <Link to={"/register"}>Create an account</Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Login;
