import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Home from "./containers/Home/Home";
// import Login from "./components/Auth/Login";
// import Register from "./components/Auth/Register";
import NotFound from "./components/Error/NotFound";
// import Authent from "./containers/Auth0/Authent";
import About from "./components/Navbar/pages/about";
import Contact from "./components/Navbar/pages/contact";
import Profile from "./components/Navbar/pages/profile";
import NavbarHome from "./components/Navbar/Navbar";
import { Auth0Provider } from "@auth0/auth0-react";
const App = () => {
  return (
    <div>
      <Auth0Provider
        domain="padhai.eu.auth0.com"
        clientId="eGstz0z2YVoV4Mw7nmsyHMgGWEcG8DO5"
        redirectUri={window.location.origin}
        audience="a unique identifier"
        scope="openid profile email"
      >
      <NavbarHome />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* <PrivateRoute path="/profile" element={<Profile />} /> */}
        {/* <Route
          path="/profile"
          element={<PrivateRoute component={<Profile />} />}
        /> */}

        <Route path="/profile" element={<Profile />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      </Auth0Provider>
    </div>
  );
};

// const PrivateRoute = () => {
//   const { isAuthenticated, isLoading } = useAuth0();

//   if (isLoading) return <>...loading</>;

//   return isAuthenticated ? <Profile /> : <Navigate to="/" />;
// };

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated, isLoading } = useAuth0();
  console.log("isAuthenticated", isAuthenticated, "isLoading", isLoading)
  if (isLoading) {
    return <>...loading</>;
  }

  return (
    <Routes>
      <Route
        {...rest}
        element={isAuthenticated ? <Component /> : <Navigate to="/" />}
      />
    </Routes>
  );
};

export default App;
