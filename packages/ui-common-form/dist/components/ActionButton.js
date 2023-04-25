import * as React from "react";
function ActionButton(props) {
    return (React.createElement("button", { className: "actionButton ".concat(props.type), onClick: props.onClick },
        React.createElement("span", { className: "icon" }),
        React.createElement("span", null, props.children)));
}
export default ActionButton;
//# sourceMappingURL=ActionButton.js.map