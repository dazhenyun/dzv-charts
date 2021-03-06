# @dzv/charts
一个基于echarts5的按需加载图表组件库

## 目前支持图表
```jsx
import {
    Line,       // 折线图
    Bar,        // 柱状图
    LineBar,    // 折柱图
    Pie,        // 饼图
    Radar,      // 雷达图
    Funnel,     // 漏斗图
    Gauge,      // 仪表盘
    WordCloud,  // 词云
    LiquidFill, // 水球图
    Tmap        // 地图
} from '@dzv/charts';
```

## API

| 参数        | 说明                                                      | 类型    | 默认值               |
| ----------- | --------------------------------------------------------- | ------- | -------------------- |
| height      | 图表高度                                                  | number    | 300                |      
| theme        | 主题                                                   | string    | default                 |      
| option        | 同echarts的option                                     | object  | -                    |     
| getChartInstance | 获取图表实例回调         | function  | -                    |        