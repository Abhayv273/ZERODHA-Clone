import React, { useState } from "react";
import { useAuth } from "./AuthContext";

const ProfileMenu = () => {
  const { user, logout } = useAuth();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleProfileClick = () => {
    setIsDrawerOpen(true);
  };

  const handleClose = () => {
    setIsDrawerOpen(false);
  };

  const handleLogout = () => {
    logout();
  };

  const getInitials = () => {
    if (!user) return "??";
    const first = user.firstName ? user.firstName[0] : "";
    const last = user.lastName ? user.lastName[0] : "";
    return (first + last).toUpperCase();
  };

  return (
    <>
      {/* Profile icon in the top bar */}
      <div className="profile" onClick={handleProfileClick} style={{ cursor: "pointer" }}>
        <div className="avatar">{getInitials()}</div>
        <h4 className="username">{user ? user.username : "Loading..."}</h4>
      </div>

      {/* Overlay background when drawer is open */}
      {isDrawerOpen && (
        <div
          onClick={handleClose}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.3)",
            zIndex: 998,
          }}
        />
      )}

      {/* Sliding drawer panel */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: isDrawerOpen ? 0 : "-320px",
          width: "300px",
          height: "100vh",
          background: "#fff",
          boxShadow: "-2px 0 12px rgba(0,0,0,0.15)",
          zIndex: 999,
          transition: "right 0.3s ease",
          padding: "24px",
          boxSizing: "border-box",
        }}
      >
        <button
          onClick={handleClose}
          style={{
            background: "none",
            border: "none",
            fontSize: "20px",
            cursor: "pointer",
            float: "right",
          }}
        >
          ✕
        </button>

        <div style={{ clear: "both", textAlign: "center", marginTop: "24px" }}>
          <div
            className="avatar"
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              background: "#4a90d9",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
              fontWeight: "600",
              margin: "0 auto 16px auto",
            }}
          >
            {getInitials()}
          </div>

          <h3 style={{ margin: "0 0 4px 0" }}>
            {user ? `${user.firstName} ${user.lastName}` : "Loading..."}
          </h3>

            <small style={{ margin: "0 0 4px 0" }}>
            {user ? `${user.occupation}` : "Loading..."}
          </small>

          <p style={{ margin: "0 0 4px 0", color: "#666" }}>
            {user ? `@${user.username}` : ""}
          </p>
          <p style={{ margin: "0 0 24px 0", fontSize: "13px", color: "#999" }}>
            {user ? user.email : ""}
          </p>


          {/* <hr style={{ margin: "16px 0" }} /> */}

          <button
            onClick={handleLogout}
            style={{
              width: "100%",
              padding: "10px 0",
              background: "#e74c3c",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "15px",
              marginTop: "12px",
            }}
          >
            Logout
          </button>
        </div>

       
    <div
      style={{
        maxWidth: "600px",
        margin: "30px auto",
        padding: "5px",
        border: "1px solid #e5e7eb",
        borderRadius: "10px",
        background: "#ffffff",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        // boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      }}
    >
      <h4
        style={{
          margin: "1 0 10px",
          color: "#1f2937",
        }}
      >
        Thanks for Visiting My Project!
      </h4>

      <p
        style={{
          fontSize: "15px",
          color: "#4b5563",
          lineHeight: "1.7",
          marginBottom: "20px",
        }}
      >
        If you enjoyed exploring this project, please consider giving it a ⭐ on
        GitHub & connect <a href="https://www.linkedin.com/in/abhay-verma-36488325b/" target="blank">LinkedIn</a>, share and leaving your valuable feedback.
       
      </p>

      <p
        style={{
          fontSize: "16px",
          color: "#111827",
          fontWeight: "600",
          marginBottom: "25px",
        }}
      >
        Aspiring Full Stack Developer
        &nbsp;
        <small>Feel free to connect or reach out!❤️&nbsp;Thank You!!</small>
          
      </p>
         
    </div>
 

      </div>
    </>
  );
};

export default ProfileMenu;