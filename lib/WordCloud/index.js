"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _util = require("../common/util");

var _WrapCharts = _interopRequireDefault(require("../common/WrapCharts"));

require("echarts-wordcloud");

var _excluded = ["option"];

var Page = function Page(props) {
  var _props$option = props.option,
      option = _props$option === void 0 ? {} : _props$option,
      rest = (0, _objectWithoutProperties2["default"])(props, _excluded);
  var options = {
    tooltip: {},
    series: {
      type: "wordCloud",
      // Shape can be 'circle', 'cardioid', 'diamond', 'triangle-forward', 'triangle', 'pentagon', 'star'
      shape: 'circle',
      gridSize: 15,
      // 网格尺寸
      sizeRange: [12, 40],
      // 尺寸范围
      textStyle: {
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        // Color can be a callback function or a color string
        color: function color() {
          // Random color
          return 'rgb(' + [Math.round(Math.random() * 160), Math.round(Math.random() * 160), Math.round(Math.random() * 160)].join(',') + ')';
        }
      },
      emphasis: {
        focus: 'self',
        textStyle: {
          shadowBlur: 10,
          shadowColor: '#333'
        }
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
  options = (0, _util.merge)(option, options);
  return /*#__PURE__*/_react["default"].createElement(_WrapCharts["default"], (0, _extends2["default"])({}, rest, {
    option: options
  }));
};

var _default = Page;
exports["default"] = _default;