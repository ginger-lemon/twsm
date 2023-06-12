// 導覽列元件

// 取得要插入的容器
function generateNavBar() {
    const container = document.getElementById('navbarContainer');

    // 建立 navbar 容器集中管理各項元素
    const navbarDiv = document.createElement('div');
    navbarDiv.className = "navbarDiv";

    // 建立 navbar 底下的 HTML 標籤
    navbarDiv.innerHTML = `
        <div class="logoDiv">
            <a href="index.html">
                <img 
                    src="./src/img/logo.svg" width="96px"
                    height="132px"
                />
            </a>
        </div>
        <div class="tabDiv">
            <a href="./about.html">關於我們</a>
            <a href="#">香料遊戲</a>
            <a href="#">香料食譜</a>
        </div>
        <div class="copyright">
            ©2023 GingerLemon.
        </div>
    `;

    // 加入到容器內
    container.appendChild(navbarDiv);
}