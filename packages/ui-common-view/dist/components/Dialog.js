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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var Alert_1 = __importDefault(require("./Alert"));
var Modal_1 = __importDefault(require("./Modal"));
var Confirm_1 = __importDefault(require("./Confirm"));
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
            return (React.createElement(Alert_1.default, { signal: this.props.signal, msg: this.props.msg, btnLabel: this.props.labelOk, onClick: this.handleAlertClick }));
        }
        return (React.createElement(Confirm_1.default, { signal: this.props.signal, msg: this.props.msg, labelOk: this.props.labelOk, labelCancel: this.props.labelCancel, onAction: this.handleAction }));
    };
    Dialog.prototype.render = function () {
        if (!this.props.isVisible) {
            return React.createElement(React.Fragment, null);
        }
        return React.createElement(Modal_1.default, { className: this.props.type }, this.renderContent());
    };
    Dialog.defaultProps = {
        name: "confirmDialog",
        labelOk: "Ok",
        labelCancel: "Cancel",
        checked: false,
    };
    return Dialog;
}(React.Component));
exports.default = Dialog;
