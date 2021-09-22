/*
 * @Describe: 雷达图
 */

import React from "react";
import * as echarts from 'echarts/core';
import { merge } from "../common/util";
import WrapCharts from "../common/WrapCharts";

import {
	RadarChart
} from 'echarts/charts';

echarts.use(
	[
		RadarChart
	]
);

const Page = (props) => {
	const { option = {}, ...rest } = props;

	let options = {
		tooltip: {},
		legend: {
			right: 0,
			type: "scroll",
			orient: "vertical",
			icon: "rect",
			itemWidth: 10,
			itemHeight: 10,
			borderWidth: 0
		},
		radar: {
			name: {
				textStyle: {
					color: '#909399'
				}
			},
		}
	};

	options = merge(option, options);

	return (
		<WrapCharts {...rest} option={options} />
	);
};

export default Page;

