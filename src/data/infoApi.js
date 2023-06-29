export function fetchData(value) {
    if (value === "Litsea cubeba") {
        console.log("成功連線抓取山胡椒資料");
        const responseData = {
            UUID: "a7348813-fff4-4812-ade1-cb7c83d6624c",
            name: "山胡椒",
            scientificname: "Litsea cubeba",
            alias: ["Litsea citrata Blume", "Actinodaphne citrata (Blume) Hayata"],
            labels: ["原生"],
            status: ["暫無危機"],
            classes: ["樟科", "木薑子屬"],
            imgUrl: "http://kplant.biodiv.tw/%E5%B1%B1%E8%83%A1%E6%A4%92/%E5%B1%B1%E8%83%A1%E6%A4%92-%E5%AF%A603.jpg",
            calledName: ["山雞椒", "MaKao（泰雅族）", "Maqrig（太魯閣族）", "Mae’aew （賽夏族）"],
            behavior: "分佈於台灣 1000 公尺上下中低海拔地區；開花期為 2-4 月，結果期為 6-8 月。",
            feature: "有薑與胡椒的香氣，全株皆可食用。果實曬乾後成紫黑色，外型似黑胡椒粒。",
            apply: "花朵可泡茶、嫩葉可入菜，許多原住民族將種子當成去腥的香料或鹽巴的替代品。"
        };
        return responseData;

    } else if (value === "Zanthoxylum ailanthoides") {
        console.log("成功連線抓取食茱萸資料");
        const responseData = {
            UUID: "d028a466-95d7-42a4-b79e-a8767fa9b261",
            name: "食茱萸",
            scientificname: "Zanthoxylum ailanthoides",
            alias: ["-"],
            labels: ["原生"],
            status: ["暫無危機"],
            classes: ["芸香科", "花椒屬"],
            imgUrl: "https://www.tbn.org.tw/sites/ozop/files/styles/extra_large/public/taxonbio/featured_image/biotaxon-d028a466-95d7-42a4-b79e-a8767fa9b261-3.jpg?itok=cHNdcBRz",
            calledName: ["紅刺楤", "鳥不踏","Tana （泰雅族）", "Kyana'kk（排灣族）"],
            behavior: "分佈於臺灣全島低地至海拔 1600 公尺山區，尤其是火燒森林後的新生地與崩落裸地；開花期為 8~9 月，結果期為 10~12 月。",
            feature: "1~2 月會長出嫩芽，嫩芽具有強烈香氣；葉柄與心部長成紅色，全株有刺且有香蔥味，枝幹上長滿瘤刺。",
            apply: "嫩葉或幼苗部分可食用，排灣族經常將嫩葉代替香料加入湯中調味；其他部分可作為藥用材料。"
        };
        return responseData;

    } else if (value === "Cinnamomum osmophloeum") {
        console.log("成功連線抓取土肉桂資料");
        const responseData = {
            UUID: "fbf16533-6d06-4262-beda-aa485ce236cc",
            name: "土肉桂",
            scientificname: "Cinnamomum osmophloeum",
            alias: ["Odourbark Cinnamomum", "Indigenous Cinnamon Tree"],
            labels: ["原生", "台灣特有"],
            status: ["接近受脅"],
            classes: ["樟科", "樟屬"],
            imgUrl: "http://kplant.biodiv.tw/%E5%9C%9F%E8%82%89%E6%A1%82/%E5%9C%9F%E8%82%89%E6%A1%82-%E8%91%8900.jpg",
            calledName: ["臺灣土玉桂", "山肉桂", "土肉桂"],
            behavior: "常見於台灣海拔 500~1500 公尺向陽陡峭山坡處；開花期為 6~9 月，結果期為 8~10 月。",
            feature: "外觀像胡氏肉桂，但枝幹表面平滑具有強烈的肉桂香氣；果實成熟後便紫黑色。",
            apply: "樹皮可代替肉桂，但台灣多用其葉子煮湯或泡茶；鄒族人將樹皮作為零食、阿美族將果實搭配檳榔食用；樹皮亦有藥用療效。"
        };
        return responseData;

    } else if (value === "Aralia cordata") {
        console.log("成功連線抓取土當歸資料");
        const responseData = {
            UUID: "033eaf01-963d-4c73-bd91-e34704ecd7e6",
            name: "食用土當歸",
            scientificname: "Aralia cordata",
            alias: ["Udo"],
            labels: ["原生"],
            status: ["接近受脅"],
            classes: ["五加科", "楤木屬"],
            imgUrl: "http://kplant.biodiv.tw/%E9%A3%9F%E7%94%A8%E5%9C%9F%E7%95%B6%E6%AD%B8/%E9%A3%9F%E7%94%A8%E5%9C%9F%E7%95%B6%E6%AD%B8-%E8%91%89%E6%AD%A302.JPG",
            calledName: ["臺灣土當歸", "食用楤木", "五葉參"],
            behavior: "分佈於台灣海拔 1800~2800 公尺山區草叢；開花期為 6~9 月，結果期為 8~10 月。",
            feature: "全株高 1~2 公尺，葉長 30~50 公分，卵形、長橢圓形或新型，邊緣鋸齒狀。",
            apply: "原住民使用嫩葉入菜煮湯增添香氣；整株皆可食用，根、莖具藥用療效。"
        };
        return responseData;

    } else if (value === "Rhus javanica") {
        console.log("成功連線抓取羅氏鹽膚木資料");
        const responseData = {
            UUID: "b830a4e3-225d-4222-b103-b0db715bb8e4",
            name: "羅氏鹽膚木",
            scientificname: "Rhus javanica",
            alias: ["Roxburgh Sumac"],
            labels: ["原生"],
            status: ["暫無危機"],
            classes: ["漆樹科", "漆樹屬"],
            imgUrl: "http://kplant.biodiv.tw/%E7%BE%85%E6%B0%8F%E9%B9%BD%E8%86%9A%E6%9C%A8/%E9%B9%BD%E8%86%9A%E6%9C%A8-%E9%B9%BD%E5%AF%A625.JPG",
            calledName: ["埔鹽", "山埔鹽", "台灣鹽麩子", "鹽東仔"],
            behavior: "生長於台灣 2000 公尺以下中低海拔向陽開闊地的叢林內，全台各地皆可見。",
            feature: "落葉性小喬木，花生長於枝頂，果實成熟時為成紅色。",
            apply: "原住民將果實外側包裹乳脂狀物作為食鹽替代物，嫩葉可做野菜食用；其他部位具藥用療效。"
        };
        return responseData;

    } else if (value === "Machilus kusanoi") {
        console.log("成功連線抓取大葉楠果時資料");
        const responseData = {
            UUID: "e540b1b3-77cd-41f9-a207-737259c577d3",
            name: "大葉楠",
            scientificname: "Machilus kusanoi",
            alias: ["Machilus japonica Siebold & Zucc. var. kusanoi (Hayata) J.C.Liao", "Persea kusanoi (Hayata) H.L.Li"],
            labels: ["原生", "台灣特有"],
            status: ["暫無危機"],
            classes: ["樟科", "楨楠屬"],
            imgUrl: "http://kplant.biodiv.tw/%E5%A4%A7%E8%91%89%E6%A5%A0/%E5%A4%A7%E8%91%89%E6%A5%A0-%E9%BB%91%E5%AF%A602.JPG",
            calledName: ["大葉楠", "草野楨楠", "大葉楠仔", "楠木", "楠仔"],
            behavior: "分佈於台灣全島中底海拔闊葉林的溪谷與潮濕處。",
            feature: "樹高可達 40 公尺；果實直徑約 1~1.5 公分，成熟時為紫黑色。",
            apply: "樹皮多作為蚊香、線香材料，魯凱族會食用其果實；果實曬乾後研磨可增添食材鮮味。"
        };
        return responseData;

    } else if (value === "Alpinia zerumbet") {
        console.log("成功連線抓取月桃資料");
        const responseData = {
            UUID: "b649a43f-0566-452a-a650-d93045896c27",
            name: "月桃",
            scientificname: "Alpinia zerumbet",
            alias: ["Alpinia speciosa (J.C.Wendl.) K.Schum.", "Alpinia fluvitialis Hayata、Alpinia schumanniana Valeton", "Languas schumanniana (Valeton) Sasaki", "Languas speciosa (Windl.) Samll", "Catimbium speciosum (J.C.Wendl.) Holttum"],
            labels: ["原生"],
            status: ["暫無危機"],
            classes: ["薑科", "月桃屬"],
            imgUrl: "http://kplant.biodiv.tw/%E6%9C%88%E6%A1%83/%E6%9C%88%E6%A1%83-%E8%8A%B1%E5%BA%8F06.jpg",
            calledName: ["良薑", "玉桃", "虎子花", "Bassiyan （泰雅族）", "Garto （排灣族）"],
            behavior: "分佈於台灣中低海拔平地與山區、蘭嶼、綠島。台灣生長的 18 種月桃中有 12 種為台灣特有種。",
            feature: "全株高 1~3 公尺，葉長 60~70 公分、寬 10~15 公分，花成漏斗狀向下生長。",
            apply: "其葉子多用來包粽子；泰雅族會將葉子、花、種子入菜，烹調方式包含水煮、涼拌與燒烤。"
        };
        return responseData;

    } else if (value === "Limnophila rugosa") {
        console.log("成功連線抓取大葉石龍尾資料");
        const responseData = {
            UUID: "1d8c9567-3652-4ea6-a19c-2a3ebb1e01ea",
            name: "大葉石龍尾",
            scientificname: "Limnophila rugosa",
            alias: ["-"],
            labels: ["原生"],
            status: ["易危"],
            classes: ["車前科", "石龍尾屬"],
            imgUrl: "http://kplant.biodiv.tw/%E5%A4%A7%E8%91%89%E7%9F%B3%E9%BE%8D%E5%B0%BE/%E5%A4%A7%E8%91%89%E7%9F%B3%E9%BE%8D%E5%B0%BE-%E8%91%8903.JPG",
            calledName: ["大葉田香", "水茴香", "水香菜", "水八角", "水胡椒"],
            behavior: "分佈於台灣低海拔沼澤與稻田中；花期為 9~12 月。",
            feature: "花冠為粉紅色或紫色，葉子對生、呈現卵形、橢圓形，味道與八角相似。",
            apply: "用於滷肉、製作點心與佐料；其葉子也是原住民製作酒麴的材料之一。"
        };
        return responseData;
    } else {
        // 如果 value 為 '' ，回覆空字串
        return '';
    }
    
} 

