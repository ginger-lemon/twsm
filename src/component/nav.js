import React from "react";
import { StyledNav, StyledTabs, Logo, StyledFooter  } from "../styles/Styled.Navbar.js";

function Tabs() {
    return (
        <StyledTabs>
            <a href="https://ginger-lemon.medium.com/list/8e84b2d3130f" target="_blank">開發紀錄</a>
            <a href="https://github.com/ginger-lemon/twsm" target="_blank">
                <img src="../src/img/github.svg"/>
            </a>
        </StyledTabs>
    );
}

export default function NavBar() {
    return (
        <StyledNav className="nav-fixed">
            <Logo>
                <a href=".">
                    <img src="../src/img/logo.svg" />
                </a> 
            </Logo> 
            <Tabs />
            <StyledFooter>
                <p>© 2023 GingerLemon.</p>
            </StyledFooter>
        </StyledNav>
        
    );
}
