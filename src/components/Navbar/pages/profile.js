import React, { useState, useEffect } from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import "./profile.css";

const Profile = () => {
  const [data_, setData] = useState({
    analytics: {
      SHM: { correct: 0, wrong: 0 },
      Thermo: { correct: 0, wrong: 0 },
      Parabola: { correct: 0, wrong: 0 },
      vectors: { correct: 0, wrong: 0 },
      Geometry: { correct: 0, wrong: 0 },
    },
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

  let sum_correct = 0;
  let sum_wrong = 0;
  for (const key in data_.analytics) {
    if (data_.analytics.hasOwnProperty(key)) {
      sum_correct += data_.analytics[key].correct;
      sum_wrong += data_.analytics[key].wrong;
    }
  }

  return (
    <>
      <div className="profile-details">
        <div className="profile-image">
          <img
            src={user.picture}
            alt="User Profile"
            className="profile-picture"
          />
        </div>
        <div className="profile-name">
          <h2>{user.given_name}</h2>
        </div>
      </div>

      <div className="analysis">
        <table className="styled-table">
          <thead>
            <tr>
              <th>Topic Name</th>
              <th>Total Attempted</th>
              <th>Answered Correct</th>
              <th>Answered Incorrect</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(data_.analytics).map((topicName, index) => (
              <tr key={index}>
                <td>{topicName}</td>
                <td>
                  {data_.analytics[topicName].correct +
                    data_.analytics[topicName].wrong}
                </td>
                <td>{data_.analytics[topicName].correct}</td>
                <td>{data_.analytics[topicName].wrong}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="profile-stats">
          <h4>Your statistics :</h4>
          <h5 className="details">Attempetd : {sum_correct + sum_wrong}</h5>
          <h5 className="details">Incorrect : {sum_wrong}</h5>
          <h5 className="details">Correct : {sum_correct}</h5>
        </div>
      </div>
    </>
  );
};

export default Profile;
