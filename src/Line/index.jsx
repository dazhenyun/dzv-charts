/*
 * @Describe: 折线图
 */

import React from "react";
import * as echarts from 'echarts/core';
import { merge } from "../common/util";
import WrapCharts from "../common/WrapCharts";

import {
	LineChart
} from 'echarts/charts';

import {
	DataZoomComponent
} from 'echarts/components';

echarts.use(
	[
		LineChart,
		DataZoomComponent
	]
);

const Page = (props) => {
	const { option = {}, ...rest } = props;

	let options = {
		tooltip: {
			trigger: "axis"
		},
		legend: {
			right: 0,
			icon: "circle",
			itemWidth: 10,
			itemHeight: 10,
			borderWidth: 0
		},
		xAxis: {
			type: "category"
		},
		yAxis: {
			type: "value"
		}
	};

	options = merge(option, options);

	return (
		<WrapCharts {...rest} option={options} />
	);
};

export default Page;

