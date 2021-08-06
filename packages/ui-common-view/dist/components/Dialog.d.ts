import * as React from "react";
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
declare class Dialog extends React.Component<DialogProps, DialogState> {
    static defaultProps: {
        name: string;
        labelOk: string;
        labelCancel: string;
        checked: boolean;
    };
    constructor(props: DialogProps);
    private handleAction;
    private handleAlertClick;
    renderContent(): JSX.Element;
    render(): JSX.Element;
}
export default Dialog;
