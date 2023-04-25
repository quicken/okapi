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
var InputForm = (function (_super) {
    __extends(InputForm, _super);
    function InputForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputForm.prototype.render = function () {
        return React.createElement("form", { className: "input_form" }, this.props.children);
    };
    return InputForm;
}(React.Component));
export { InputForm };
export default InputForm;
//# sourceMappingURL=InputForm.js.map