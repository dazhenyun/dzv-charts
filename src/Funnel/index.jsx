/*
 * @Describe: 漏斗图
 */

import React from "react";
import * as echarts from 'echarts/core';
import { merge } from "../common/util";
import WrapCharts from "../common/WrapCharts";

import {
	FunnelChart
} from 'echarts/charts';

echarts.use(
	[
		FunnelChart
	]
);

const Page = (props) => {
	const { option = {}, ...rest } = props;

	let options = {
		tooltip: {
			trigger: 'item'
		},
		legend: {
			type: "scroll",
			orient: "horizontal",
			icon: "rect",
			itemWidth: 10,
			itemHeight: 10,
			borderWidth: 0,
			bottom: 0,
			left: "center",
			width: "86%",
		}
	};

	options = merge(option, options);

	return (
		<WrapCharts {...rest} option={options} />
	);
};

export default Page;

