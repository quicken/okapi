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
class Alert extends React.Component {
    constructor(props) {
        super(props);
        this.handleKeyBoardEvent = (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                e.stopPropagation();
                this.props.onClick();
            }
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
    }
}
exports.default = Alert;
