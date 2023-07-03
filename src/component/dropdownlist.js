import React from "react";

import { StyledSelect } from "../styles/Styled.Search.js";

// 下拉式選單，會傳資料給 API 去取得 JSON 顯示在下方的欄位
export default function DropdownList({ onChange, isLoading }) {
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
