# Ch-Drawer 
A simple drawer component based on Vue.js and used on Web
## Install
```
npm install ch-drawer --save
```

## Usage
```javascript
import Vue from 'vue';
import ChDrawer from 'ch-drawer'
Vue.use(ChDrawer)
```
## API
| Attribute | Type | Accepted Values | Description | Default |
|:--: | :--: | -- | -- | :--:|
| visible | Boolean |  | Should drawer component be displayed support ```.sync``` notation | false|
area | String/Number || Drawer's area, if Drawer is horizontal mode it will effect ```width``` proporty, otherwise it weill effect ```height```proporty, when area is ```number``` type it define the area by pixels, when area is ```string```type it define the area by ```z%```|'25%'|
close-visible| Boolean |  | Display of close button | true |
mask | Boolean | | Display of mask of drawer | true | 
blur | Boolean | Should change```document.body``` become blurry | true |
destroy-on-close|Boolean| | Should destroy component in default slot,if set value to be ```true``` it will be destroyed after hidding drawer | false |
title | String || title string will inserted in ```header slot```| - | 
custom-class | String || Add a custom class on drawer container | - |
location | String |'left'/'right'/'top'/'bottom'|Describe which direction should drawer popup |'left'|
escapeOnPress | Boolean ||When press ```esc``` should close drawer | true |
escapeOnClick | Boolean || When click on container(outside of the drawer) should close drawer | true |
beforeClose | Function || If set, close process will be halted| - |
open |||Trigger when drawer open | - |
opened |||Trigger when drawer open animation is finished | - |
close ||| Trigger when drawer close | - | 
closed ||| Trigger when drawer closed animation is finished | - |






