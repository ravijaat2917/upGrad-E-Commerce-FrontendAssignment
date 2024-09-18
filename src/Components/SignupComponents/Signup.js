import React, { useState } from "react";
import axios from "axios";
import "./Signup.css";
import { apiBaseUrl } from "../../env";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Perform validation here
    const res = await axios.post(
      `https://dev-project-ecommerce.upgrad.dev/api/auth/signup`,
      {
        email,
        password,
        firstName,
        lastName,
        contactNumber,
      }
    );

    // Handle success
    console.log("Signup successful:", res.data);

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
            href="/"
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
            href="/signup"
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
          marginTop: 70,
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
            Sign Up
          </p>
          <form onSubmit={handleSubmit}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: 18,
              }}
              className="form-group"
            >
              <input
                style={{ marginTop: 0, fontSize: 18, padding: 5 }}
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                placeholder="First Name *"
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
              <input
                style={{ marginTop: 0, fontSize: 18, padding: 5 }}
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                placeholder="Last Name *"
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
              <input
                style={{ marginTop: 0, fontSize: 18, padding: 5 }}
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email Address *"
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
              <input
                style={{ marginTop: 0, fontSize: 18, padding: 5 }}
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password *"
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
              <input
                style={{ marginTop: 0, fontSize: 18, padding: 5 }}
                type="password"
                id="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                placeholder="Confirm Password *"
              />
            </div>{" "}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: 18,
              }}
              className="form-group"
            >
              <input
                style={{ marginTop: 0, fontSize: 18, padding: 5 }}
                type="tel"
                id="contactNumber"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                required
                placeholder="Contact Number *"
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
              SIGN UP
            </button>
            <div style={{ marginTop: 15, textAlign: "right" }}>
              <a
                href="/"
                style={{
                  fontSize: 12,
                  color: "purple",
                  textDecoration: "underline",
                }}
              >
                Already have an account? Sign In
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
        CopyRight <i class="fa-regular fa-copyright"></i>{" "}
        <a style={{ color: "purple" }}>upGrad</a> 2021
      </p>
    </div>
  );
};

export default Signup;
