import * as React from "react";
interface ModalProp {
    className?: string;
    children?: React.ReactNode;
}
declare class Modal extends React.Component<ModalProp> {
    render(): JSX.Element;
}
export default Modal;
