import * as React from "react";
interface GridProp {
    id?: string;
    className?: string;
    children?: React.ReactNode;
}
export declare class Grid extends React.Component<GridProp> {
    render(): JSX.Element;
}
export default Grid;
