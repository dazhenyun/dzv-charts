/*
 * @Describe: 词云
 */

import React from "react";
import { merge } from "../common/util";
import WrapCharts from "../common/WrapCharts";
import 'echarts-wordcloud';

const Page = (props) => {
	const { option = {}, ...rest } = props;

	let options = {
		tooltip: {},
		series: {
			type: "wordCloud",
			// Shape can be 'circle', 'cardioid', 'diamond', 'triangle-forward', 'triangle', 'pentagon', 'star'
			shape: 'circle',
			gridSize: 15, // 网格尺寸
			sizeRange: [12, 40], // 尺寸范围
			textStyle: {
				fontFamily: 'sans-serif',
				fontWeight: 'bold',
				// Color can be a callback function or a color string
				color: function () {
					// Random color
					return 'rgb(' + [
						Math.round(Math.random() * 160),
						Math.round(Math.random() * 160),
						Math.round(Math.random() * 160)
					].join(',') + ')';
				}
			},
			emphasis: {
				focus: 'self',

				textStyle: {
					shadowBlur: 10,
					shadowColor: '#333'
				}
			},
		},
		grid: {
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			containLabel: true
		},
	};

	options = merge(option, options);

	return (
		<WrapCharts {...rest} option={options} />
	);
};

export default Page;

