# Taiwanese Native Spices Map

A quick introduction of Taiwanese native species for beginners.

## What is the Taiwanese Native Spices Map

![mockup](https://i.imgur.com/59R9Cz4.png)

The [Taiwanese Native Spices Map](https://ginger-lemon.github.io/twsm/) is utilized geographic data from the Taiwanese Biodiversity Network (TBN), along with spices introductions and resources from other platforms.
Users can access basic information and the distribution location of the selected spice through a dropdown list.

## Getting Started 

### Prerequisites

Before running the application, make sure you have the following installed:

- node.js: v18.16.0
- npm: v9.5.1

### Available Script 

- `npm install` to install dependencies for the app after cloning the repository.
- `npm start` to run the app in the development mode.
- `npm run build` to build the app in the production mode.

## Techniques

The frontend of the Taiwanese Native Spices Map is developed using Create React App (CRA) and incorporates map packages, leaflet.js and react-leaflet 
to visualize geographic data from the Taiwanese Biodiversity Network. 
The deployment is managed through GitHub Pages. 
(The initial development environment was configured with webpack and React, 
the project encountered deployment issues on GitHub Pages, which led to transitioning to CRA.)

### Frontend

- HTML
- CSS
- Javascript: ES6(destructuring assignment, arrow functions...)
- React ![](https://user-images.githubusercontent.com/134685249/265774391-d7516740-d8ec-439f-a64c-2c574c15fffc.png)
- React Hooks (useState, useEffect)
- styled-components: manage style for components ![](https://user-images.githubusercontent.com/134685249/265771138-11a4692f-8c99-4db7-81c7-e2b2eb31478e.png)
- leaflet.js: visualize geographic datas
- react-leaflet: visualize geographic datas ![](https://camo.githubusercontent.com/936b346f16b23f97a21e3d4cf1370bd8f37397575989a125946f47eee9df22c5/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f72656163742d6c6561666c65742e737667)

### Development Tools

- git/GitHub: version control
- GitHub Pages: deployment

## Features

- Select spice and show the distribution location

![show](https://i.imgur.com/xWEBniM.gif)

- close or extend the info card

![card](https://i.imgur.com/bsTWlsD.gif)

- Across Devices (RWD)

![RWD](./my-app/imgformd/rwd.gif)


## Development Diary

You can check the weekly diary here: [development record](https://ginger-lemon.medium.com/list/8e84b2d3130f)
