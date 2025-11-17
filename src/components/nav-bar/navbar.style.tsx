import styled from "styled-components";

export const NavContainer = styled.nav`
  width: 100%;
  background-color: #6a0dad; 
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  position: relative;
  align-items: strech;
  
  h1 {
    margin: 0;
  }
`;

export const NavTitle = styled.h1`
  font-family: 'Varela Round', sans-serif;
  font-size: 1.5rem;
  color: #fff;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const NavButtons = styled.div<{ open?: boolean }>`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    display: ${(props) => (props.open ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: #6a0dad;
    padding: 10px 0;
  }
`;

export const NavButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-family: 'Varela Round', sans-serif;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    color: #e2a9f1;
  }
`;

export const Hamburger = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }

  div {
    width: 25px;
    height: 3px;
    background-color: #fff;
    margin: 5px 0;
    transition: all 0.3s;
  }
`;
