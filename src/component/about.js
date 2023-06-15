import React from "react";
import aboutContent from "./data/aboutContent.js";

// 預設只有第一個 card 會展開，其他都是預設關閉

function About() {
    return (
        <>
            <h2 className="about-title">關於我們</h2>
            <div>
                <AboutCard />
                <AboutCard />
                <AboutCard />
                <AboutCard />
            </div>
        </>
    );
}



function AboutCard() {
    return (
        <>
            <div className="about-card">
                <h3>卡片標題</h3>
                <div className="about-open">
                    <p className="about-hightlight">
                        highlight 
                    </p>
                    <p className="about-texts">
                        段落文字
                    </p>
                </div>
            </div>
            {/* 控制 card 開關的按鈕 */}
            <button className="btn-card">
                <img src="/src/img/extendBtn.svg"/>
            </button>
        </>
    );
}
