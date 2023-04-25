import * as React from "react";

interface InputFormProp {
  children?: React.ReactNode;
}

export class InputForm extends React.Component<InputFormProp> {
  render() {
    return <form className="input_form">{this.props.children}</form>;
  }
}

export default InputForm;
