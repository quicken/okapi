import * as React from "react";
interface TabContainerProp {
    name: string;
    defaultActiveTab: number;
    onAction?: (name: string, value: any, data: any) => void;
    children?: React.ReactNode;
}
interface TabContainerState {
    activeTab: number;
}
declare class TabContainer extends React.Component<TabContainerProp, TabContainerState> {
    static defaultProps: {
        defaultActiveTab: number;
    };
    constructor(props: TabContainerProp);
    private handleClickTab;
    private renderTabs;
    renderTabContent(): string | number | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | undefined;
    render(): JSX.Element;
}
export default TabContainer;
