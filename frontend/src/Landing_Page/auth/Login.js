import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Auth.css";

export default function Login({ showSignup }) {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      alert("Please fill all fields.");
      return;
    }

    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/login`, form);
      // localStorage.setItem("authToken", res.data.token);
      //  window.location.href = `http://localhost:3001/?token=${res.data.token}`; // redirect to dashboard
       window.location.href = `${process.env.REACT_APP_DASHBOARD_URL}/?token=${res.data.token}`;
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="auth-page ">
      <div className="left-section">
        <h1>Welcome Back</h1>
        <p>Login to access your portfolio, holdings, positions and orders.</p>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
          />

          <div className="password-box">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
            />

            <button
              type="button"
              className="show-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <button className="login-btn">Login</button>
        </form>

        <div className="bottom-links">
          <Link to="*">Forgot Password?</Link>

          <p>
            Don't have an account?{" "}
            <button type="button" className="btn btn-link p-0" onClick={showSignup}>
              Create Account
            </button>
          </p>
        </div>
      </div>

      <div className="right-section ">
        <img src="/media/images/signup.png" alt="Illustration" />
      </div>
    </div>
  );
}