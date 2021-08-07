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
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
class Confirm extends React.Component {
    constructor(props) {
        super(props);
        this.handleClickOk = (e) => {
            this.props.onAction(this.props.name, "click_ok", null);
        };
        this.handleClickCancel = (e) => {
            this.props.onAction(this.props.name, "click_cancel", null);
        };
    }
    componentDidMount() { }
    render() {
        let alertClass = "";
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
    }
}
Confirm.defaultProps = {
    name: "confirmDialog",
    labelOk: "Ok",
    labelCancel: "Cancel",
    checked: false,
};
exports.default = Confirm;
