import * as React from "react";

export class InputForm extends React.Component {
	render() {
		return <form className="input_form">{this.props.children}</form>;
	}
}

export default InputForm;
