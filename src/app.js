// 引入各種要用的 hook 
import React from "react";
import SearchSection from "./component/searchSection";
// import AppearMap from "./appearmap.js";

export default function App() {
    return (
        <>
            <nav>
                <div>
                    <a href="#">
                        <img src="/src/img/logo.svg" width="96px" height="132px" />
                    </a>
                    <div>
                        <a href="#">關於我們</a>
                    </div>
                    <p>© 2023 GingerLemon.</p>
                </div>
            </nav>
            <main>
                <SearchSection/>
                {/* <AppearMap/> */}
            </main>
        </>
    );
}