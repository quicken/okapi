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
var Confirm = (function (_super) {
    __extends(Confirm, _super);
    function Confirm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClickOk = function (e) {
            _this.props.onAction(_this.props.name, "click_ok", null);
        };
        _this.handleClickCancel = function (e) {
            _this.props.onAction(_this.props.name, "click_cancel", null);
        };
        return _this;
    }
    Confirm.prototype.componentDidMount = function () { };
    Confirm.prototype.render = function () {
        var alertClass = "";
        switch (this.props.signal) {
            case "blank":
                alertClass = "alert";
                break;
            case "success":
                alertClass = "alert success";
                break;
            case "error":
                alertClass = "alert error";
                break;
        }
        return (React.createElement("div", { className: alertClass },
            React.createElement("div", null,
                React.createElement("span", { className: "icon" }),
                React.createElement("span", { className: "txt" }, this.props.msg)),
            React.createElement("div", { className: "group" },
                React.createElement("button", { id: "ok_button", onClick: this.handleClickOk }, this.props.labelOk),
                React.createElement("button", { onClick: this.handleClickCancel }, this.props.labelCancel))));
    };
    Confirm.defaultProps = {
        name: "confirmDialog",
        labelOk: "Ok",
        labelCancel: "Cancel",
        checked: false,
    };
    return Confirm;
}(React.Component));
export default Confirm;
//# sourceMappingURL=Confirm.js.map