import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { LinkActionProps } from "../../src/components/link/LinkAction.model";
import { MemoryRouter } from "react-router-dom";
import { buttonPrimary } from "../../src/utils/styles/buttonStyles";
import LinkAction from "../../src/components/link/LinkAction";

describe("Test on file LinkAction.tsx", () => {
  const renderButton = (props: LinkActionProps) =>
    render(
      <MemoryRouter>
        <LinkAction {...props} />
      </MemoryRouter>
    );

  test("should render the component with the text of children", () => {
    renderButton({
      children: "Click me",
      config: { variant: "buttonPrimary", route: "/" },
    });

    const buttonElement = screen.getByText("Click me");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).not.toBeNull();
  });

  test("should applies correct styles based on variant", () => {
    renderButton({
      children: "Click me",
      config: { variant: "buttonPrimary", route: "/" },
    });

    const buttonElement = screen.getByText("Click me");
    expect(buttonElement).toHaveStyle(buttonPrimary);
  });
});
