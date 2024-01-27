import React, { useState } from "react";
import "./login.css";
import { signInWithGooglePopup } from "../../utils/googleAuth";
import { axiosClient } from "../../utils/axiosClient";
import { useAuth } from "../../utils/auth";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const auth = useAuth();

  const loginSubmit = async (e) => {
    e.preventDefault();
    const loggedUser = {
      email: email,
      password: password,
    };
    try {
      const res = await axiosClient.post("/users/login", loggedUser);
      console.log(res.data);
      auth.login(res.data.accessToken);
      alert("Successfully logged In!");
      localStorage.setItem("token", res.data.accessToken);
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
      // alert("Logged In Failed");
      setErrorMessage(err.response.data.message);
    }
  };

  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
    auth.login(response.user.accessToken);
    const { displayName, email, photoURL, uid } = response.user;
    const googleUser = {
      displayName,
      email,
      photoURL,
      uid,
    };
    console.log(googleUser);
    axiosClient
      .post("/users/googlelogin", googleUser)
      .then((res) => {
        console.log(res.data);
        alert("Login Successfull");
        localStorage.setItem("token", res.data.accessToken);
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        // alert("Login Failed");
        setErrorMessage(err.response.data.message);
      });
  };

  return (
    <>
      <div>
        <form className="login-form" onSubmit={loginSubmit}>
          <div className="container">
            <div className="card login">
              <div className="login-start">
                <div className="login-left">
                  <h3> Campus Placement</h3>
                  <h3>&</h3>
                  <h3> Trainning Portal</h3>
                </div>
                <div className="login-right">
                  <h3> Login</h3>
                  <div>
                    <label>
                      {" "}
                      <strong>Email</strong>{" "}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      required
                      placeholder="Enter Your Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div>
                    <label>
                      {" "}
                      <strong>Password</strong>{" "}
                    </label>
                    <input
                      name="password"
                      required
                      value={password}
                      placeholder="Enter Your Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <a className="forgetPassword" href="/password/forgot">
                    Forgot Password?
                  </a>

                  {errorMessage && (
                    <div className="error-message">{errorMessage}</div>
                  )}
                  <div className="card-content-center">
                    <button className="login-button">
                      {" "}
                      <strong> Login</strong>
                    </button>
                  </div>

                  <button onClick={logGoogleUser} className="googleSignButton">
                    Sign In With Google
                  </button>

                  <h6>
                    <span>or</span>
                  </h6>
                  <p className="footer-text">
                    {" "}
                    Not a member?
                    <a href="register">
                      {" "}
                      <strong>SignUp</strong>
                    </a>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
