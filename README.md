# Ch-Drawer 
A simple drawer component based on Vue.js and used on PC
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
|-- | -- | -- | -- | -- |
| visible | Boolean |  | Should drawer component be displayed support ```.sync``` notation | false|
area | String/Number || Drawer's area, if Drawer is horizontal mode it will effect ```width``` proporty, otherwise it weill effect ```height```proporty, when area is ```number``` type it define the area by pixels, when area is ```string```type it define the area by ```z%```|'25%'|





