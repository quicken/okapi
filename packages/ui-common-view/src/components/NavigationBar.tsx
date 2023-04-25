import React, { useState, useEffect } from "react";

/**
 * A navigation item represent a single item of navigation. Clicking
 * on a navigation will execute a click event or navigate the browser
 * to the specified href.
 */
type NavItemProps = {
  label: string /* The label shown within the menu item. */;
  href?: string /* The href when the menu item is clicked. */;
  onClick?: () => void /* A function that is called when the item is clicked. */;
};

export function NavItem(props: React.PropsWithChildren<NavItemProps>) {
  let { href = "#" } = props;
  return (
    <li>
      <a href={href} onClick={props.onClick}>
        {props.label}
      </a>
    </li>
  );
}

/**
 * A navigation group is nested inside of a navigation bar and contains
 * a set of navigation items. A navigation group is expanded to reveal
 * all available nested navigation items.
 */
type NavGroupProps = {
  title: string /* The title for this menu group. */;
  isActive?: boolean /* Set to true if the current page is related to this menu group. */;
  _onClick?: () => void /* A function that is called when the title is clicked. (internal use) */;
  _expand?: boolean /* Set to true if this menu group should be expanded. (internal use) */;
};

export function NavGroup(props: React.PropsWithChildren<NavGroupProps>) {
  let className = props.isActive ? "active" : "";
  className = props._expand ? className + " expand" : "";
  const onClick = props._onClick ? props._onClick : () => {};
  return (
    <li className={className.trim()} onClick={onClick}>
      <span>
        {props.title}
        {props.isActive}
      </span>
      <ul>
        <li className="indicator">
          <div></div>
        </li>
        {props.children}
      </ul>
    </li>
  );
}

/**
 * A navigation bar is usuall used as the main navigation for a site.
 * The navigation bar manages revealing navigation groups.
 *
 * Clicking a navigation group expands that navigation group. Clicking
 * anywhere while a group is expanded will collapse all groups.
 */
type NavigationBarProps = {
  activeGroup?: number /* The index of the navigation group that should be marked as being active.*/;
};

export function NavigationBar(
  props: React.PropsWithChildren<NavigationBarProps>
) {
  const { activeGroup = 0 } = props;
  const [expandedGroup, setExpandedGroup] = useState(-1);

  /* Allow collapsing all expanded navigation groups by clicking anywhere in the document.*/
  let onDocumentClick = () => {
    if (expandedGroup !== -1) setExpandedGroup(-1);
  };

  useEffect(() => {
    document.addEventListener("mousedown", onDocumentClick);

    return function cleanup() {
      document.removeEventListener("mousedown", onDocumentClick);
    };
  });

  let myChildren = React.Children.map(props.children, (child, i) => {
    if (React.isValidElement(child)) {
      const { name } = child.type as any;
      /* Only inject props into a NavGroup element.*/
      if (name !== "NavGroup") return child;

      /* Inject new properties into children. */
      const args = {
        isActive: activeGroup === i,
        _expand: expandedGroup === i,
        _onClick: () => setExpandedGroup(i),
      };
      return React.cloneElement(child, args);
    } else {
      return child;
    }
  });

  return (
    <nav>
      <ul>{myChildren}</ul>
    </nav>
  );
}
