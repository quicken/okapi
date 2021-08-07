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
exports.Card = void 0;
const React = __importStar(require("react"));
class Card extends React.Component {
    renderActionBar() {
        if (this.props.bar) {
            return this.props.bar;
        }
    }
    render() {
        const className = this.props.className
            ? "cfkit_card" + " " + this.props.className
            : "cfkit_card";
        return (React.createElement("div", { id: this.props.id, className: className },
            React.createElement("div", { className: "cfkit_card_bar" }, this.renderActionBar()),
            React.createElement("div", { className: "cfkit_card_content" }, this.props.children)));
    }
}
exports.Card = Card;
exports.default = Card;
