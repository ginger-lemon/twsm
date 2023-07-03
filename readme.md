# 台灣原生香料地圖 Taiwanese Native Spices Map


> ### A quick and simple introduction for people who are new to Taiwanese native spices.

The Taiwanese Native Spices Map utilizes data from the Taiwan Biodiversity Network (TBN) and combines it with imformation about spices plants from other platforms to present basic infomation and distribution of the spices.

> 提供剛接觸台灣原生香料的人快速入門的簡單資訊。

台灣原生香料地圖將使用台灣生物多樣性資料庫的資料，並結合其他平台對香料植物的介紹，呈現該香料的簡易資訊與分佈位置。

## DEMO

![台灣原生香料地圖]()


## Development Environment

### Frontend 

- HTML
- React (js frame)
- styled-compoments (for css)

### Packages (for map)

- leaflet.js
- react-leaflet
- react-leaflet-cluster

### Development Tool

- npm (for managing packages)
- webpack (for bundle)
- Babel (for js, JSX)
- Git/Github (version control)


## Features

### Search spices

![](../present/gif/main-feature.gif)

Users can select different spice names from the dropdown list. The section below will present basic information; while the map on the right side will show the distribution of the selected spices in Taiwan.

P.S. The distribution shown on the map represents the observed positions at present. In reality, the species may have a wider distribution.

使用者可透過下拉式選單選取不同的香料名稱，選單下方會顯示該香料的基本資訊、右側地圖會顯示該香料在台灣的分佈位置。

註：地圖顯示的分佈位置為目前有觀測到的香料植物位置，實際上該物種的分佈範圍可能更廣。

### More Information

![](../present/gif/card-click.gif)

The basic information about the spices is divided into two parts:

- Above:

	Provides information about selected spice's name, scientific name, classification, and whether it is a native species or not.

- Below:

	Presents the common name and provides a brief introduction to the behaviors, features, and application of the spices.
	
	By default, both section are shown, but users can press the button to choose whether to hide the  information below.

香料基本資訊區塊分為兩部分：上方呈現物種名稱、學名、分類與是否為原生種等資訊；下方提供俗名、植物特性、特徵與應用的簡要介紹。

預設顯示上下兩個部分，使用者可透過按下按鈕選擇是否要顯示下方的資訊。


### Responsive Web Design (RWD)

![](../present/gif/rwd.gif)

Implementing Response Web Design (RWD) to ensure users have the best experience across different devices.

The dimensions used for RWD: 1280px, 720px

透過 RWD ，使用者在不同裝置上都有最佳的體驗。

RWD 運用的尺寸： 1280px, 720px。


## Reference 

- [台灣生物多樣性網絡 （Taiwan Biodiversity Network，TBN）](https://www.tbn.org.tw/)
- [認識植物](http://kplant.biodiv.tw/)
- [【國產香料大進擊】十種臺灣原生香草植物小百科（上）](https://www.agriharvest.tw/archives/38707)
- [【國產香料大進擊】十種臺灣原生香草植物小百科（下）](https://www.agriharvest.tw/archives/38720)
- [食材庫：5種風味萬千的原住民食材](https://guide.michelin.com/tw/zh_TW/article/features/5-taiwan-aboriginal-ingredients)