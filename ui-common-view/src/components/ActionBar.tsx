import * as React from "react";

class ActionBar extends React.Component {
	render() {
		return <div className="action_bar">{this.props.children}</div>;
	}
}

export default ActionBar;
