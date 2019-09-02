---
pageClass: custom-page
---

# 快速上手

## 介绍

Chrysophoron Drawer AKA ch-drawer 是一个简单的抽屉组件，主要服务于 web

## 安装

```
npm install ch-drawer --save
or
npm i ch-drawer
```

## 使用

```javascript
import Vue from 'vue';
import ChDrawer from 'ch-drawer';
Vue.use(ChDrawer, { zIndex: 1000 });
// zIndex default value is 200
```

## 示例

### 基本用法

支持四个方向的抽屉弹出方式，支持点击遮罩或按下`esc`关闭。

<demo componentName='examples-examples-location'></demo>

#### 源码

<<<@/docs/.vuepress/components/examples/examples-location.vue

### 带有嵌套的抽屉

支持多层嵌套的抽屉弹出使用方式,同时支持头部、内容、底部`slot`插槽注入

<demo componentName='examples-examples-nested'></demo>

#### 源码

<<<@/docs/.vuepress/components/examples/examples-nested.vue

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

