/*
 * @Describe: 仪表盘图
 */

import React from "react";
import * as echarts from 'echarts/core';
import { merge } from "../common/util";
import WrapCharts from "../common/WrapCharts";

import {
	GaugeChart
} from 'echarts/charts';

echarts.use(
	[
		GaugeChart
	]
);

const Page = (props) => {
	const { option = {}, ...rest } = props;

	let options = {
		grid: {
			top: 10,
			left: 10,
			right: 10,
			bottom: 10,
			containLabel: true
		},
	};

	options = merge(option, options);

	return (
		<WrapCharts {...rest} option={options} />
	);
};

export default Page;

