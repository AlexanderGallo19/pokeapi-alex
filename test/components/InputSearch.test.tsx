import { fireEvent, render, screen } from "@testing-library/react";
import InputSearch from "../../src/components/InputSearch/InputSearch";

const value = "";
const mockHandleInputChange = jest.fn();

describe("Test on file InputSearch.tsx", () => {
  beforeEach(() => {
    render(<InputSearch value={value} onInputChange={mockHandleInputChange} />);
  });

  test("should render the input", () => {
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("");
  });

  test("should call onInputChange when input value change", () => {
    const input = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "bulbasur" } });

    expect(mockHandleInputChange).toHaveBeenCalledTimes(1);
  });
});
