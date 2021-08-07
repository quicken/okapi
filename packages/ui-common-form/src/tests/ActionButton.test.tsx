import "jsdom-global/register";
import Enzyme from "enzyme";
import { mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });

import * as React from "react";
import ActionButton from "../components/ActionButton";

let wrapper: any;

afterEach(() => {
  if (wrapper) {
    wrapper.unmount();
  }
});

test("basic render", () => {
  wrapper = mount(
    <ActionButton
      type="empty"
      onClick={(e) => {
        console.log("Hello");
      }}
    >
      Click Me
    </ActionButton>
  );
  expect(wrapper.exists(".icon")).toBe(true);
});
