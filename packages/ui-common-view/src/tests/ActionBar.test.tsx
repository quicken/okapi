import "jsdom-global/register";

import * as React from "react";
import { ActionBar } from "../components/ActionBar";

let wrapper: any;

afterEach(() => {
  if (wrapper) {
    wrapper.unmount();
  }
});

test("basic render", () => {
  //  wrapper = mount(<ActionBar></ActionBar>);
  //expect(wrapper.exists(".icon")).toBe(true);
});
