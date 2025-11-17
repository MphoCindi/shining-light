import styled from "styled-components";

export const HomePageContainer = styled.div`
  display: flex;
  background-color: #e2a9f1;
  min-height: 100vh;
  padding: 0 20px;

  /* MOBILE layout → stack items vertically */
  @media (max-width: 768px) {
    flex-direction: column;
    padding-top: 40px;
  }
`;

export const Text = styled.h1`
  font-family: 'Varela Round', sans-serif;
  font-size: 5rem;
  line-height: 1.2;
  font-weight: normal;

  /* Smaller text on tablets */
  @media (max-width: 1024px) {
    font-size: 3.5rem;
  }

  /* Smaller text on mobile */
  @media (max-width: 768px) {
    font-size: 2.5rem;
    text-align: center;
  }
`;

export const ButtonStyle = styled.button`
  background-color: #00167a;
  color: white;
  border: none;
  padding: 15px 20px;
  border-radius: 25px;
  cursor: pointer;
  font-weight: bold;
  font-size: 2.5rem;
  width: 70%;
  font-family: 'Varela Round', sans-serif;
  margin-top: 20px;

  /* Tablet */
  @media (max-width: 1024px) {
    width: 80%;
    font-size: 2rem;
  }

  /* Mobile */
  @media (max-width: 768px) {
    width: 100%;
    font-size: 1.8rem;
    text-align: center;
  }
`;

export const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;

  /* Mobile: center everything */
  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

export const RightContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  img {
    height: 800px;
    object-fit: contain;

    /* Tablet */
    @media (max-width: 1024px) {
      height: 500px;
    }

    /* Mobile */
    @media (max-width: 768px) {
      height: 300px;
      margin-top: 30px;
    }
  }
`;
