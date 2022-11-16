import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./containers/Home/Home";
import Login from "./components/Auth/Login";
import Profile from "./containers/User/Profile";
import Register from "./components/Auth/Register";
import NotFound from "./components/Error/NotFound";
import Authent from "./containers/Auth0/Authent";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/user/:id" element={<Profile />} /> */}
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/register" element={<Register />} /> */}
        {/* <Route path="/auth" element={<Authent />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
