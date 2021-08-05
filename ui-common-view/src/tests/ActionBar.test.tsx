import { render, screen } from "@testing-library/react";
import ActionBar from "../components/ActionBar";

test("renders learn react link", () => {
  render(<ActionBar>Foo</ActionBar>);
  const element = screen.getByText(/Foo/i);
  expect(element).toBeInTheDocument();
});
