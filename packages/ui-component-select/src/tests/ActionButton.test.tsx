import "jsdom-global/register";

import * as React from "react";

let wrapper: any;

afterEach(() => {
  if (wrapper) {
    wrapper.unmount();
  }
});

test("basic render", () => {
  expect(wrapper.exists(".icon")).toBe(true);
});
