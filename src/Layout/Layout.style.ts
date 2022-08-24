import styled from "styled-components";
export const StyledContainerDiv = styled.div`
  display: block;
  width: 375px;
  height: 713px;
  padding: auto;
  margin: auto;
  overflow-y: auto;
  overflow-x: hidden;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
  &::-webkit-scrollbar {
    display: none; //chrome
    scrollbar-width: none; //firefox
  }
`;
