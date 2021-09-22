/*
 * @Describe: 柱状图
 */

import React from "react";
import * as echarts from 'echarts/core';
import { merge } from "../common/util";
import WrapCharts from "../common/WrapCharts";

import {
	BarChart
} from 'echarts/charts';

import {
	DataZoomComponent
} from 'echarts/components';

echarts.use(
	[
		BarChart,
		DataZoomComponent
	]
);

const Page = (props) => {
	const { option = {}, ...rest } = props;

	let options = {
		tooltip: {
			trigger: "axis",
			axisPointer: {
				type: "shadow"
			},
		},
		legend: {
			right: 0,
			icon: "rect",
			itemWidth: 10,
			itemHeight: 10,
			borderWidth: 0
		},
		yAxis: {
			type: 'value'
		}
	};

	options = merge(option, options);

	return (
		<WrapCharts {...rest} option={options} />
	);
};

export default Page;

