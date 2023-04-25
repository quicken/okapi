import * as React from "react";
function ActionBarSpacer(props) {
    var className = props.type === "seperator" ? "seperator" : "spacer";
    return React.createElement("div", { className: className }, props.children);
}
export default ActionBarSpacer;
//# sourceMappingURL=ActionBarSpacer.js.map