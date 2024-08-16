import { render, screen } from "@testing-library/react";
import ProgressBar from "../../src/components/progressBar/ProgressBar";
import styles from "../../src/components/progressBar/ProgressBar.module.scss";

const getComputedStyleValue = (
  element: HTMLElement | Element,
  property: string
) => {
  const style = window.getComputedStyle(element);
  return style.getPropertyValue(property);
};

describe("Test on file ProgressBar.tsx", () => {
  test("should ", () => {
    render(<ProgressBar baseStat={50} />);

    const progressBarContainer = screen.getByTestId("container");
    const fillProgress = progressBarContainer.querySelector(
      `.${styles.container__fillprogress}`
    );

    expect(getComputedStyleValue(progressBarContainer, "width")).toBe("100%");
    expect(getComputedStyleValue(fillProgress, "width")).toBe("50%");
  });
});
