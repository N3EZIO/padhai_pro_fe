import React, { useState, useEffect } from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import axios from "axios";
import "./profile.css";

const Profile = () => {
  const [data, setData] = useState(null);
  const {
    loginWithPopup,
    loginWithRedirect,
    logout,
    user,
    isAuthenticated,
    getAccessTokenSilently,
  } = useAuth0();

  const GetUserData = async () => {
    const jwtToken = await getAccessTokenSilently();

    const header = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };

    try {
      console.log(user.email);
      console.log("jwt = ", jwtToken);

      const resp = await axios.post(
        process.env.REACT_APP_BACKEND_URL + "/api/get_analytics",

        {
          "X-HTTP-Method-Override": "GET",
          jwt: jwtToken,
          // jwt: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImlWNHFBbG9UZDVvLThxWkNfcGVSYyJ9.eyJodHRwczovL2V4YW1wbGUuY29tL2VtYWlsIjoicmFuZG9tYXl1c2gwN0BnbWFpbC5jb20iLCJpc3MiOiJodHRwczovL3BhZGhhaS5ldS5hdXRoMC5jb20vIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMTIwNzM2NzczMzQ2OTc3NDY0ODMiLCJhdWQiOlsiYSB1bmlxdWUgaWRlbnRpZmllciIsImh0dHBzOi8vcGFkaGFpLmV1LmF1dGgwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE2OTM4NDE0OTYsImV4cCI6MTY5MzkyNzg5NiwiYXpwIjoiZUdzdHowejJZVm9WNE13N25tc3lITWdHV0VjRzhETzUiLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIn0.YHO0yncA9E_TJzBIAR3PPZZjomUzFAqEWCEBvi4aTixdJfWgqUHOoJczErzhpnPVyDQcE5hIOHs3Xk7kL7swsjNFNa2XW1w6sh6bgjy6saYOpcL4PKWtqmIuieoFuOOzIt4Nz7ku_cfTFcFNr_oNMTVUvADn_9M1FaNPxpBbHcc7IYLEIJ9i1zph56-FlrbwEwXRrwu5HIDf1vkenYzcc11nFxDk0vo3SnhZIXLhys3Vx-cseOSRaCamKau7b1fd9B8KVhFm-VXAKCSdM3kWW7rT6FviEW2OgidmVgggpcuznKzsfJKuH7k4gKt8OJfPJCkfCmeTZ9Id-3o3BasM9Q",
        },
        {
          headers: header,
        }
      );
      console.log(user.email);
      console.log(resp);
      setData(resp.data);
    } catch (err) {
      console.log(err, "Can not fetch API");
    }
  };

  useEffect(() => {
    GetUserData();
  }, []);

  return (
    <>
      <div>{/* <NavbarHome /> */}</div>
      <div className="profile-card">
        <img
          src={user.picture}
          alt="User Profile"
          className="profile-picture"
        />

        <h2>{user.given_name}</h2>
        <div className="profile-stats">
          {/* <p>{data}</p> */}
          <p>Correct: 10</p>
          <p>Attempted: 10</p>
          <p>Incorrect: 10</p>
        </div>
      </div>
      {/* {console.log("isauthenticated", isAuthenticated, user)} */}
    </>
  );
};

export default Profile;

// import React, { useRef, useState } from "react";
// import { Auth0Provider } from "@auth0/auth0-react";
// import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
// import a1 from "../pages/images/a1.jpg";
// import "./profile.css";
// import axios from "axios";
// import { useEffect } from "react";

// export const Profile = () => {
//   const [data, setData] = useState(null);
//   const {
//     loginWithPopup,
//     loginWithRedirect,
//     logout,
//     user,
//     isAuthenticated,
//     getAccessTokenSilently,
//   } = useAuth0();

//   const header = {
//     "Content-Type": "application/json",
//     "Access-Control-Allow-Origin": "*",
//   };

//   const GetUserData = async () => {
//     const jwtToken = await getAccessTokenSilently();

//     try {
//       const resp = await axios.get(
//         console.log(process.env.REACT_APP_BACKEND_URL + "/api/get_analytics"),
//         process.env.REACT_APP_BACKEND_URL + "/api/get_analytics",
//         {
//           jwt: jwtToken,
//           email: "https://example.com/" + user.email,
//         },
//         {
//           headers: header,
//         }
//       );
//       console.log(user.email);
//       console.log(resp);
//       setData(resp.data);

//       await ((resp) => {
//         setData(resp.data);
//       });
//       console.log(data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     GetUserData();
//   }, []);

//   return (
//     <>
//       <div>{/* <NavbarHome /> */}</div>
//       <div className="profile-card">
//         <img
//           src={user.picture}
//           alt="User Profile"
//           className="profile-picture"
//         />

//         <h2>{user.given_name}</h2>
//         <div className="profile-stats">
//           {/* <p>{data}</p> */}
//           <p>Correct: 10</p>
//           <p>Attempted: 10</p>
//           <p>Incorrect: 10</p>
//         </div>
//       </div>
//       {/* {console.log("isauthenticated", isAuthenticated, user)} */}
//     </>
//   );
// };

// export default Profile;
