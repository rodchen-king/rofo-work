### 基本用法

日历基本使用。

:::demo
```html
<template>
  <vue-calendar />
</template>
```
:::


日历以周日开始第一天。
:::demo
```html
<template>
  <vue-calendar :week-label-index="0" />
</template>
```

:::

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| week-label-index     | 日历是否从周一开始          | string | 0（周日）/1（周一）/2（周二）/3（周三）/4（周四）/5（周五）/6（周六） | 1 |

### Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| dayClick | 点击日历事件 | — |