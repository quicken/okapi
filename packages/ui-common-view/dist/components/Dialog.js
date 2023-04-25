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
import Alert from "./Alert";
import Modal from "./Modal";
import Confirm from "./Confirm";
var Dialog = (function (_super) {
    __extends(Dialog, _super);
    function Dialog(props) {
        var _this = _super.call(this, props) || this;
        _this.handleAction = function (name, action, data) {
            _this.props.onAction(_this.props.name, action, _this.props.data);
        };
        _this.handleAlertClick = function () {
            _this.handleAction(_this.props.name, "click_ok", null);
        };
        _this.state = {
            isVisible: false,
        };
        return _this;
    }
    Dialog.prototype.renderContent = function () {
        if (this.props.type === "working") {
            return (React.createElement("div", { className: "working" },
                React.createElement("div", { className: "spinner" }, this.props.msg)));
        }
        if (this.props.type === "alert") {
            return (React.createElement(Alert, { signal: this.props.signal, msg: this.props.msg, btnLabel: this.props.labelOk, onClick: this.handleAlertClick }));
        }
        return (React.createElement(Confirm, { signal: this.props.signal, msg: this.props.msg, labelOk: this.props.labelOk, labelCancel: this.props.labelCancel, onAction: this.handleAction }));
    };
    Dialog.prototype.render = function () {
        if (!this.props.isVisible) {
            return React.createElement(React.Fragment, null);
        }
        return React.createElement(Modal, { className: this.props.type }, this.renderContent());
    };
    Dialog.defaultProps = {
        name: "confirmDialog",
        labelOk: "Ok",
        labelCancel: "Cancel",
        checked: false,
    };
    return Dialog;
}(React.Component));
export default Dialog;
//# sourceMappingURL=Dialog.js.map