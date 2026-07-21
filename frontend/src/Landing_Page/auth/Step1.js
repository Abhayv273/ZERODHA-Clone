import React, { useState } from "react";
import "./Steps.css";

function Step1({ data, updateFormData, next, back }) {
  const [formData, setFormData] = useState({
    firstName: data.firstName || "",
    lastName: data.lastName || "",
    gender: data.gender || "",
    occupation: data.occupation || "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateFormData(formData);
    next();
  };

  return (
    <div className="container auth-step-container mt-5 min-vh-100 ">
      <div className="row align-items-center justify-content-between gx-5">
        <div className="col-lg-6 text-center">
          <img src="../media/images/signup.png" alt="Signup" className="img-fluid auth-image" />
        </div>

        <div className="auto-form col-lg-6 p-5 mx-auto" style={{ maxWidth: "650px" }}>
          <h2 className="mb-2">Personal Details</h2>
          <p className="text-muted mb-4">Tell us a little about yourself.</p>

          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <input
                  className="form-control"
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  style={{textTransform:"uppercase"}}
                   onInput={(e)=>{
                e.target.value=e.target.value.toUpperCase();
              }}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  style={{textTransform:"uppercase"}}
                   onInput={(e)=>{
                e.target.value=e.target.value.toUpperCase();
              }}
                  required
                />
              </div>

              <div className="col-12 mb-4">
                <select
                  className="form-select"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="col-12 mb-4">
              <select
                className="form-select"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
                required
              >
                <option value="">Select Occupation</option>
                <option>Student</option>
                <option>Salaried</option>
                <option>Self-employed</option>
                <option>Unemployed</option>
              </select>
            </div>

            <div className="d-flex justify-content-between">
              <button type="button" className="btn btn-outline-secondary" onClick={back}>
                ← Back
              </button>

              <button type="submit" className="btn btn-primary">
                Continue →
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Step1;