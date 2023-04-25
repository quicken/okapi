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
var TabContent = (function (_super) {
    __extends(TabContent, _super);
    function TabContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TabContent.prototype.render = function () {
        return (React.createElement("div", { className: "tab_content" },
            React.createElement("div", { className: "tab_".concat(this.props.name) }, this.props.children)));
    };
    TabContent.defaultProps = {
        disabled: false,
    };
    return TabContent;
}(React.Component));
export default TabContent;
//# sourceMappingURL=TabContent.js.map