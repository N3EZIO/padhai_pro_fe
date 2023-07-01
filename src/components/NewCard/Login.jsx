import React from "react";
import "./Login.css";
import { GoogleOutlined } from "@ant-design/icons";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { loginWithRedirect, isAuthenticated, loginWithPopup, user } =
    useAuth0();
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await loginWithPopup();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div id="login-page">
      <div id="login-card">
        <h1>
          <b>Welcome to Padh-AI</b>
        </h1>
        <br></br>
        {/* <div className="login-button google" onClick={loginWithRedirect}> */}
        <div className="login-button google" onClick={handleSignup}>
          <GoogleOutlined
            style={{
              fontSize: "150%",
            }}
          />
          {/* {console.log(isAuthenticated)} {"   "} */}
          <span style={{ padding: "10px" }}>Sign In / Register</span>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Login;
