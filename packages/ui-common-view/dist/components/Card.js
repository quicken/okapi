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
var Card = (function (_super) {
    __extends(Card, _super);
    function Card() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Card.prototype.renderActionBar = function () {
        if (this.props.bar) {
            return this.props.bar;
        }
    };
    Card.prototype.render = function () {
        var className = this.props.className
            ? "cfkit_card" + " " + this.props.className
            : "cfkit_card";
        return (React.createElement("div", { id: this.props.id, className: className },
            React.createElement("div", { className: "cfkit_card_bar" }, this.renderActionBar()),
            React.createElement("div", { className: "cfkit_card_content" }, this.props.children)));
    };
    return Card;
}(React.Component));
export { Card };
export default Card;
//# sourceMappingURL=Card.js.map