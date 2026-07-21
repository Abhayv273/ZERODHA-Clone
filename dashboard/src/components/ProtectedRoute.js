const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("authToken");
//  frontend url
  if (!token) {
    // window.location.href = "http://localhost:3000";
     window.location.href = process.env.REACT_APP_FRONTEND_URL;
    return null;
  }

  return children;
};

export default ProtectedRoute;