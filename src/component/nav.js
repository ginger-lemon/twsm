import React from "react";

function Tabs() {
    return (
        <div>
            <a href="#">關於我們</a>
            {/* 之後視情況增加 */}
        </div>
    );
}

export default function NavBar() {
    return (
        <nav>
            <div>
                <a href="#">
                    <img 
                        src="../src/img/logo.svg" 
                        width="96px" 
                        height="132px"
                    />
                </a>  
            </div>
            <Tabs />
            <p>© 2023 GingerLemon.</p>
        </nav>
    );
}
