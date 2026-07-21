import React, { useState } from "react";
import "./Auth.css";

function Signup({ data, updateFormData, next, showLogin }) {
  const [email, setEmail] = useState(data.email || "");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      alert("Please enter your email address.");
      return;
    }

    updateFormData({ email });
    next();
  };

  return (
    <div className="auth-container py-5 ">
      <header className="row align-items-center mt-5 p-5">
        <div className="col-lg-6">
          <div className="p-2">
            <h2>Create your account</h2>
            <p>Enter your email address to begin your account setup.</p>
          </div>

          <form onSubmit={handleSubmit}>
            <input
              className="form-control mb-3"
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button className="btn btn-primary w-100" type="submit">
              Next Step →
            </button>
          </form>

          <p className="mt-3">
            Already have an account?{" "}
            <button
              style={{ textDecoration: "none" }}
              type="button"
              className="btn btn-link p-0"
              onClick={showLogin}
            >
              Login
            </button>
          </p>
        </div>

        <div className="col-lg-6 text-center">
          <img src="../media/images/signup.png" alt="Signup" className="img-fluid auth-image" />
        </div>
      </header>
    </div>
  );
}

export default Signup;