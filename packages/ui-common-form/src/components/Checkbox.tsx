import * as React from "react";

interface CheckboxProps {
	name: string;
	label: string;
	value: string;
	checked: boolean;
	onChange: (name: string, checked: boolean, value: string) => void;
}

class Checkbox extends React.Component<CheckboxProps, any> {
	static defaultProps = {
		name: "",
		label: "",
		value: "",
		checked: false,
	};

	constructor(props: any) {
		super(props);
	}

	onClick = (e: any) => {
		if (this.props.onChange) {
			this.props.onChange(
				this.props.name,
				!this.props.checked,
				this.props.value
			);
		}
	};

	render() {
		return (
			<div className="checkbox">
				<div
					className={`${this.props.checked ? "box on" : "box"}`}
					onClick={this.onClick}
				></div>
				<label onClick={this.onClick}>{this.props.label}</label>
				<input
					type="checkbox"
					name={this.props.name}
					defaultChecked={this.props.checked}
					value={this.props.value}
				/>
			</div>
		);
	}
}

export default Checkbox;
