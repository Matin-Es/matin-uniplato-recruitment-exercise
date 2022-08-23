import styled from "styled-components";
export const StyledContainerDiv = styled.div`
  display: block;
  width: 375px;
  height: 713px;
  padding: auto;
  margin: auto;
  overflow-y: auto;
  overflow-x: hidden;
  /* border: 1px solid red; */
  text-align: center;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
  &::-webkit-scrollbar {
    display: none;
    scrollbar-width: none;
  }
`;
