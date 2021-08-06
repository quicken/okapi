import * as React from "react";

interface ActionBarSpacerProp {
	type: "spacer" | "seperator";
}

class ActionBarSpacer extends React.Component<ActionBarSpacerProp> {
	static defaultProps = {
		type: "spacer",
	};

	render() {
		const className = this.props.type === "seperator" ? "seperator" : "spacer";
		return <div className={className}>{this.props.children}</div>;
	}
}

export default ActionBarSpacer;
