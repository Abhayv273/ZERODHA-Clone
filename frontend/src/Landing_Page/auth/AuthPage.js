import { useState } from "react";
import axios from "axios";
import Signup from "./Signup";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Login from "./Login";

function AuthPage() {
  const [page, setPage] = useState("signup");

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    gender: "",
    occupation: "",
    username: "",
    password: "",
  });

  const updateFormData = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };
  //   dashboard url 
  const handleFinalSignup = async () => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/signup`, formData);
      // localStorage.setItem("authToken", res.data.token);
          // window.location.href = `http://localhost:3001/?token=${res.data.token}`; // redirect to dashboard
          window.location.href = `${process.env.REACT_APP_DASHBOARD_URL}/?token=${res.data.token}`;
          
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <>
      {page === "signup" && (
        <Signup
          data={formData}
          updateFormData={updateFormData}
          next={() => setPage("step1")}
          showLogin={() => setPage("login")}
        />
      )}

      {page === "step1" && (
        <Step1
          data={formData}
          updateFormData={updateFormData}
          next={() => setPage("step2")}
          back={() => setPage("signup")}
        />
      )}

      {page === "step2" && (
        <Step2
          data={formData}
          updateFormData={updateFormData}
          next={handleFinalSignup}
          back={() => setPage("step1")}
        />
      )}

      {page === "login" && (
        <Login showSignup={() => setPage("signup")} />
      )}
    </>
  );
}

export default AuthPage;