import styled from "styled-components";


export const HomePageContainer = styled.div`
  display: flex;
  background-color: #e2a9f1;
  align-items: stretch;
  width: 100%;
  min-height: 100vh;
  `;

export const Text = styled.h1`
font-family: 'Varela Round', sans-serif;
font-size: 5rem;
line-height: 1.2;
font-weight: normal;
`;

export const ButtonStyle = styled.button `
    background-color: #00167a;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 25px;
    cursor: pointer;
    font-weight: bold;
    font-size: 3rem;
    width: 70%;
    font-family: 'Varela Round', sans-serif;
    `;


export const LeftContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    `;


  export const RightContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  img {
    height: 100%;
    object-fit: contain;
  }
`;
