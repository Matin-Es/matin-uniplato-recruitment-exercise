import React from "react";
import { StyledContainerDiv } from "./Layout.style";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Search from "../components/Search/Search";
import Home from "../components/Home/Home";
import Posts from "../components/Posts/Posts";
import Profile from "../components/Profile/Profile";

const Layout: React.FC = () => {
  return (
    <>
      <StyledContainerDiv>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="posts" element={<Posts />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </StyledContainerDiv>{" "}
      <Navbar />
    </>
  );
};

export default Layout;
