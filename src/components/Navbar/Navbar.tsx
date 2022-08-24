import React from "react";
import { NavLink, BrowserRouter as Router } from "react-router-dom";

import {
  StyledNavbarDiv,
  StyledHomeIcon,
  StyledSearchIcon,
  StyledPostsIcon,
  StyledProfileIcon,
  StyledNavBarHolderNav,
  StyledContainerDiv,
  StyledNavLink,
} from "./Navbar.style";

const Navbar: React.FC = () => {
  // const [isActive, setIsActive] = React.useState(false);
  // const toogleIsActive = () => {
  // setIsActive(() => !isActive);

  // comp property
  // comp property

  // };
  return (
  
      <StyledContainerDiv>
        <StyledNavLink activeclassname="selected" to={""}>
          <StyledNavBarHolderNav>
            <StyledHomeIcon></StyledHomeIcon>
            <StyledNavbarDiv> Home</StyledNavbarDiv>
          </StyledNavBarHolderNav>
        </StyledNavLink>
        <StyledNavLink activeclassname="selected" to={"search"}>
          <StyledNavBarHolderNav>
            <StyledSearchIcon></StyledSearchIcon>
            <StyledNavbarDiv>Search</StyledNavbarDiv>
          </StyledNavBarHolderNav>
        </StyledNavLink>
        <StyledNavLink activeclassname="selected" to={"posts"}>
          <StyledNavBarHolderNav>
            <StyledPostsIcon></StyledPostsIcon>
            <StyledNavbarDiv>Posts</StyledNavbarDiv>
          </StyledNavBarHolderNav>
        </StyledNavLink>
        <StyledNavLink activeclassname="selected" to={"profile"}>
          <StyledNavBarHolderNav>
            <StyledProfileIcon></StyledProfileIcon>
            <StyledNavbarDiv>Profile</StyledNavbarDiv>
          </StyledNavBarHolderNav>
        </StyledNavLink>
      </StyledContainerDiv>
  );
};

export default Navbar;
