import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as HomeSvg } from "../../assets/icons/home.svg";
import { ReactComponent as SearchSvg } from "../../assets/icons/search.svg";
import { ReactComponent as PostsSvg } from "../../assets/icons/posts.svg";
import { ReactComponent as ProfileSvg } from "../../assets/icons/profile.svg";

interface NavLinkInterface {
  activeclassname: string;
}

export const StyledContainerDiv = styled.div`
  display: flex;
  width: 375px;
  padding: 10px;
  font-size: 12px;
  font-weight: bold;
  margin: auto;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const StyledNavbarDiv = styled.div`
  opacity: 0;
  cursor: pointer;
  position: relative;
  left: -15px;
  text-align: center;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  width: 0px;
  height: 100%;
`;

export const StyledHomeIcon = styled(HomeSvg)`
  &:hover {
    color: #00bedf;
  }
  color: #879db2;
  display: flex;
  transition: 0.3s;
  width: 24px;
  height: 24px;
  margin: 10px;
`;

export const StyledSearchIcon = styled(SearchSvg)`
  &:hover {
    color: #00bedf;
  }
  color: #879db2;
  display: flex;
  transition: 0.5s;
  width: 24px;
  height: 24px;
  margin: 10px;
`;
export const StyledPostsIcon = styled(PostsSvg)`
  &:hover {
    color: #00bedf;
  }
  color: #879db2;
  display: flex;
  transition: 0.5s;
  width: 24px;
  height: 24px;
  margin: 10px;
`;
export const StyledProfileIcon = styled(ProfileSvg)`
  &:hover {
    color: #00bedf;
  }
  color: #879db2;
  display: flex;
  transition: 0.5s;
  width: 24px;
  height: 24px;
  margin: 10px;
`;

export const StyledNavBarHolderNav = styled.nav`
  border-radius: 200px;
  cursor: pointer;
  text-align: center;
  width: 93.75px;
  justify-content: center;
  align-items: center;
  display: flex;
  &:hover {
    color: #00bedf;
  }
  &:hover ${StyledNavbarDiv} {
    opacity: 1;
    display: flex;
    position: relative;
    left: -10px;
    color: #00bedf;
    width: 35px;
    height: 20px;
  }
  &:hover
    ${StyledHomeIcon},
    &:hover
    ${StyledSearchIcon},
    &:hover
    ${StyledPostsIcon},
    &:hover
    ${StyledProfileIcon} {
    transform: translate(-10px, 00%);
    color: #00bedf;
  }
`;

export const StyledNavLink = styled(NavLink)<NavLinkInterface>`
  text-decoration: none;

  &.active ${StyledNavBarHolderNav} {
    background-color: #b3ebf7;
    height: 32px;
  }
  &.active ${StyledNavbarDiv} {
    opacity: 1;
    display: flex;
    position: relative;
    left: -10px;
    color: #00bedf;
    width: 35px;
    height: 20px;
  }
  &.active ${StyledHomeIcon} {
    transform: translate(-10px, 00%);
    color: #00bedf;
  }
  &.active ${StyledSearchIcon} {
    transform: translate(-10px, 00%);
    color: #00bedf;
  }
  &.active ${StyledPostsIcon} {
    transform: translate(-10px, 00%);
    color: #00bedf;
  }
  &.active ${StyledProfileIcon} {
    transform: translate(-10px, 00%);
    color: #00bedf;
  }
`;
