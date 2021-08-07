import "jsdom-global/register";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });

import * as React from "react";

import TextAreaValue from "../components/TextAreaValue";

it("renders without crashing", () => {
  shallow(<TextAreaValue name="" />);
});
