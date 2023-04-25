import * as React from "react";
interface ActionBarSpacerProp {
    type: "spacer" | "seperator";
}
declare function ActionBarSpacer(props: React.PropsWithChildren<ActionBarSpacerProp>): JSX.Element;
export default ActionBarSpacer;
