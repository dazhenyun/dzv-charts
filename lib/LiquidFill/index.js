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

require("echarts-liquidfill");

var _excluded = ["option"];

var Page = function Page(props) {
  var _props$option = props.option,
      option = _props$option === void 0 ? {} : _props$option,
      rest = (0, _objectWithoutProperties2["default"])(props, _excluded);
  var options = {
    tooltip: {
      show: false
    },
    series: {
      type: 'liquidFill',
      radius: '90%'
    }
  };
  options = (0, _util.merge)(option, options);
  return /*#__PURE__*/_react["default"].createElement(_WrapCharts["default"], (0, _extends2["default"])({}, rest, {
    option: options
  }));
};

var _default = Page;
exports["default"] = _default;