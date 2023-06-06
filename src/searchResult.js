// 取得下拉式選單結果後才會顯示的結果 

function generateSpeciesResult() {
    // 取得要插入的容器
    const container = document.getElementById('resultContainer');


    // 建立基本資料節點
    const infoBox = document.createElement('div');
    infoBox.id = "infoBox";
    infoBox.className = "infoBox";



    // 建立搜尋香料名稱節點
    const taxonNameDiv = document.createElement('div');
    taxonNameDiv.className = "taxonNameDiv";
    
    // 建立子節點
    const scientificName= document.createElement('p');
    scientificName.className = "scientificName"; 
    scientificName.textContent = "Litsea cubeba"; // 測試用
    const speciesName  = document.createElement('p');
    speciesName.className = "speciesName";
    speciesName.textContent = "山胡椒"; // 測試用
    const decoline = document.createElement('br');

    taxonNameDiv.appendChild(scientificName);
    taxonNameDiv.appendChild(speciesName);
    taxonNameDiv.appendChild(decoline);


    // 建立原生/特有種等標籤
    const taxonTagDiv = document.createElement('div'); 
    taxonTagDiv.className = "taxonTagDiv";

    // 建立標籤
    const speciesTag = document.createElement('div');
    speciesTag.className = "speciesTag"; // 測試用
    const tagname = document.createElement('p');
    speciesTag.textContent = "原生種"; // 測試用

    speciesTag.appendChild(tagname);
    taxonTagDiv.appendChild(speciesTag); // 測試用
 

    // 建立分類與別稱
    const taxonotherDiv = document.createElement('div');
    taxonotherDiv.className = "taxonotherDiv";
    
    // 建立子節點
    const levelArea = document.createElement('p');
    levelArea.className = "levelArea";
    const level = ["樟科", "木子薑屬"]; // 測試用
    levelArea.textContent = level.join(">");
    const aliasArea = document.createElement('p');
    aliasArea.className = "aliasArea";
    const alias = [
        "Litsea citrata Blume", 
        "Actinodaphne citrata (Blume) Hayata"]; //測試用
    aliasArea.textContent = "別名：" + alias.join("、"); // 測試用

    taxonotherDiv.appendChild(levelArea);
    taxonotherDiv.appendChild(aliasArea);
    

    // 把節點放入 infoBox
    infoBox.appendChild(taxonNameDiv);
    infoBox.appendChild(taxonTagDiv);
    infoBox.appendChild(taxonotherDiv);



    // 建立其他資訊卡
    const moreInfoBox = document.createElement('div');
    moreInfoBox.className = "moreInfoBox";

    // 資訊卡常態出現部分
    const moreInfoCard = document.createElement('div');
    moreInfoCard.className = "moreInfoCard"
    

    const speciesPic = document.createElement('img');
    speciesPic.src="https://picsum.photos/120"; // 測試用
    speciesPic.className = "speciesPic";
    const speciesCommonName = document.createElement('p');
    speciesCommonName.className = "speciesCommonName";
    const commonName = ["山雞椒、MaKao（泰雅族）", "Maqrig（太魯閣族）", "Mae’aew （賽夏族）"]; // 測試用
    speciesCommonName.textContent = "又稱："  + commonName.join("、"); // 測試用
  
    // 右上角按鈕
    const cardBtn = document.createElement('div');
    cardBtn.className = "cardBtn";
    const cardBtnText = document.createElement('p');
    cardBtnText.textContent = "∧"; 

    cardBtn.appendChild(cardBtnText);

    moreInfoCard.append(speciesPic);
    moreInfoCard.append(speciesCommonName);
    moreInfoCard.append(cardBtn);
    
    
    // 資訊卡點開擴充部分，平常的 display 會是 none
    const moreInfoTexts = document.createElement('div');
    moreInfoTexts.className = "moreInfoTexts";

    // 擴充部分 
    const moreTexts01 = document.createElement('p');
    moreTexts01.className = "moreTexts";
    const moreTexts02 = document.createElement('p');
    moreTexts02.className = "moreTexts";
    const moreTexts03 = document.createElement('p');
    moreTexts03.className = "moreTexts";
    const speciesProperty = "分佈於台灣 1000 公尺上下中低海拔地區；開花期為 2-4 月，結果期為 6-8 月。"; // 測試用
    const speciesFeature = "有薑與胡椒的香氣，全株皆可食用。果實曬乾後成紫黑色，外型似黑胡椒粒。"; // 測試用
    const speciesApply = "花朵可泡茶、嫩葉可入菜，許多原住民族將種子當成去腥的香料或鹽巴的替代品。";
    moreTexts01.textContent = "特性｜ " + speciesProperty;
    moreTexts02.textContent = "特徵｜ " + speciesFeature;
    moreTexts03.textContent = "應用｜ " + speciesApply;
    
    // 擴充部分加入資訊卡
    moreInfoTexts.appendChild(moreTexts01);
    moreInfoTexts.appendChild(moreTexts02);
    moreInfoTexts.appendChild(moreTexts03);
    


    // 加入到資訊卡中
    moreInfoBox.appendChild(moreInfoCard);
    moreInfoBox.appendChild(moreInfoTexts);
    

    // 將新增節點加入容器內 
    container.appendChild(infoBox);
    container.appendChild(moreInfoBox);

}