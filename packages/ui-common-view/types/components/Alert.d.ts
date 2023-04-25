import * as React from "react";
interface AlertProps {
    signal: "blank" | "warning" | "error" | "success";
    msg: string;
    btnLabel: string;
    onClick: () => void;
}
declare class Alert extends React.Component<AlertProps, any> {
    componentDidMount(): void;
    private handleKeyBoardEvent;
    render(): JSX.Element;
}
export default Alert;
