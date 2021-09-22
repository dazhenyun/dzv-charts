/*
 * @Describe: 地图组件
 */

import React from "react";
import * as echarts from 'echarts/core';
import { merge } from "../common/util";
import WrapCharts from "../common/WrapCharts";
import chinaJson from "./china";

import {
	MapChart,
	ScatterChart,
	LinesChart,
	EffectScatterChart
} from 'echarts/charts';

import {
	GeoComponent,
	VisualMapComponent
} from 'echarts/components';

echarts.use(
	[
		MapChart,
		ScatterChart,
		LinesChart,
		EffectScatterChart,
		GeoComponent,
		VisualMapComponent
	]
);

const Page = (props) => {
	const { option = {}, geo = chinaJson, geoName = "china" } = props;

	let options = {
		tooltip: {
			trigger: 'item',
			showDelay: 0,
			transitionDuration: 0.2,
			formatter: function (params) {
				return params.seriesName + '<br/>' + params.name;
			}
		},
		grid: {
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			containLabel: true
		}
	};

	options = merge(option, options);

	return (
		<WrapCharts {...props} option={options} geo={geo} geoName={geoName} />
	);
};

export default Page;

