# Ch-Drawer  

![Build Status](https://www.travis-ci.org/pheeno/Ch-Drawer.svg?branch=master)
[![Netlify Status](https://api.netlify.com/api/v1/badges/5f83335c-7ff0-47bf-bcb8-1715e37a50cf/deploy-status)](https://app.netlify.com/sites/chdrawer/deploys)

A simple drawer component based on Vue.js and used on Web  [docs here](https://chdrawer.netlify.com/)
## Install
```
npm install ch-drawer --save
```

## Usage
```javascript
import Vue from 'vue';
import ChDrawer from 'ch-drawer'
Vue.use(ChDrawer, { zIndex: 1000 });
// zIndex default value is 200
```
## API
| Attribute | Type | Accepted Values | Description | Default |
|:--: | :--: | -- | -- | :--:|
| visible | Boolean |  | Should drawer component be displayed support ```.sync``` notation | false|
area | String/Number || Drawer's area, if Drawer is horizontal mode it will effect ```width``` proporty, otherwise it will effect ```height```proporty, when area is ```number``` type it define the area by pixels, when area is ```string```type it define the area by ```z%```|'25%'|
close-visible| Boolean |  | Should show  close button | true |
mask | Boolean | | Should  masked  drawer's container | true | 
blur | Boolean | |Should change```document.body``` become blurry | true |
destroy-on-close|Boolean| | Should destroy component in default slot,if set value to be ```true``` it will be destroyed after hidding drawer | false |
title | String || title string will inserted in ```header slot```| - | 
custom-class | String || Add a custom class on drawer container | - |
location | String |'left'/'right'/'top'/'bottom'|Describe which direction should drawer popup |'left'|
escap-on-press | Boolean ||When press ```esc``` should close drawer | true |
escape-on-click | Boolean || When click on container(outside of the drawer) should close drawer | true |
before-close | Function || If set, close process will be halted, function accept ```next``` to keep close process continue| - |
open |||Trigger when drawer open | - |
opened |||Trigger when drawer open animation is finished | - |
close ||| Trigger when drawer close | - | 
closed ||| Trigger when drawer closed animation is finished | - |
header | Slot || Slot which named ```header```| - |
default | Slot || Default slot on drawer's content| - |
footer | Slot || Slot which named ```footer```| - |







