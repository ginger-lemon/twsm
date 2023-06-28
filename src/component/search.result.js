import React from "react";
import { useState } from "react";
import { StyledSearchResult, StyledBasicInfoCard, StyledMoreInfoCard, StyledSelect, Tag, RowTexts, FixedTexts, CardContent } from "../styles/Styled.Search.js";

// 下拉式選單，會傳資料給 API 去取得 JSON 顯示在下方的欄位
function DropdownList({ onChange, isLoading }) {
    return (
        <form>
            <StyledSelect>
                {/* TODO: option 無法再展開時固定在 select 下方 */}
                <select 
                    onChange={onChange}
                    disabled={isLoading}
                >
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
function BasicInfoCard({infoData}) {
    const { alias } = infoData;
    const { classes } = infoData;
    const { labels } = infoData;

    return (
        <StyledBasicInfoCard>
            {/* 香料的學名與中文名稱 */}
            <p className="species-latin">{infoData.scientificname}</p>
            <p className="species-bold">{infoData.name}</p>
            {/* 原生種/瀕危/水生/陸生等標籤 */}
            <div className="tags-block">
                {labels && labels.map((labels, index) => (<Tag key={index}>{labels}</Tag>))}
            </div>
            {classes && <p>{classes.join(' > ')}</p>}
            <p>別名：</p>
            {alias && <p>{alias.join('、')}</p>}
         </StyledBasicInfoCard>
    );
}

// 最下方更多資訊
function MoreInfoCard({infoData}) {
    const [isExtended, setIsExtend] = useState(false);
    const { calledName } = infoData;

    function handleExtend() {
        setIsExtend(!isExtended);
    }

    return (
        <StyledMoreInfoCard>
            <div className="infocard">
                <CardContent>
                {/* 卡片收合展開都固定的內容 */}
                    <FixedTexts>
                        <img 
                            // TODO: 圖片比例跑掉
                            src={infoData.imgUrl}
                            width="120px"
                            height="120px"
                        />
                        <div>
                            <p>大家怎麼稱呼？</p>
                            {calledName && <p>{calledName.join('、')}</p>}
                        </div>
                    </FixedTexts>

                    {/* 卡片展開才會出現的部分 */}
                    <div style={{display: isExtended? 'block' : 'none'}}>
                        <RowTexts >
                            <p>特性｜</p>
                            <p>{infoData.behavior}</p>
                        </RowTexts>
                        <RowTexts>
                            <p>特徵｜</p>
                            <p>{infoData.feature}</p>
                        </RowTexts>
                        <RowTexts>
                            <p>應用｜</p>
                            <p>{infoData.apply}</p>
                        </RowTexts>
                    </div>
                </CardContent>
            </div>

            {isExtend ? 
                (<button type="button" className="btn-box" onClick={handleExtend}>
                    <img src="../src/img/closeBtn.svg"/>
                </button>) :
                (<button type="button" className="btn-box" onClick={handleExtend}>
                    <img src="../src/img/extendBtn.svg"/>
                </button>)}
            
        </StyledMoreInfoCard>
    );
}

export default function SearchResult({ onChange, species, infoData, isLoading }) {

    return (
        <StyledSearchResult>
            <DropdownList onChange={onChange} isLoading={isLoading}/>
            {species === '' ? '' : (
                <>
                    <BasicInfoCard infoData={infoData}/>
                    <MoreInfoCard infoData={infoData}/>
                </>
            )} 
        </StyledSearchResult>
    );
}


const optionData = [
    { name: "今天想找什麼香料呢？", value: "" },
    { name: "山胡椒（馬告）", value: "Litsea cubeba" },
    { name: "食茱萸（刺蔥）", value: "Zanthoxylum ailanthoides" },
    { name: "土肉桂", value: "Cinnamomum osmophloeum" },
    { name: "土當歸", value: "Aralia cordata" },
    { name: "羅氏鹽膚木", value: "Rhus javanica" },
    { name: "大葉楠（果實）", value: "Machilus kusanoi" },
    { name: "月桃", value: "Alpinia zerumbet" },
    { name: "大葉石龍尾", value: "Limnophila rugosa" },
];
