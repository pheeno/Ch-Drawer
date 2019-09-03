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

|    属性     |     类型      |  接受值               | 描述                                                                                                                                                                                                                           | 默认 |
| :--------------: | :-----------: | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-----: |
|     visible      |    Boolean    |                               | 显示/不显示抽屉组件，支持```sync```属性                                                                                                          |  false  |
|       area       | String |                               | 抽屉组件的覆盖区域，如果弹出方向为左/右，则为水平覆盖，影响```width```，其余为垂直覆盖，影响```height```，另外，传入的值应为```z%``` ,如果传入数字请添加```px```变为字符串 |
|  close-visible   |    Boolean    |                               | 是否显示关闭按钮                                                                                                                                                                                                             |  true   |
|       mask       |    Boolean    |                               | 是否显示遮罩层                                                                                                                                                                                                      |  true   |
|       blur       |    Boolean    |                               | 是否模糊根元素                                                                                                                                                                                          |  true   |
| destroy-on-close |    Boolean    |                               | 是否应该在关闭抽屉后卸载```content```中的组件，多用于表单和表格获取/更新数据                                                                                                             |  false  |
|      title       |    String     |                               | 标题字符串，将默认注入```header slot```                                                                                                                                                                                           |    -    |
|   custom-class   |    String     |                               | 给抽屉添加一个自定义类                                                                                                                                                                                                |    -    |
|     location     |    String     | 'left'/'right'/'top'/'bottom' | 抽屉的弹出方向                                                                                                                                                                                          | 'left'  |
|  escap-on-press  |    Boolean    |                               | 点击```esc```是否关闭抽屉                                                                                                                                                                                                  |  true   |
| escape-on-click  |    Boolean    |                               | 点击遮罩是否关闭抽屉                                                                                                                                                                 |  true   |
|   before-close   |   Function    |                               | 如果传入了方法，将会在关闭前调用，参数为```next```调用该函数则关闭抽屉                                                                                                               |    -    |
|       open       |               |                               | 抽屉打开时触发                                                                                                                                                                                                              |    -    |
|      opened      |               |                               | 抽屉完全打开，并且在动画结束后触发                                                                                                                                                                                        |    -    |
|      close       |               |                               | 抽屉关闭时触发                                                                                                                                                                                                             |    -    |
|      closed      |               |                               | 抽屉完全关闭，并且在动画结束后触发                                                                                                                                                                                      |    -    |
|      header      |     Slot      |                               | 头部插槽                                                                                                                                                                                                            |    -    |
|     default      |     Slot      |                               | 内容插槽(默认插槽)                                                                                                                                                                                                      |    -    |
|      footer      |     Slot      |                               | 底部插槽                                                                                                                                                                                                             |    -    |
