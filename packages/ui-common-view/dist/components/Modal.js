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
var Modal = (function (_super) {
    __extends(Modal, _super);
    function Modal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Modal.prototype.render = function () {
        var className = this.props.className
            ? String.fromCharCode(32) + this.props.className
            : "";
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "modal_skin".concat(className) }),
            React.createElement("div", { className: "modal_page".concat(className) }, this.props.children)));
    };
    return Modal;
}(React.Component));
export default Modal;
//# sourceMappingURL=Modal.js.map