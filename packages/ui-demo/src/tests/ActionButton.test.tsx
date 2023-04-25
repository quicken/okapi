import { render, screen } from "@testing-library/react";
import { ActionButton } from "@mscherzer/ui-common-form";

test("renders learn react link", () => {
  render(
    <ActionButton
      type="empty"
      onClick={(e) => {
        console.log("Hello");
      }}
    >
      Click Me
    </ActionButton>
  );
  const element = screen.getByText(/Click Me/i);
  expect(element).toBeInTheDocument();
});
