import * as React from "react";
interface TabContainerProp {
    name: string;
    defaultActiveTab: number;
    onAction?: (name: string, value: any, data: any) => void;
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
    renderTabContent(): React.ReactChild | React.ReactFragment | React.ReactPortal;
    render(): JSX.Element;
}
export default TabContainer;
