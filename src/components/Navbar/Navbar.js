// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { FaUserAlt } from "react-icons/fa";
// import { Link } from "react-router-dom";

// import "./navbar.css";
// import Navbar from "react-bootstrap/Navbar";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import Button from "react-bootstrap/Button";
// import { useHistory } from "react-router-dom";

// import { useAuth0 } from "@auth0/auth0-react";

// // const Signup = () => {
// //   const { loginWithPopup } = useAuth0();
// //   const history = useHistory();

// //   const handleSignup = async () => {
// //     try {
// //       await loginWithPopup();
// //       history.push("/home");
// //     } catch (error) {
// //       console.log("Error during signup:", error);
// //     }
// //   };
// // };

// const NavbarHome = () => {
//   const [showOptions, setShowOptions] = useState(false);
//   const navigate = useNavigate();
//   const { loginWithPopup, loginWithRedirect, logout, user, isAuthenticated } =
//     useAuth0();

//   return (
//     <>
//       <nav className="main-nav">
//         <div className="logo">
//           <a href="/">
//             <h2>
//               <span>P</span>adh.
//               <span>AI</span>
//             </h2>
//           </a>
//         </div>
//         <div className={showOptions ? "mobile-menu-link" : "menu-link"}>
//           <ul>
//             <li>
//               <a href="/about">About</a>
//             </li>
//             {/* Profile */}
//             <li>
//               <a href="/profile">Profile</a>
//             </li>
//             {/* Profile */}
//             <li>
//               <a href="/contact">Contact Us</a>
//             </li>

//             <li>
//               {!isAuthenticated ? (
//                 <a
//                   href="#"
//                   onClick={async () => {
//                     try {
//                       await loginWithPopup();
//                       navigate("/home");
//                     } catch (error) {
//                       console.log("Error during signup", error);
//                     }
//                   }}
//                 >
//                   <FaUserAlt style={{ marginRight: "1rem" }} />
//                   Login
//                 </a>
//               ) : (
//                 <a
//                   href="#"
//                   onClick={() =>
//                     logout({
//                       logoutParams: { returnTo: window.location.origin },
//                     })
//                   }
//                 >
//                   <FaUserAlt style={{ marginRight: "1rem" }} />
//                   Logout
//                 </a>
//               )}
//             </li>
//           </ul>
//         </div>

//         {/* Hamburger Menu */}
//         <div className="social">
//           <div className="hamburger-menu">
//             <a href="#" onClick={() => setShowOptions(!showOptions)}>
//               <GiHamburgerMenu />
//             </a>
//           </div>
//         </div>
//       </nav>
//     </>
//     // <Navbar bg="light" expand="lg">
//     //   <Container>
//     //     <Navbar.Brand href="/">Padh.ai</Navbar.Brand>
//     //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//     //     <Navbar.Collapse id="basic-navbar-nav">
//     //       <Nav className="me-auto">
//     //         <Nav.Link href="aboutus">About Us</Nav.Link>
//     //         <NavDropdown.Item href="contactus">Contact Us</NavDropdown.Item>
//     //       </Nav>
//     //       {!isAuthenticated ? (
//     //         <Button variant="outline-success" onClick={() => loginWithPopup()}>
//     //           Login
//     //         </Button>
//     //       ) : (
//     //         <Button variant="outline-success" onClick={() => logout()}>
//     //           Logout
//     //         </Button>
//     //       )}
//     //     </Navbar.Collapse>
//     //   </Container>
//     // </Navbar>
//   );
// };

// export default NavbarHome;

import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserAlt } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

import "./navbar.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const NavbarHome = () => {
  const [showOptions, setShowOptions] = useState(false);
  const navigate = useNavigate();
  const { loginWithPopup, logout, user, isAuthenticated } = useAuth0();

  const handleSignup = async () => {
    try {
      await loginWithPopup();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <NavLink to="/">
            <h2>
              <span>P</span>adh.
              <span>AI</span>
            </h2>
          </NavLink>
        </div>
        <div className={showOptions ? "mobile-menu-link" : "menu-link"}>
          <ul>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
            <li>
              {!isAuthenticated ? (
                <NavLink to="#" onClick={handleSignup}>
                  <FaUserAlt style={{ marginRight: "1rem" }} />
                  Login
                </NavLink>
              ) : (
                <NavLink
                  to="#"
                  onClick={() =>
                    logout({
                      returnTo: window.location.origin,
                    })
                  }
                >
                  <FaUserAlt style={{ marginRight: "1rem" }} />
                  Logout
                </NavLink>
              )}
            </li>
          </ul>
        </div>
        <div className="social">
          <div className="hamburger-menu">
            <NavLink to="#" onClick={() => setShowOptions(!showOptions)}>
              <GiHamburgerMenu />
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarHome;
