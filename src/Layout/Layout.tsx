import React from "react";
import { Routes, Route } from "react-router-dom";
import { StyledContainerDiv } from "./Layout.style";
import Navbar from "../components/Navbar/Navbar";
import Home from "../components/Home/Home";
import Search from "../components/Search/Search";
import Posts from "../components/Posts/Posts";
import Profile from "../components/Profile/Profile";
import PageNotFound from "../components/PageNotFound/PageNotFound";
const Layout: React.FC = () => {
  return (
    <>
      <StyledContainerDiv id="containerElement">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="posts" element={<Posts />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>{" "}
      </StyledContainerDiv>

      <Navbar />
    </>
  );
};

export default Layout;
