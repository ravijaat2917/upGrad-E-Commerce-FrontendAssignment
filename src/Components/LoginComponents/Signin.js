import React, { useState } from "react";
import axios from "axios";
import "./Signin.css";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Here you would handle the form submission,
    // e.g., send the data to a server.
    console.log("Form submitted:", {
      email,
      password,
    });
  };

  return (
    <div>
      {/* Header */}
      <div
        style={{
          backgroundColor: "#3f51b5",
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <i
            class="fa-solid fa-cart-shopping"
            style={{ color: "#ffffff", marginTop: 18, paddingLeft: 20 }}
          ></i>
          <p style={{ color: "white", paddingLeft: 10, fontWeight: 600 }}>
            upGrad E-Shop
          </p>
        </div>
        <div style={{ marginRight: 25, marginTop: 13 }}>
          <a
            href=""
            style={{
              color: "#ffff",
              fontSize: 13,
              marginRight: 12,
              textDecoration: "underline",
            }}
          >
            Login
          </a>
          <a
            href=""
            style={{
              color: "#ffff",
              fontSize: 13,
              textDecoration: "underline",
            }}
          >
            Sign Up
          </a>
        </div>
      </div>

      {/* Other content */}
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          marginTop: 120,
        }}
      >
        <div style={{ width: 350 }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div>
              <div
                style={{
                  paddingRight: 12,
                  paddingLeft: 12,
                  paddingTop: 10,
                  paddingBottom: 10,
                  backgroundColor: "#F50157",
                  borderRadius: 60,
                }}
              >
                <i class="fa-solid fa-lock" style={{ color: "#ffffff" }}></i>
              </div>
            </div>
          </div>
          <p
            style={{
              color: "black",
              fontSize: 20,
              fontWeight: 500,
              textAlign: "center",
            }}
          >
            Sign in
          </p>
          <form onSubmit={handleSubmit}>
            <div
              className="form-group"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <label
                htmlFor="email"
                style={{
                  position: "absolute",
                  backgroundColor: "#ffff",
                  marginLeft: 2,
                  fontSize: 12,
                  paddingLeft: 5,
                }}
              >
                Email Address *
              </label>
              <input
                style={{ marginTop: 10, fontSize: 18, padding: 5 }}
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: 18,
              }}
              className="form-group"
            >
              <label
                style={{
                  position: "absolute",
                  backgroundColor: "#ffff",
                  marginLeft: 2,
                  fontSize: 12,
                  paddingLeft: 5,
                }}
                htmlFor="password"
              >
                Password *
              </label>
              <input
                style={{ marginTop: 10, fontSize: 18, padding: 5 }}
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              style={{
                width: "100%",
                marginTop: 20,
                padding: 6,
                color: "white",
                backgroundColor: "blue",
                fontSize: 13,
                fontWeight: 600,
                borderWidth: 0,
              }}
              type="submit"
            >
              SIGN IN
            </button>
            <div style={{ marginTop: 10 }}>
              <a
                style={{
                  fontSize: 12,
                  color: "purple",
                  textDecoration: "underline",
                }}
              >
                Don't have an account? Sign Up
              </a>
            </div>
          </form>
        </div>
      </div>
      <p
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          textAlign: "center",
          fontSize: 10,
        }}
      >
        CopyRight <i class="fa-regular fa-copyright"></i> upGrad 2021
      </p>
    </div>
  );
};

export default Signin;
