import * as React from "react";

class ActionBarGroup extends React.Component {
	render() {
		return <div className="group">{this.props.children}</div>;
	}
}

export default ActionBarGroup;
