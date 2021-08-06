import * as React from "react";

import Alert from "./Alert";
import Modal from "./Modal";
import Confirm from "./Confirm";

interface DialogProps {
  type: "alert" | "confirmation" | "working" | "login";
  signal: "blank" | "warning" | "error" | "success";
  msg: string;
  isVisible: boolean;
  name: string;
  labelOk: string;
  labelCancel?: string;
  onAction: (name: string, action: any, data: any) => void;
  data: any;
}

interface DialogState {
  isVisible: boolean;
}

class Dialog extends React.Component<DialogProps, DialogState> {
  static defaultProps = {
    name: "confirmDialog",
    labelOk: "Ok",
    labelCancel: "Cancel",
    checked: false,
  };

  constructor(props: DialogProps) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }

  private handleAction = (name: string, action: any, data: any): void => {
    this.props.onAction(this.props.name, action, this.props.data);
  };

  private handleAlertClick = (): void => {
    this.handleAction(this.props.name, "click_ok", null);
  };

  public renderContent() {
    if (this.props.type === "working") {
      return (
        <div className="working">
          <div className="spinner">{this.props.msg}</div>
        </div>
      );
    }

    if (this.props.type === "alert") {
      return (
        <Alert
          signal={this.props.signal}
          msg={this.props.msg}
          btnLabel={this.props.labelOk}
          onClick={this.handleAlertClick}
        ></Alert>
      );
    }

    return (
      <Confirm
        signal={this.props.signal}
        msg={this.props.msg}
        labelOk={this.props.labelOk}
        labelCancel={this.props.labelCancel}
        onAction={this.handleAction}
      ></Confirm>
    );
  }

  public render() {
    if (!this.props.isVisible) {
      return <></>;
    }

    return <Modal className={this.props.type}>{this.renderContent()}</Modal>;
  }
}

export default Dialog;
