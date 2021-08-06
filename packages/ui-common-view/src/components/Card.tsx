import * as React from "react";

interface CardProp {
	id?: string;
	bar?: JSX.Element;
	className?: string;
}

export class Card extends React.Component<CardProp> {
	renderActionBar(): JSX.Element | undefined {
		if (this.props.bar) {
			return this.props.bar;
		}
	}

	render() {
		const className = this.props.className
			? "cfkit_card" + " " + this.props.className
			: "cfkit_card";

		return (
			<div id={this.props.id} className={className}>
				<div className="cfkit_card_bar">{this.renderActionBar()}</div>
				<div className="cfkit_card_content">{this.props.children}</div>
			</div>
		);
	}
}

export default Card;
