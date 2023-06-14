import React from "react";

const optionData = [
    { name: "今天想找什麼香料呢？", value: "" },
    { name: "山胡椒 / 馬告", value: "山胡椒" },
    { name: "食茱萸 / 刺蔥", value: "食茱萸" },
    { name: "土肉桂", value: "土肉桂" },
    { name: "土當歸", value: "土當歸" },
    { name: "羅氏鹽膚木", value: "羅氏鹽夫木" },
    { name: "大葉楠果實", value: "大葉楠果實" },
    { name: "月桃", value: "月桃" },
    { name: "艾草", value: "艾草" },
    { name: "大葉石龍尾", value: "大葉石龍尾" },
];

// 下拉式選單，會傳資料給 API 去取得 JSON 顯示在下方的欄位
function DropdownList() {
    return (
        <form>
            <select id="droplist-search">
                <option disabled selected value="">今天想找什麼香料呢？</option>
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
            </select>
        </form>
    );
}

// 中間區段，顯示學名、中文名稱、分類階層、別名、特別標記
function NameField() {
    return (
        <>
            {/* 香料的學名與中文名稱 */}
            <p className="species-latin">Litsea cubeba（var）</p>
            <p className="species-bold">山胡椒（var）</p>
            {/* 原生種/瀕危/水生/陸生等標籤 */}
            <div className="tags-block">
                <div className="tags">
                    原生種（var）
                </div>
            </div>
            <p className="species-class">
                樟科（var） {'>'} 木子薑屬（var）
            </p>
            <div className="species-alias">
                <p>別名</p>
                <p>Litsea citrata Blume、Actinodaphne citrata (Blume) Hayata （var）</p>
            </div>
        </>
    );
}

// 最下方更多資訊
function MoreInfoCard() {
    return (
        <>
            <div className="infocard">
                {/* 卡片收合展開都固定的內容 */}
                <div className="card-fixed">
                    <img 
                        src="https://picsum.photos/120"
                        width="120px"
                        height="120px"
                    />
                    <p>
                        <b>大家怎麼稱呼：</b><br/>
                        山雞椒、MaKao（泰雅族）、Maqrig（太魯閣族）、Mae’aew （賽夏族）。（var）
                    </p>
                </div>
                {/* 卡片展開才會出現的部分 */}
                <div className="card-extend">
                    <div>
                        <p>特性｜</p>
                        <p>分佈於台灣 1000 公尺上下中低海拔地區；開花期為 2-4 月，結果期為 6-8 月。（js 測試）</p>
                    </div>
                    <div>
                        <p>特徵｜</p>
                        <p>有薑與胡椒的香氣，全株皆可食用。果實曬乾後成紫黑色，外型似黑胡椒粒。（js 測試）</p>
                    </div>
                    <div>
                        <p>應用｜</p>
                        <p>花朵可泡茶、嫩葉可入菜，許多原住民族將種子當成去腥的香料或鹽巴的替代品。（js 測試）</p>
                    </div>
                </div>
            </div>
            <button className="btn-box">
                {/* 如果卡片收合：extendBtn.svg；卡片展開：closeBtn.svg */}
                <img src="/src/img/extendBtn.svg"/>
            </button>
        </>
    );
}

export default function SearchSection() {
    return (
        <section>
            <DropdownList />
            <NameField />
            <MoreInfoCard />
        </section>
    );
}

