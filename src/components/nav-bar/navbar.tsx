import React, { useState } from "react";
import { NavContainer, NavTitle, NavButtons, NavButton, Hamburger } from "../nav-bar/navbar.style";

const navItems = ["Home", "About", "Programs", "Gallery", "Contact Us"];

export const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <NavContainer>
      <NavTitle>Shining Light Academy</NavTitle>

      <Hamburger onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </Hamburger>

      <NavButtons open={menuOpen}>
        {navItems.map((item) => (
          <NavButton key={item}>{item}</NavButton>
        ))}
      </NavButtons>
    </NavContainer>
  );
};

export default NavBar;
