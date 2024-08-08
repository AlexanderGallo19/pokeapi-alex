import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "../../src/components/button/Button";

interface ButtonProps {
  children: string;
  config: {
    variant: string;
    route: string;
  };
}

describe("Test on file Button.tsx", () => {
  const renderButton = (props: ButtonProps) => render(<Button {...props} />);

  test("should render the component with the text of children", () => {
    renderButton({
      children: "Click me",
      config: { variant: "buttonPrimary", route: "/home" },
    });

    const buttonElement = screen.getByText("Click me");
    expect(buttonElement).not.toBeNull();
  });
});
