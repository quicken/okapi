import * as React from "react";
import { DialogState } from "../types/DialogState";
interface PageProp {
    layout: "empty" | "single" | "col";
    dialogState: DialogState;
    handleDialogAction: (name: string, action: string, data: any) => void;
    id?: string;
    actionBar?: JSX.Element;
}
export declare class Page extends React.Component<PageProp> {
    static defaultProps: {
        layout: string;
        dialogState: {
            type: string;
            signal: string;
            msg: string;
            isVisible: boolean;
            data: any;
        };
        handleDialogAction: (name: string, action: string, data: any) => void;
    };
    renderActionBar(): JSX.Element;
    render(): JSX.Element;
}
export default Page;
