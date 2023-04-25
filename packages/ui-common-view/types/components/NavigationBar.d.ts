import React from "react";
/**
 * A navigation item represent a single item of navigation. Clicking
 * on a navigation will execute a click event or navigate the browser
 * to the specified href.
 */
type NavItemProps = {
    label: string;
    href?: string;
    onClick?: () => void;
};
export declare function NavItem(props: React.PropsWithChildren<NavItemProps>): JSX.Element;
/**
 * A navigation group is nested inside of a navigation bar and contains
 * a set of navigation items. A navigation group is expanded to reveal
 * all available nested navigation items.
 */
type NavGroupProps = {
    title: string;
    isActive?: boolean;
    _onClick?: () => void;
    _expand?: boolean;
};
export declare function NavGroup(props: React.PropsWithChildren<NavGroupProps>): JSX.Element;
/**
 * A navigation bar is usuall used as the main navigation for a site.
 * The navigation bar manages revealing navigation groups.
 *
 * Clicking a navigation group expands that navigation group. Clicking
 * anywhere while a group is expanded will collapse all groups.
 */
type NavigationBarProps = {
    activeGroup?: number;
};
export declare function NavigationBar(props: React.PropsWithChildren<NavigationBarProps>): JSX.Element;
export {};
