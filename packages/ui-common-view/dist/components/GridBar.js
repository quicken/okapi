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
import * as React from "react";
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
export { GridBar };
export default GridBar;
//# sourceMappingURL=GridBar.js.map