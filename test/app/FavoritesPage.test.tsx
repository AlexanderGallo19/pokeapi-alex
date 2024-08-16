import { render, screen } from "@testing-library/react";
import FavoritesPage from "../../src/app/favorites/FavoritesPage";
import FavoritePokemon from "../../src/utils/pokemons/favoritePokemon";

jest.mock("../../src/utils/pokemons/favoritePokemon", () => {
  return jest.fn().mockImplementation(() => {
    return {
      onToggleFavorite: jest.fn(),
      pokemons: jest.fn(() => [
        { id: "1", name: "bulbasaur" },
        { id: "2", name: "ivysaur" },
      ]),
    };
  });
});

describe("Test on file FavoritesPage.tsx", () => {
  beforeEach(() => {
    render(<FavoritesPage />);
  });

  test("should render the FavoritesPage component correctly", () => {
    expect(screen.getByText(/Favorites Pokemons/i)).toBeInTheDocument();
  });
});
