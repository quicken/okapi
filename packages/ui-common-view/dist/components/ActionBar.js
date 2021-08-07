"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionBar = void 0;
const react_1 = __importDefault(require("react"));
function ActionBar(props) {
    return react_1.default.createElement("div", { className: "action_bar" }, this.props.children);
}
exports.ActionBar = ActionBar;
