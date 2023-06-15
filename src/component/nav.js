import React from "react";
import { StyledNav, StyledTabs, Logo, StyledFooter  } from "../styles/Styled.Navbar.js";

function Tabs() {
    return (
        <StyledTabs>
            <a href="#">關於我們</a>
            {/* 之後視情況增加 */}
            <a href="#">香料食譜</a>
        </StyledTabs>
    );
}

export default function NavBar() {
    return (
        <StyledNav>
            <Logo>
                <a href="#">
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
