import { screen } from "@testing-library/dom";
import InfoLandingPage from "../../../src/components/sections/infoLandingPage/InfoLandingPage";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("Test on file InfoLandingPage.tsx", () => {
  test("should render the component with correct content", () => {
    render(
      <MemoryRouter>
        <InfoLandingPage />
      </MemoryRouter>
    );

    expect(
      screen.getByText(/Immerse yourself in the world of pokemons!/i)
    ).toBeInTheDocument();

    const imageBulbasaur = screen.getByAltText("Image-bulbasur");
    expect(imageBulbasaur).toBeInTheDocument();
    expect(imageBulbasaur).toHaveAttribute(
      "src",
      "../../../public/img/bulbasaur.png"
    );

    expect(
      screen.getByText(
        /Select your favorite pokemon and explore its abilities/i
      )
    ).toBeInTheDocument();

    const imageDewjemg = screen.getByAltText("Image-dewjemg");
    expect(imageDewjemg).toBeInTheDocument();
    expect(imageDewjemg).toHaveAttribute(
      "src",
      "../../../public/img/dewjemg.png"
    );
  });
});
