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
exports.Page = void 0;
const React = __importStar(require("react"));
const Dialog_1 = __importDefault(require("./Dialog"));
class Page extends React.Component {
    renderActionBar() {
        if (this.props.actionBar) {
            return this.props.actionBar;
        }
    }
    render() {
        const className = "cfkit_react_page" + " " + this.props.layout;
        return (React.createElement("div", { id: this.props.id, className: className },
            this.renderActionBar(),
            React.createElement("article", null, this.props.children),
            React.createElement(Dialog_1.default, { type: this.props.dialogState.type, signal: this.props.dialogState.signal, msg: this.props.dialogState.msg, isVisible: this.props.dialogState.isVisible, onAction: this.props.handleDialogAction, data: this.props.dialogState.data })));
    }
}
exports.Page = Page;
Page.defaultProps = {
    layout: "single",
    dialogState: {
        type: "alert",
        signal: "blank",
        msg: "",
        isVisible: false,
        data: undefined,
    },
    handleDialogAction: (name, action, data) => { },
};
exports.default = Page;
