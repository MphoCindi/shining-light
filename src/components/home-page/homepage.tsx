import React from "react";
import { ButtonStyle, HomePageContainer, LeftContainer , RightContainer, Text} from "./homepage.style";
import logo from "../../assets/homepage.png";

export const HomePage: React.FC = () => {

    const learnmore = () => {
        console.log("I was clicked")
    }
    
    
   return (
    <>
    <HomePageContainer>
        
    <LeftContainer >

        <Text>Growing in Faith, Love and Learning</Text>
        
        <ButtonStyle onClick={learnmore}>
            Learn More
        </ButtonStyle>
    </LeftContainer>

    <RightContainer>
        <img src={logo} alt="The logo" />
    </RightContainer>
    </HomePageContainer>
    </>
    );
};

export default HomePage