// 中間下拉式選單與結論部分


// 下拉式選單
function generateDorpdowList() {
    const droplistContainer = document.getElementById('droplistDiv');

    const searchList = document.createElement('select');
    searchList.className = "searchList";
    searchList.id = "searchList";
    searchList.innerHTML = `
        <option>今天想找什麼香料呢？</option>
        <option value="山胡椒">山胡椒 / 馬告</option>
        <option value="食茱萸">食茱萸 / 刺蔥</option>
        <option value="土肉桂">土肉桂</option>
        <option value="土當歸">土當歸</option>
        <option value="羅氏鹽膚木">羅氏鹽膚木</option>
        <option value="大葉楠果實">大葉楠果實</option>
        <option value="月桃">月桃</option>
        <option value="艾草">艾草</option>
        <option value="紫蘇">紫蘇</option>
        <option value="大葉石龍尾">大葉石龍尾</option>
    `;

    droplistContainer.appendChild(searchList);
}

// 顯示搜尋結果
function generateSearchResult() {
    // 選擇插入容器
    const resultContainer = document.getElementById('resultContainer');
    
    const infoBox = document.createElement('div');
    infoBox.className = "infoBox";
    infoBox.innerHTML = `
        <div class="nameDiv">
            <p class="itailicName">Litsea cubeba（js 測試）</p>
            <p class="speciesName">山胡椒（js 測試）</p>
        </div> 
        <div class="tagsDiv">
            <div class="tags">原生種（js 測試）</div>
        </div> 
        <div class="classDiv">
            <p>
               <span>樟科（js 測試）</span> > <span>木子薑屬（js 測試）</span>
            </p>
        </div> 
    `;

    const moreInfoBox = document.createElement('div');
    moreInfoBox.className = "moreInfoBox";
    moreInfoBox.innerHTML = `
        <div class="moreInfoCard">
            <div class="fixedPart">
                <img 
                    src="https://picsum.photos/120"
                    width="120px"
                    height="120px"
                />
                <p>
                    又稱：<br/>
                    山雞椒、MaKao（泰雅族）、Maqrig（太魯閣族）、Mae’aew （賽夏族）。（js 測試）
                </p>
            </div>
            <!-- 延展的部分 -->
            <div class="extendanlePart">
                <div>
                    <!-- display: block; -->
                    <p><b>特性｜ </b></p>
                    <p>分佈於台灣 1000 公尺上下中低海拔地區；
                    開花期為 2-4 月，結果期為 6-8 月。（js 測試）</p>
                </div>
                <div>
                    <!-- display: block; -->
                    <p><b>特徵｜ </b></p>
                    <p>有薑與胡椒的香氣，全株皆可食用。果實曬
                    乾後成紫黑色，外型似黑胡椒粒。（js 測試）</p>
                </div>
                <div>
                    <!-- display: block; -->
                    <p><b>應用｜ </b></p>
                    <p>花朵可泡茶、嫩葉可入菜，許多原住民族將
                    種子當成去腥的香料或鹽巴的替代品。（js 測試）</p>
                </div>
            </div>
        </div>
        <div class="moreInfoBtn" width="48px" height="48px">
            <img 
                src="https://picsum.photos/48"
                class="btn-extend"
            />
            <img 
                src="https://picsum.photos/48"
                class="btn-close"
            />
        </div>
    `;
    
    resultContainer.appendChild(infoBox);
    resultContainer.appendChild(moreInfoBox);
}



