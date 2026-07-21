import React, { useState } from "react";
import "./Steps.css";

function Step2({ data, updateFormData, next, back }) {
  const [formData, setFormData] = useState({
    username: data.username || "",
    password: data.password || "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    updateFormData({ username: formData.username, password: formData.password });
    next(); // this now triggers handleFinalSignup in AuthPage
  };

  return (
    <div className="container auth-step-container mt-4">
      <div className="row align-items-center justify-content-between gx-5">
        <div className="col-lg-6 text-center">
          <img src="../media/images/signup.png" alt="Signup" className="img-fluid auth-image" />
        </div>

        <div className="col-lg-6 p-5">
          <div className="auto-form p-5">
            <h2 className="mb-2">Security</h2>
            <p className="text-muted mb-4">Secure your account with your unique name and password.</p>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  className="form-control"
                  type="text"
                  name="username"
                  placeholder="username should be unique:user234"
                  value={formData.username}
                  onChange={handleChange}
                  maxLength={10}
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder="Create Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <input
                  className="form-control"
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="d-flex justify-content-between">
                <button type="button" className="btn btn-outline-secondary" onClick={back}>
                  ← Back
                </button>

                <button type="submit" className="btn btn-primary">
                  Signup →
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step2;