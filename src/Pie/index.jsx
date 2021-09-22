/*
 * @Describe: 饼图
 */

import React from "react";
import * as echarts from 'echarts/core';
import { merge } from "../common/util";
import WrapCharts from "../common/WrapCharts";

import {
	PieChart
} from 'echarts/charts';

echarts.use(
	[
		PieChart
	]
);

const Page = (props) => {
	const { option = {}, ...rest } = props;

	let seriesObj = true;
	if (option && option.series) {
		if (option.series.data) {
			seriesObj = true;
		} else if (option.series instanceof Array) {
			seriesObj = false;
		}
	}
	let options = {
		tooltip: {
			trigger: 'item',
			formatter: '{a} <br/>{b} : {c} ({d}%)'
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
			right: 0,
			width: "86%",
		},
		series: seriesObj ? {
			type: 'pie',
			radius: '55%',
			center: ['50%', '50%'],
			emphasis: {
				itemStyle: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			},
			label: {
				color: "#5D7092"
			}
		} : []
	};

	options = merge(option, options);

	return (
		<WrapCharts {...rest} option={options} />
	);
};

export default Page;

