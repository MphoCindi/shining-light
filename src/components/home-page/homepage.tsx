import React from "react";
import { buttonStyle, HomePageContainer, LeftContainer , RightContainer} from "./homepage.style";
import logo from "../../assets/homepage.png";


export const HomePage: React.FC = () => {

    const learnmore = () => {
        console.log("I was clicked")
    }
    
   return (
    <>
    <div style={HomePageContainer}>
    <div style={LeftContainer}>
        <h1>Growing in Faith, Love and Learning</h1>
        
        <button style={buttonStyle} onClick={learnmore}>
            Learn More
        </button>
    </div>

    <div style={RightContainer}>
        <img src={logo} alt="The logo" style={{width: '200px'}} />
    </div>
    </div>
    </>
    );
};

export default HomePage