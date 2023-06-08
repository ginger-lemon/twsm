// 導覽列元件

function generateNavBar() {
    // 取得要插入的容器
    const container = document.getElementById('navbarContainer');

    // 建立 navbar 容器（提供 css 切版）
    const navbarDiv = document.createElement('div');
    navbarDiv.className = 'navbarDiv';


    // 建立 logo 區域容器 
    const logoDiv = document.createElement('div');
    logoDiv.className = "logoDiv";

    // 建立一個 a 裡面放圖片讓使用者點擊圖片可以連到首頁
    const logolink = document.createElement('a');
    logolink.href = "index.html";
    const logo = document.createElement('img');
    logo.src = "./src/img/logo.svg";

    logolink.appendChild(logo);

    // 加入 logoDiv 內
    logoDiv.appendChild(logolink);
    
    
    // 建立網頁分頁容器
    const tabDiv = document.createElement('div');
    tabDiv.className = "tabDiv"
    // 建立分頁子項目
    const linkAbout = document.createElement('a');
    linkAbout.textContent = "關於我們";
    linkAbout.href = "./about.html"
    const linkGame = document.createElement('a');
    linkGame.textContent = "香料遊戲";
    linkGame.href = "#";
    const linkRecipe = document.createElement('a');
    linkRecipe.textContent = "香料食譜";
    linkRecipe.href = "#";

    // 把分頁超連結加入分頁容器中
    tabDiv.appendChild(linkAbout);
    tabDiv.appendChild(linkGame);
    tabDiv.appendChild(linkRecipe);

    // 導覽列最底部的 © 2023 GingerLemon.
    const copyright = document.createElement('div');
    copyright.textContent = "©2023 GingerLemon.";
    copyright.className = "copyright";

    // 把全部節點加入到 navbarDiv 內
    navbarDiv.appendChild(logoDiv);
    navbarDiv.appendChild(tabDiv);
    navbarDiv.appendChild(copyright);

    // 把 navbarDiv 加入到 navbarContainer 內
    container.appendChild(navbarDiv);

}


