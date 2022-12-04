import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./navbar.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
// import {Auth0Provider} from '../../containers/Auth0/Authent'
import { Auth0Provider } from "@auth0/auth0-react";

import { useAuth0 } from "@auth0/auth0-react";

const NavbarHome = () => {
  const [showOptions, setShowOptions] = useState(false);
  const navigate = useNavigate();
  const { loginWithPopup, loginWithRedirect, logout, user, isAuthenticated } =
    useAuth0();

  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <a href="/">
            <h2>
              <span>P</span>adh.
              <span>AI</span>
            </h2>
          </a>
        </div>
        <div className={showOptions ? "mobile-menu-link" : "menu-link"}>
          <ul>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>

            <li>
              {!isAuthenticated ? (
                <a href="#" onClick={() => loginWithPopup()}>
                  <FaUserAlt style={{ marginRight: "1rem" }} />
                  Login
                </a>
              ) : (
                <a href="#" onClick={() => logout()}>
                  <FaUserAlt style={{ marginRight: "1rem" }} />
                  Logout
                </a>
              )}
            </li>
          </ul>
        </div>

        {/* Hamburger Menu */}
        <div className="social">
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowOptions(!showOptions)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
    // <Navbar bg="light" expand="lg">
    //   <Container>
    //     <Navbar.Brand href="/">Padh.ai</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link href="aboutus">About Us</Nav.Link>
    //         <NavDropdown.Item href="contactus">Contact Us</NavDropdown.Item>
    //       </Nav>
    //       {!isAuthenticated ? (
    //         <Button variant="outline-success" onClick={() => loginWithPopup()}>
    //           Login
    //         </Button>
    //       ) : (
    //         <Button variant="outline-success" onClick={() => logout()}>
    //           Logout
    //         </Button>
    //       )}
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
};

export default NavbarHome;
