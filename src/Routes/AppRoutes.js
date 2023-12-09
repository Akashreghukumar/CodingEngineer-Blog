import { Routes, Route,useLocation } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import React, { useEffect } from "react";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import BlogFullView from "../Pages/Blog/BlogFullView";
import Navbar from '../Components/Navbar'
import Video from "../Pages/Video/Video";

const AppRoutes = () => {
  const hasAuth = localStorage.getItem("AuthKey");
  const currentPage = useLocation()
  console.log("Current page", currentPage)
  console.log("hasauth", hasAuth);

  return (
    <>
    {
      currentPage.pathname != '/login' ? <Navbar/> : ""
    }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/videos" element={<Video/>}/>
        <Route path="/fullblog" element={<BlogFullView/>} />
      </Routes>
    </>
  );
};

export default AppRoutes;
