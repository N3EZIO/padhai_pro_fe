import React, { useRef } from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import a1 from "../pages/images/a1.jpg";
import "./profile.css";
import axios from "axios";

export const Profile = () => {
  const {
    loginWithPopup,
    loginWithRedirect,
    logout,
    user,
    isAuthenticated,
    getAccessTokenSilently,
  } = useAuth0();

  const header = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  const GetUserData = async () => {
    const jwtToken = await getAccessTokenSilently();

    try {
      const resp = await axios.post(
        // https://padhai.pro/api/get_analytics
        process.env.REACT_APP_BACKEND_URL + "/api/get_analytics",
        {
          jwt: jwtToken,
        },
        {
          headers: header,
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div>{/* <NavbarHome /> */}</div>
      <div className="profile-card">
        <img src={a1} alt="User Profile" className="profile-picture" />
        <h2 className="profile-name">Ayush</h2>
        <h3>{user.given_name}</h3>
        <div className="profile-stats">
          <p>Correct: 10</p>
          <p>Attempted: 10</p>
          <p>Incorrect: 10</p>
        </div>
      </div>
      {console.log("isauthenticated", isAuthenticated, user)}
    </>
  );
};

export default Profile;
