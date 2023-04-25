import "jsdom-global/register";

import * as React from "react";
import ActionButton from "../components/ActionButton";

let wrapper: any;

afterEach(() => {
  if (wrapper) {
    wrapper.unmount();
  }
});

test("basic render", () => {});
