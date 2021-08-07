import React from "react";

type NavigationBarProps = {};

export function NavigationBar(
  props: React.PropsWithChildren<NavigationBarProps>
) {
  return <nav>{props.children}</nav>;
}
