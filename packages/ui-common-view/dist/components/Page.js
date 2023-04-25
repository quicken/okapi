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
import Dialog from "./Dialog";
var Page = (function (_super) {
    __extends(Page, _super);
    function Page() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Page.prototype.renderActionBar = function () {
        if (this.props.actionBar) {
            return this.props.actionBar;
        }
    };
    Page.prototype.render = function () {
        var className = "cfkit_react_page ".concat(this.props.layout);
        return (React.createElement("div", { id: this.props.id, className: className },
            this.renderActionBar(),
            React.createElement("article", null, this.props.children),
            React.createElement(Dialog, { type: this.props.dialogState.type, signal: this.props.dialogState.signal, msg: this.props.dialogState.msg, isVisible: this.props.dialogState.isVisible, onAction: this.props.handleDialogAction, data: this.props.dialogState.data })));
    };
    Page.defaultProps = {
        layout: "single",
        dialogState: {
            type: "alert",
            signal: "blank",
            msg: "",
            isVisible: false,
            data: undefined,
        },
        handleDialogAction: function (name, action, data) { },
    };
    return Page;
}(React.Component));
export { Page };
export default Page;
//# sourceMappingURL=Page.js.map