import React from "react";
import { StyledNav, StyledTabs, Logo, StyledFooter  } from "../styles/Styled.Navbar.js";

function Tabs() {
    return (
        <StyledTabs>
            <a href="#">關於我們</a>
        </StyledTabs>
    );
}

export default function NavBar() {
    return (
        <StyledNav>
            <Logo>
                <a href="/dist/index.html">
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
