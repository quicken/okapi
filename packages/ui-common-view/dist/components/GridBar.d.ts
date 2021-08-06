import * as React from "react";
interface GridBarProps {
    name: string;
    handleAction: (name: string, action: string, data: any) => void;
    placeholder: string;
    showSearch?: boolean;
    showPageSizer?: boolean;
    showRecordCount?: boolean;
    showPager?: boolean;
    showAdd?: boolean;
    handleAddAction?: () => void;
    position: "top" | "bottom";
}
interface GridBarState {
    pageSize: number;
}
export declare class GridBar extends React.Component<GridBarProps, GridBarState> {
    static defaultProps: {
        name: string;
        placeholder: string;
        position: string;
        showPager: boolean;
        showAdd: boolean;
    };
    private _timer;
    constructor(props: GridBarProps);
    private handleOnChange;
    renderPager(): JSX.Element;
    render(): JSX.Element;
}
export default GridBar;
