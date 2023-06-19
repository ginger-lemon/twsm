import React from "react";
import { useState, useEffect } from "react";
import { StyledSearchResult, StyledBasicInfoCard, StyledMoreInfoCard, StyledSelect, Tag, RowTexts, FixedTexts, ExtendTexts, CardContent } from "../styles/Styled.Search.js";

// 下拉式選單，會傳資料給 API 去取得 JSON 顯示在下方的欄位
function DropdownList({ onChange }) {
    return (
        <form>
            <StyledSelect>
                {/* TODO: option 無法再展開時固定在 select 下方 */}
                <select onChange={onChange}>
                    {optionData.map(
                        ({name, value}) => (
                        <option key={name} value={value}>{name}</option>
                    ))}
                </select>
            </StyledSelect>
        </form>
    );
}

// 中間區段，顯示學名、中文名稱、分類階層、別名、特別標記
function BasicInfoCard() {
    return (
        <StyledBasicInfoCard>
            {/* 香料的學名與中文名稱 */}
            <p className="species-latin">Litsea cubeba（var）</p>
            <p className="species-bold">山胡椒（var）</p>
            {/* 原生種/瀕危/水生/陸生等標籤 */}
            <div className="tags-block">
                <Tag>原生種</Tag>
                <Tag>陸生</Tag>
            </div>
            <p>
                樟科（var） {'>'} 木子薑屬（var）
            </p>
            <p>別名：</p>
            <p>Litsea citrata Blume、Actinodaphne citrata (Blume) Hayata （var）</p>
         </StyledBasicInfoCard>
    );
}

// 最下方更多資訊
function MoreInfoCard() {
    return (
        <StyledMoreInfoCard>
            <div className="infocard">
                <CardContent>
                {/* 卡片收合展開都固定的內容 */}
                    <FixedTexts>
                        <img 
                            src="https://picsum.photos/120"
                            width="120px"
                            height="120px"
                        />
                        <div>
                            <p>大家怎麼稱呼？</p>
                            <p>
                                山雞椒、MaKao（泰雅族）、Maqrig（太魯閣族）、Mae’aew （賽夏族）。（var）
                            </p>
                        </div>
                    </FixedTexts>

                    {/* 卡片展開才會出現的部分 */}
                    <RowTexts>
                        <p>特性｜</p>
                        <p>分佈於台灣 1000 公尺上下中低海拔地區；開花期為 2-4 月，結果期為 6-8 月。</p>
                    </RowTexts>
                    <RowTexts>
                        <p>特徵｜</p>
                        <p>有薑與胡椒的香氣，全株皆可食用。果實曬乾後成紫黑色，外型似黑胡椒粒。（js 測試）</p>
                    </RowTexts>
                    <RowTexts>
                        <p>應用｜</p>
                        <p>花朵可泡茶、嫩葉可入菜，許多原住民族將種子當成去腥的香料或鹽巴的替代品。（js 測試）</p>
                    </RowTexts>
                </CardContent>
            </div>
            
            <button type="button" className="btn-box">
                {/* 如果卡片收合：extendBtn.svg；卡片展開：closeBtn.svg */}
                <img src="../src/img/extendBtn.svg"/>
            </button>
        </StyledMoreInfoCard>
    );
}

export default function SearchResult() {
    const [species, setSpecies] = useState('');
    const [mapData, setMapData] = useState('');
    const [infoData, setInfoData] = useState('');

    // 連線到 API 取得物種資料：直接用 fetch 連線會有 CORS 的錯誤
    useEffect(() => {
        let isSubscibed = true;

        async function getInfoData(species) {
            try {
                const response = await fetch(`https://www.tbn.org.tw/api/v25/taxon?name=${species}`);
                if (!isSubscibed) {
                    return;
                }
                const data = await response.json();
                console.log(response);
                setInfoData(data);
                console.log('連線到 API 並抓取資料');
            } catch (error) {
                console.error('錯誤訊息： ' + error);
            }
        };

        if (species !== '') {
            getInfoData(species);
        }

        return () => {
            isSubscibed = false;
            setInfoData('');
        };
    }, [species]);



    // // 連線到 API 取得物種地圖：這個應該不會是放在這裡⋯⋯
    // useEffect(() => {
    //     // 處理取得 API 回傳資料延遲期間又按到下拉式選單的重複連線
    //     let isSubscibed = true;
        
    //     async function getMapData(species) {
    //         try {
    //             const response = await fetch(`https://map.tbn.org.tw/geoserver/wfs?request=getFeature&typeName=species:occurrence&CQL_FILTER=scientificname='${species}'&outputformat=json`);
    //             // 檢查是否訂閱，如果沒有訂閱則中斷此非同步函數
    //             if (!isSubscibed) {
    //                 return;
    //             }
    //             console.log('抓取地圖資料成功');
    //             const data = await response.json();
    //             setMapData(data);
    //             console.log(data);
    //             console.log('取得地圖資料並存到 setMapData 內');
    //         } catch (error){
    //             console.log('連線失敗： ' + error );
    //         }
    //     }

    //     if (species !== '') {
    //         getMapData(species);
    //     }

    //     // 取消上一次的訂閱
    //     return () => {
    //         isSubscibed = false;
    //         // 刪除前一次的 Mapdata 
    //         setMapData('');
    //     };
    // },[species]);
    
    function handleChange(e) {
        const newSpecies = e.target.value;
        if (newSpecies !== species) {
            console.log('我現在選到新的香料：' + newSpecies);
            setSpecies(newSpecies);
        }
    }

    return (
        <StyledSearchResult>
            <DropdownList onChange={handleChange}/>
            {species === '' ? '' : (
                <>
                    <BasicInfoCard />
                    <MoreInfoCard />
                </>
            )} 
           
        </StyledSearchResult>
    );
}


const optionData = [
    { name: "今天想找什麼香料呢？", value: "" },
    { name: "山胡椒（馬告）", value: "山胡椒" },
    { name: "食茱萸（刺蔥）", value: "Zanthoxylum ailanthoides" },
    { name: "土肉桂", value: "Cinnamomum osmophloeum" },
    { name: "土當歸", value: "Aralia cordata" },
    { name: "羅氏鹽膚木", value: "Rhus javanica" },
    { name: "大葉楠（果實）", value: "Machilus kusanoi" },
    { name: "月桃", value: "Alpinia zerumbet" },
    { name: "艾草", value: "Artemisia indica" },
    { name: "大葉石龍尾", value: "Limnophila rugosa" },
];

// Litsea cubeba