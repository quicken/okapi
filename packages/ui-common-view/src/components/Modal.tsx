import * as React from "react";

interface ModalProp {
  className?: string;
  children?: React.ReactNode;
}

class Modal extends React.Component<ModalProp> {
  public render() {
    let className = this.props.className
      ? String.fromCharCode(32) + this.props.className
      : "";
    return (
      <>
        <div className={`modal_skin${className}`}></div>
        <div className={`modal_page${className}`}>{this.props.children}</div>
      </>
    );
  }
}

export default Modal;
