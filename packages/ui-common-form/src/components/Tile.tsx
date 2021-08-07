import * as React from "react";

type TileProps = {
	id?: string;
	type: "edit" | "delete";
};

class Tile extends React.Component<TileProps> {
	private handleClick = (e: React.MouseEvent) => {
		e.preventDefault();
	};

	public render() {
		if (this.props.id) {
			return (
				<button id={this.props.id} className={`tile ${this.props.type}`} />
			);
		}

		return (
			<button
				className={`tile ${this.props.type}`}
				onClick={this.handleClick}
			/>
		);
	}
}

export default Tile;
