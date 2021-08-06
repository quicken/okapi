import * as React from "react";

interface AlertProps {
  signal: "blank" | "warning" | "error" | "success";
  msg: string;
  btnLabel: string;
  onClick: () => void;
}

class Alert extends React.Component<AlertProps, any> {
  constructor(props: any) {
    super(props);
  }

  public componentDidMount(): void {}

  private handleKeyBoardEvent = (e: KeyboardEvent) => {
    // This ensures the button click event is fired if the user presses enter instead of clicking.
    /* 13 = Enter */
    if (e.key === "Enter") {
      e.preventDefault();
      e.stopPropagation();
      this.props.onClick();
    }
  };

  public render() {
    let alertClass = "";
    switch (this.props.signal) {
      case "blank":
        alertClass = "alert";
        break;
      case "success":
        alertClass = "alert success";
        break;
      case "warning":
        alertClass = "alert warning";
        break;
      case "error":
        alertClass = "alert error";
        break;
    }

    return (
      <div className={alertClass}>
        <div>
          <span className="icon"></span>
          <span className="txt">{this.props.msg}</span>
        </div>
        <button id="ok_button" onClick={this.props.onClick}>
          {this.props.btnLabel}
        </button>
      </div>
    );
  }
}

export default Alert;
