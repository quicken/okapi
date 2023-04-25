import * as React from "react";
interface CardProp {
    id?: string;
    bar?: JSX.Element;
    className?: string;
    children?: React.ReactNode;
}
export declare class Card extends React.Component<CardProp> {
    renderActionBar(): JSX.Element | undefined;
    render(): JSX.Element;
}
export default Card;
