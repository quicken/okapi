import * as React from "react";

type TileButtonProps = {
	id?: string;
	type:
		| "grid"
		| "create"
		| "edit"
		| "delete"
		| "clone"
		| "volume"
		| "calculate"; //TODO: Deprecate volume, use calculate instead.
	onClick: (e: React.MouseEvent) => void;
};

class TileButton extends React.Component<TileButtonProps> {
	public render() {
		if (this.props.id) {
			return (
				<button
					id={this.props.id}
					className={`tileButton ${this.props.type}`}
					onClick={this.props.onClick}
				/>
			);
		}

		return (
			<button
				className={`tileButton ${this.props.type}`}
				onClick={this.props.onClick}
			/>
		);
	}
}

export default TileButton;
