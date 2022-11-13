import React from "react";
import NavbarHome from "../Navbar";
// import "./contact.css";

function Contact() {
  return (
    <>
      <NavbarHome />
      <div
        className="container"
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <form
          style={{
            background: "#fff",
            display: "flex",
            flexDirection: "column",
            padding: "2vw 4vw",
            width: "90%",
            maxWidth: "600px",
            borderRadius: "10px",
          }}
        >
          <h3
            style={{
              color: "#555",
              fontWeight: "800",
              marginBottom: "20px",
            }}
          >
            Get In Touch
          </h3>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            required
            style={{
              border: "0",
              margin: "10px 0",
              padding: "20px",
              outline: "none",
              background: "#f5f5ff",
            }}
          ></input>
          <input
            type="email"
            id="email"
            placeholder="Email Id"
            required
            style={{
              border: "0",
              margin: "10px 0",
              padding: "20px",
              outline: "none",
              background: "#f5f5ff",
            }}
          ></input>
          <input
            type="text"
            id="phone"
            placeholder="Phone no."
            required
            style={{
              border: "0",
              margin: "10px 0",
              padding: "20px",
              outline: "none",
              background: "#f5f5ff",
            }}
          ></input>
          <textarea
            id="message"
            rows={4}
            placeholder="Your Message"
            style={{
              border: "0",
              margin: "10px 0",
              padding: "20px",
              outline: "none",
              background: "#f5f5ff",
            }}
          ></textarea>
          <button
            type="Submit"
            style={{
              padding: "15px",
              background: "#73abe8",
              color: "#fff",
              "font-size": "18px",
              border: "0",
              outline: "none",
              cursor: "pointer",
              width: "150px",
              margin: "20px auto 0",
              "border-radius": "30px",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
