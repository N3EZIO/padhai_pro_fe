import React, { useState, useEffect } from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import "./profile.css";


const Profile = () => {
  const [data_, setData] = useState({
    analytics: { SHM: { correct: 4, wrong: 0 },
    Thermo :{correct:3 , wrong:2},
    Parabola :{correct:3 , wrong:2},
    vectors :{correct:3 , wrong:2},
    Geometry :{correct:3 , wrong:2},
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

  return (
    <>
      {/* <div className="profile-card">

        <div className="profile-card-nav">
          <div>
            <img
              src={user.picture}
              alt="User Profile"
              className="profile-picture"
            />
          </div>
          <div>
            <h2>{user.given_name}</h2>
          </div>
        </div>
        <div>
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
      </div> */}
      {/* <div className="profile-stats">
          <p>{data}</p>
          <p>data</p>
          <p>Attempted: 10</p>
          <p>Incorrect: 10</p>
      </div> */}
      {/* {console.log("isauthenticated", isAuthenticated, user)} */}



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
                    <td>{data_.analytics[topicName].correct+data_.analytics[topicName].wrong}</td>
                    <td>{data_.analytics[topicName].correct}</td>
                    <td>{data_.analytics[topicName].wrong}</td>
                  </tr>
                ))}
            </tbody>
        </table>
        
        <div className="profile-stats">
            <h4>Your statistics :</h4>
            <h5 className="details">Attempetd : 10</h5> 
            <h5 className="details">Incorrect : 3</h5> 
            <h5 className="details">Correct : 7</h5> 
        </div>

      </div>
      


    </>
  );
};

export default Profile;
