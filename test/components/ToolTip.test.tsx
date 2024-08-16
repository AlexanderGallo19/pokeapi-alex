import { fireEvent, render, screen } from "@testing-library/react";
import ToolTip from "../../src/components/toolTip/ToolTip";

describe("Test on file ToolTip.tsx", () => {
  test("should render the children correctly", () => {
    render(
      <ToolTip infoText="Home">
        <p>Hola mundo</p>
      </ToolTip>
    );

    expect(screen.getByText("Hola mundo")).toBeInTheDocument();
  });

  test("should display tooltip on mouse enter", () => {
    render(
      <ToolTip infoText="Home">
        <p>Hola mundo</p>
      </ToolTip>
    );

    const container = screen.getByText("Hola mundo").parentElement;

    if (!container) {
      throw new Error("It didn't can find the wrapper");
    }

    fireEvent.mouseEnter(container);

    expect(screen.getByText("Home")).toBeInTheDocument();
  });
});
