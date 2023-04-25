import * as React from "react";
interface TabContentProp {
    name: string;
    label: string;
    disabled: boolean;
    children?: React.ReactNode;
}
declare class TabContent extends React.Component<TabContentProp> {
    static defaultProps: {
        disabled: boolean;
    };
    render(): JSX.Element;
}
export default TabContent;
