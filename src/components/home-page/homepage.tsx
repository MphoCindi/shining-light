import React, { useEffect, useRef, useState } from "react";
import { ButtonStyle, HomePageContainer, LeftContainer , RightContainer, Text} from "./homepage.style";
import logo from "../../assets/homepage.png";

export const HomePage: React.FC = () => {

    const learnmore = () => {
        console.log("I was clicked")
    }
    
    const leftRef = useRef<HTMLDivElement>(null);
    const [leftHeight, setLeftHeight] = useState<number>(0);

    useEffect (() => {
        if ( leftRef.current){
            setLeftHeight(leftRef.current.offsetHeight)
        }
    }, []);
    
   return (
    <>
    <HomePageContainer>
        
    <LeftContainer ref={leftRef}>

        <Text>Growing in Faith, Love and Learning</Text>
        
        <ButtonStyle onClick={learnmore}>
            Learn More
        </ButtonStyle>
    </LeftContainer>

    <RightContainer>
        <img src={logo} alt="The logo" style={{ height: leftHeight}}/>
    </RightContainer>
    </HomePageContainer>
    </>
    );
};

export default HomePage