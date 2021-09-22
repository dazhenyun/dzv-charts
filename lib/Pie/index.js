"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var echarts = _interopRequireWildcard(require("echarts/core"));

var _util = require("../common/util");

var _WrapCharts = _interopRequireDefault(require("../common/WrapCharts"));

var _charts = require("echarts/charts");

var _excluded = ["option"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

echarts.use([_charts.PieChart]);

var Page = function Page(props) {
  var _props$option = props.option,
      option = _props$option === void 0 ? {} : _props$option,
      rest = (0, _objectWithoutProperties2["default"])(props, _excluded);
  var seriesObj = true;

  if (option && option.series) {
    if (option.series.data) {
      seriesObj = true;
    } else if (option.series instanceof Array) {
      seriesObj = false;
    }
  }

  var options = {
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
      width: "86%"
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
  options = (0, _util.merge)(option, options);
  return /*#__PURE__*/_react["default"].createElement(_WrapCharts["default"], (0, _extends2["default"])({}, rest, {
    option: options
  }));
};

var _default = Page;
exports["default"] = _default;