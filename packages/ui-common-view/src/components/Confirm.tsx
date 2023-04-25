import * as React from "react";

interface ConfirmProps {
  signal: "blank" | "warning" | "error" | "success";
  msg: string;
  name: string;
  labelOk: string;
  labelCancel: string;
  onAction: (name: string, value: any, data: any) => void;
}

class Confirm extends React.Component<ConfirmProps, any> {
  static defaultProps = {
    name: "confirmDialog",
    labelOk: "Ok",
    labelCancel: "Cancel",
    checked: false,
  };

  public componentDidMount(): void {}

  private handleClickOk = (e: React.MouseEvent): void => {
    this.props.onAction(this.props.name, "click_ok", null);
  };

  private handleClickCancel = (e: React.MouseEvent): void => {
    this.props.onAction(this.props.name, "click_cancel", null);
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
        <div className="group">
          <button id="ok_button" onClick={this.handleClickOk}>
            {this.props.labelOk}
          </button>
          <button onClick={this.handleClickCancel}>
            {this.props.labelCancel}
          </button>
        </div>
      </div>
    );
  }
}

export default Confirm;
