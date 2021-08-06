import * as React from "react";

interface GridProp {
	id?: string;
	className?: string;
}

export class Grid extends React.Component<GridProp> {
	render() {
		const className = this.props.className
			? "grid" + " " + this.props.className
			: "cfkit_card";
		return (
			<div id={this.props.id} className={className}>
				<table className="grid">{this.props.children}</table>
			</div>
		);
	}
}

export default Grid;
