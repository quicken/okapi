import * as React from "react";
interface ActionBarSpacerProp {
    type: "spacer" | "seperator";
}
declare class ActionBarSpacer extends React.Component<ActionBarSpacerProp> {
    static defaultProps: {
        type: string;
    };
    render(): JSX.Element;
}
export default ActionBarSpacer;
