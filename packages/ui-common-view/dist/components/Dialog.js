"use strict";
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
const React = __importStar(require("react"));
const Alert_1 = __importDefault(require("./Alert"));
const Modal_1 = __importDefault(require("./Modal"));
const Confirm_1 = __importDefault(require("./Confirm"));
class Dialog extends React.Component {
    constructor(props) {
        super(props);
        this.handleAction = (name, action, data) => {
            this.props.onAction(this.props.name, action, this.props.data);
        };
        this.handleAlertClick = () => {
            this.handleAction(this.props.name, "click_ok", null);
        };
        this.state = {
            isVisible: false,
        };
    }
    renderContent() {
        if (this.props.type === "working") {
            return (React.createElement("div", { className: "working" },
                React.createElement("div", { className: "spinner" }, this.props.msg)));
        }
        if (this.props.type === "alert") {
            return (React.createElement(Alert_1.default, { signal: this.props.signal, msg: this.props.msg, btnLabel: this.props.labelOk, onClick: this.handleAlertClick }));
        }
        return (React.createElement(Confirm_1.default, { signal: this.props.signal, msg: this.props.msg, labelOk: this.props.labelOk, labelCancel: this.props.labelCancel, onAction: this.handleAction }));
    }
    render() {
        if (!this.props.isVisible) {
            return React.createElement(React.Fragment, null);
        }
        return React.createElement(Modal_1.default, { className: this.props.type }, this.renderContent());
    }
}
Dialog.defaultProps = {
    name: "confirmDialog",
    labelOk: "Ok",
    labelCancel: "Cancel",
    checked: false,
};
exports.default = Dialog;
