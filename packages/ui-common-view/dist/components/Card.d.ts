import * as React from "react";
interface CardProp {
    id?: string;
    bar?: JSX.Element;
    className?: string;
}
export declare class Card extends React.Component<CardProp> {
    renderActionBar(): JSX.Element | undefined;
    render(): JSX.Element;
}
export default Card;
