import "jsdom-global/register";
import Enzyme from "enzyme";
import { mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });

import * as React from "react";
import DatePicker from "../index";

let wrapper: any;

afterEach(() => {
  if (wrapper) {
    wrapper.unmount();
  }
});

test("basic render", () => {
  wrapper = mount(
    <DatePicker
      onChange={(name: string, value: Date, data?: any) => {
        console.log(name, value, data);
      }}
    ></DatePicker>
  );
  expect(wrapper.exists(".date_picker")).toBe(true);
});
