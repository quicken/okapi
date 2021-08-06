import * as React from "react";

import Dialog from "./Dialog";
import { DialogState } from "../types/DialogState";

interface PageProp {
	layout: "empty" | "single" | "col";
	dialogState: DialogState;
	handleDialogAction: (name: string, action: string, data: any) => void;
	id?: string;
	actionBar?: JSX.Element;
}

export class Page extends React.Component<PageProp> {
	static defaultProps = {
		layout: "single",
		dialogState: {
			type: "alert",
			signal: "blank",
			msg: "",
			isVisible: false,
			data: undefined,
		},
		handleDialogAction: (name: string, action: string, data: any) => {},
	};

	renderActionBar() {
		if (this.props.actionBar) {
			return this.props.actionBar;
		}
	}

	render() {
		const className = "cfkit_react_page" + " " + this.props.layout;
		return (
			<div id={this.props.id} className={className}>
				{this.renderActionBar()}

				<article>{this.props.children}</article>

				<Dialog
					type={this.props.dialogState.type}
					signal={this.props.dialogState.signal}
					msg={this.props.dialogState.msg}
					isVisible={this.props.dialogState.isVisible}
					onAction={this.props.handleDialogAction}
					data={this.props.dialogState.data}
				/>
			</div>
		);
	}
}

export default Page;
