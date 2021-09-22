/*
 * @Describe: 词云
 */

import React from "react";
import { merge } from "../common/util";
import WrapCharts from "../common/WrapCharts";
import 'echarts-liquidfill';

const Page = (props) => {
	const { option = {}, ...rest } = props;

	let options = {
		tooltip: {
			show: false
		},
		series: {
			type: 'liquidFill',
			radius: '90%'
		}
	};

	options = merge(option, options);

	return (
		<WrapCharts {...rest} option={options} />
	);
};

export default Page;

