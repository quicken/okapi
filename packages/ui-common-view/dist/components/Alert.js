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
var Alert = (function (_super) {
    __extends(Alert, _super);
    function Alert() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleKeyBoardEvent = function (e) {
            if (e.key === "Enter") {
                e.preventDefault();
                e.stopPropagation();
                _this.props.onClick();
            }
        };
        return _this;
    }
    Alert.prototype.componentDidMount = function () { };
    Alert.prototype.render = function () {
        var alertClass = "";
        switch (this.props.signal) {
            case "blank":
                alertClass = "alert";
                break;
            case "success":
                alertClass = "alert success";
                break;
            case "warning":
                alertClass = "alert warning";
                break;
            case "error":
                alertClass = "alert error";
                break;
        }
        return (React.createElement("div", { className: alertClass },
            React.createElement("div", null,
                React.createElement("span", { className: "icon" }),
                React.createElement("span", { className: "txt" }, this.props.msg)),
            React.createElement("button", { id: "ok_button", onClick: this.props.onClick }, this.props.btnLabel)));
    };
    return Alert;
}(React.Component));
export default Alert;
//# sourceMappingURL=Alert.js.map