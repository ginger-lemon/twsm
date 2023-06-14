// 引入各種要用的 hook 
import React from "react";
import SearchSection from "./component/search-section.js";
import NavBar from "./component/nav.js";
import AppearMap from "./component/appearmap.js";

export default function App() {
    return (
        <>
            <NavBar />
            <main>
                <SearchSection/>
                <AppearMap/>
            </main>
        </>
    );
}