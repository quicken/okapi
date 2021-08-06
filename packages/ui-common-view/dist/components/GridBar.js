"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridBar = void 0;
var React = __importStar(require("react"));
var GridBar = (function (_super) {
    __extends(GridBar, _super);
    function GridBar(props) {
        var _this = _super.call(this, props) || this;
        _this.handleOnChange = function (name, value, data) {
            switch (name) {
                case "term":
                    var DELAY = 100;
                    if (_this._timer !== null)
                        clearTimeout(_this._timer);
                    var fn = function () {
                        _this.props.handleAction(_this.props.name, "changeTerm", value);
                    };
                    _this._timer = setTimeout(fn, DELAY);
                    break;
                case "pageSize":
                    _this.setState({ pageSize: value });
                    _this.props.handleAction(_this.props.name, "changePageSize", Number(value));
                    break;
            }
        };
        _this._timer = null;
        _this.state = {
            pageSize: 20,
        };
        return _this;
    }
    GridBar.prototype.renderPager = function () {
        if (!this.props.showPager)
            return;
        return React.createElement("ul", { className: "grid_pager" });
    };
    GridBar.prototype.render = function () {
        var className = "grid_bar " + this.props.position;
        return (React.createElement("div", { className: className },
            React.createElement("div", { className: "group" }),
            React.createElement("div", { className: "group" })));
    };
    GridBar.defaultProps = {
        name: "gridBar",
        placeholder: "Enter Search Term",
        position: "bottom",
        showPager: true,
        showAdd: false,
    };
    return GridBar;
}(React.Component));
exports.GridBar = GridBar;
exports.default = GridBar;
