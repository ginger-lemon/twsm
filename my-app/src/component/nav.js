import React from "react";
import { StyledNav, StyledTabs, Logo, StyledFooter  } from "../styles/Styled.Navbar.js";
import logoImg from "../img/logo.svg";
import githubImg from "../img/github.svg";

function Tabs() {
    return (
        <StyledTabs>
            <a 
                href="https://ginger-lemon.medium.com/list/8e84b2d3130f" 
                target="_blank" 
                rel="noreferrer noopener" 
            >
                開發紀錄
            </a>
            <a 
                href="https://github.com/ginger-lemon/twsm" 
                target="_blank" 
                rel="noreferrer noopener"
            >
                <img src={githubImg} alt="github" />
            </a>
        </StyledTabs>
    );
}

export default function NavBar() {
    return (
        <StyledNav className="nav-fixed">
            <Logo>
                <a href=".">
                    <img src={logoImg} alt="logo" />
                </a> 
            </Logo> 
            <Tabs />
            <StyledFooter>
                <p>© 2023 GingerLemon.</p>
            </StyledFooter>
        </StyledNav>
        
    );
}
