import * as React from "react";

export class Layout extends React.Component {
	render() {
		return <div className="cfkit_card_layout">{this.props.children}</div>;
	}
}

export default Layout;
