/*
 * @Describe: 折柱图
 */

import React from "react";
import * as echarts from 'echarts/core';
import { merge } from "../common/util";
import WrapCharts from "../common/WrapCharts";

import {
	LineChart,
	BarChart
} from 'echarts/charts';

import {
	DataZoomComponent
} from 'echarts/components';

echarts.use(
	[
		LineChart,
		BarChart,
		DataZoomComponent
	]
);

const Page = (props) => {
	const { option = {}, ...rest } = props;

	let options = {
		grid: {
			top: 60
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'cross',
				crossStyle: {
					color: '#999'
				}
			}
		},
		legend: {
			right: 0,
			itemWidth: 10,
			itemHeight: 10,
		},
		yAxis: [
			{
				type: 'value'
			},
			{
				type: 'value'
			}
		]
	};

	let sourceOption = option;

	if (sourceOption.series && sourceOption.legend && sourceOption.legend.data && sourceOption.legend.data.length > 0) {
		let legData = [];
		sourceOption.legend.data.forEach((item) => {
			let itemName = item;
			if (item instanceof Object) {
				itemName = item.name;
			}
			const obj = sourceOption.series.find((k) => k.name === itemName);
			let newItem;
			if (obj && obj.name === itemName) {
				if (obj.type === "line") {
					newItem = {
						name: item,
						icon: "circle",
						borderWidth: 0
					};
				} else if (obj.type === "bar") {
					newItem = {
						name: item,
						icon: "rect",
						borderWidth: 0
					};
				}
			}
			if (item instanceof Object) {
				newItem = {
					...newItem,
					...item
				};
			}
			legData.push(newItem);
		});

		sourceOption.legend.data = legData;
	}

	options = merge(option, options);

	return (
		<WrapCharts {...rest} option={options} />
	);
};

export default Page;

