import * as React from "react";

type ActionButtonProps = {
  type:
    | "empty"
    | "create"
    | "save"
    | "search"
    | "print"
    | "email"
    | "date"
    | "cancel";
  onClick: (e: React.MouseEvent) => void;
};

class ActionButton extends React.Component<ActionButtonProps> {
  constructor(props: any) {
    super(props);
    this.state = {
      checked: props.checked,
    };
  }

  public render() {
    return (
      <button
        className={`actionButton ${this.props.type}`}
        onClick={this.props.onClick}
      >
        <span className="icon"></span>
        <span>{this.props.children}</span>
      </button>
    );
  }
}

export default ActionButton;
