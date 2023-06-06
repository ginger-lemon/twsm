// 導覽列元件

function generateNavBar() {
    // 取得要插入的容器
    const container = document.getElementById('navbarContainer');

    // 建立 navbar 容器（提供 css 切版）
    const navbarDiv = document.createElement('div');
    navbarDiv.className = 'navbarDiv';

    // 建立 logo 區域容器 
    const logoDiv = document.createElement('a');
    logoDiv.href = "./index.html"
    logoDiv.className = "logoDiv";

    // 建立 logo 要用的圖片 *2
    const logopics = document.createElement('img');
    logopics.src = "https://picsum.photos/67";
    const logotitle = document.createElement('img');
    logotitle.src = "https://picsum.photos/96/58";

    // 加入 logoDiv 內
    logoDiv.appendChild(logopics);
    logoDiv.appendChild(logotitle);
    
    
    // 建立網頁分頁容器
    const tabDiv = document.createElement('div');
    tabDiv.className = "tabDiv"
    // 建立分頁子項目
    const linkAbout = document.createElement('a');
    linkAbout.textContent = "關於我們";
    linkAbout.className = "linkName";
    linkAbout.href = "./about.html"
    const linkGame = document.createElement('a');
    linkGame.textContent = "香料遊戲";
    linkGame.className = "linkName";
    linkGame.href = "#";
    const linkRecipe = document.createElement('a');
    linkRecipe.textContent = "香料食譜";
    linkRecipe.className = "linkRecipe";
    linkRecipe.href = "#";

    // 把分頁超連結加入分頁容器中
    tabDiv.appendChild(linkAbout);
    tabDiv.appendChild(linkGame);
    tabDiv.appendChild(linkRecipe);

    // 導覽列最底部的 © 2023 GingerLemon.
    const copyright = document.createElement('p');
    copyright.textContent = "© 2023 GingerLemon.";
    copyright.className = "copyright";

    // 把全部節點加入到 navbarDiv 內
    navbarDiv.appendChild(logoDiv);
    navbarDiv.appendChild(tabDiv);
    navbarDiv.appendChild(copyright);

    // 把 navbarDiv 加入到 navbarContainer 內
    container.appendChild(navbarDiv);

}


