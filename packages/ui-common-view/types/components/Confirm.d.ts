import * as React from "react";
interface ConfirmProps {
    signal: "blank" | "warning" | "error" | "success";
    msg: string;
    name: string;
    labelOk: string;
    labelCancel: string;
    onAction: (name: string, value: any, data: any) => void;
}
declare class Confirm extends React.Component<ConfirmProps, any> {
    static defaultProps: {
        name: string;
        labelOk: string;
        labelCancel: string;
        checked: boolean;
    };
    componentDidMount(): void;
    private handleClickOk;
    private handleClickCancel;
    render(): JSX.Element;
}
export default Confirm;
