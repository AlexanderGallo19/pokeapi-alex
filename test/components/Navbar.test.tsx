import { render, screen } from "@testing-library/react";
import Navbar from "../../src/components/navbar/Navbar";
import { MemoryRouter } from "react-router-dom";

describe("Test on file Navbar.tsx", () => {
  test("should render the navbar with logo and links", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const logoPokemon = screen.getByAltText("Logo-page");
    expect(logoPokemon).toBeInTheDocument();
    expect(logoPokemon).toHaveAttribute("src", "../../../public/img/logo.png");

    const logoPokemonResponsive = screen.getByAltText("Logo-page-responsive");
    expect(logoPokemonResponsive).toBeInTheDocument();
    expect(logoPokemonResponsive).toHaveAttribute(
      "src",
      "../../../public/img/pokeball.png"
    );

    expect(screen.getByText("Find your pokemon")).toBeInTheDocument();
    expect(screen.getByText("Favorites")).toBeInTheDocument();
  });
});
