import React, { useState, useEffect } from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import "./profile.css";

const Profile = () => {
  const [data_, setData] = useState({
    analytics: { SHM: { correct: 4, wrong: 0 } },
  });
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
    // const jwtToken = await getAccessTokenSilently();
    const mytoken = localStorage.getItem("mytoken");

    try {
      console.log(user.email);
      console.log("jwt = ", mytoken);

      const resp = await axios.post(
        process.env.REACT_APP_BACKEND_URL + "/api/get_analytics",
        {
          "X-HTTP-Method-Override": "GET",
          jwt: mytoken,
        },
        {
          headers: header,
        }
      );
      await setData(resp.data);
    } catch (err) {
      console.log(err, "Can not fetch API");
    }
  };

  useEffect(() => {
    GetUserData();
  }, []);

  console.log("data: ", data_);

  return (
    <>
      <div>{/* <NavbarHome /> */}</div>
      <div className="profile-card">
        <img
          src={user.picture}
          alt="User Profile"
          className="profile-picture"
        />
        <div>
          <h2>{user.given_name}</h2>
          <table>
            <thead>
              <tr>
                <th>Topic Name</th>
                <th>Correct</th>
                <th>Wrong</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(data_.analytics).map((topicName, index) => (
                <tr key={index}>
                  <td>{topicName}</td>
                  <td>{data_.analytics[topicName].correct}</td>
                  <td>{data_.analytics[topicName].wrong}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* <h2>{user.given_name}</h2> */}
        <div className="profile-stats">
          {/* <p>{data}</p> */}
          {/* <p>data</p>
          <p>Attempted: 10</p>
          <p>Incorrect: 10</p> */}
        </div>
      </div>
      {/* {console.log("isauthenticated", isAuthenticated, user)} */}
    </>
  );
};

export default Profile;
