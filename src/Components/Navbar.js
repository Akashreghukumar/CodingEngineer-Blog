import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../Configs/firebaseConfig";

const Navbar = () => {
  const navigate = useNavigate();
  const hasAuth = localStorage.getItem("AuthKey");

  const navlinkpage = () => {
    console.log("Login clicked");
    navigate("/login");
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/login");
        localStorage.clear("AuthKey");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="nav-bar">
      <div sm={4} md={4} className="centerfields">
        <img
          className="logo-img"
          src="https://yt3.ggpht.com/hl-pTaz79SrS12_5pI3k39pMC5MHBu7XkzR8BE9NkkXnd2lWa7v4oLXc-sftEb-ZdcQibAyjhQ=s176-c-k-c0x00ffffff-no-rj-mo"
          alt="logo"
        />
        <h2>The Coding Engineer</h2>
      </div>
      <div sm={8} md={8} className="centerfields">
        <Link to="/">Home</Link>
        <Link to="/videos">Videos</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="centerfields">
        {!hasAuth ? (
          <>
            <button onClick={navlinkpage} className="nav-btn">
              Login
            </button>
            <button className="nav-btn">Signup</button>
          </>
        ) : (
          <button className="nav-btn" onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
