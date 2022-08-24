import styled from "styled-components";
import { ReactComponent as LoadingIcon } from "../../assets/icons/loading.svg";
export const Loading = styled(LoadingIcon)`
  width: 62px;
  height: 62px;
  margin: auto;
`;
export const StyledDiv = styled.div`
  position: relative;
  top: 50%;
  left: 0%;
`;
export const StyledBackToTopContainer = styled.div`
  background-image: url("https://icon-library.com/images/up-icon-png/up-icon-png-5.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 25px;
  background-color: white;
  cursor: pointer;
  width: 35px;
  height: 35px;
  position: sticky;
  top: 645px;
  margin: auto;
  margin-bottom: 12px;
  border-radius: 20%;
  display: flex;
`;
