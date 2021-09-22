"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var echarts = _interopRequireWildcard(require("echarts/core"));

var _util = require("../common/util");

var _WrapCharts = _interopRequireDefault(require("../common/WrapCharts"));

var _china = _interopRequireDefault(require("./china"));

var _charts = require("echarts/charts");

var _components = require("echarts/components");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/*
 * @Describe: 地图组件
 */
echarts.use([_charts.MapChart, _charts.ScatterChart, _charts.LinesChart, _charts.EffectScatterChart, _components.GeoComponent, _components.VisualMapComponent]);

var Page = function Page(props) {
  var _props$option = props.option,
      option = _props$option === void 0 ? {} : _props$option,
      _props$geo = props.geo,
      geo = _props$geo === void 0 ? _china["default"] : _props$geo,
      _props$geoName = props.geoName,
      geoName = _props$geoName === void 0 ? "china" : _props$geoName;
  var options = {
    tooltip: {
      trigger: 'item',
      showDelay: 0,
      transitionDuration: 0.2,
      formatter: function formatter(params) {
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
  options = (0, _util.merge)(option, options);
  return /*#__PURE__*/_react["default"].createElement(_WrapCharts["default"], (0, _extends2["default"])({}, props, {
    option: options,
    geo: geo,
    geoName: geoName
  }));
};

var _default = Page;
exports["default"] = _default;