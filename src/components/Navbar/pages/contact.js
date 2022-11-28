import React, { useRef } from "react";
import NavbarHome from "../Navbar";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w4p1sis",
        "template_ouiz4rf",
        form.current,
        "UY_lTkSuCNYJO560L"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
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
          ref={form}
          onSubmit={sendEmail}
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
            name="user_name"
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
            name="user_email"
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
            name="user_phone"
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
            name="message"
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
};

export default Contact;
