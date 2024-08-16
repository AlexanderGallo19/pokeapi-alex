import { fireEvent, render, screen } from "@testing-library/react";
import { PokemonsContext } from "../../../src/context/PokemonsContext";
import PokemonsPage from "../../../src/app/pokemonsList/PokemonsPage";

const mockContextValue = {
  pokemonsFiltered: [
    { id: "1", name: "bulbasaur" },
    { id: "2", name: "ivysaur" },
  ],
  inputConfig: {
    formState: { name: "" },
    handleInputChange: jest.fn(),
  },

  favoritesState: {
    favorite: { 1: true, 2: false },
    toggleFavorite: jest.fn(),
  },
};

describe("Test on file FindPokemons.tsx", () => {
  beforeEach(() => {
    render(
      <PokemonsContext.Provider value={mockContextValue}>
        <PokemonsPage />
      </PokemonsContext.Provider>
    );
  });

  test("should render the FindPokemon component correctly ", () => {
    expect(screen.getByText(/Find your Favorite Pokemon/i)).toBeInTheDocument();

    expect(screen.getByRole("textbox")).toBeInTheDocument();

    expect(screen.getByAltText(/Image-charizar/i)).toBeInTheDocument();
  });

  test("should call handleInputChange when input changes", () => {
    const input = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "bulbasaur" } });

    expect(mockContextValue.inputConfig.handleInputChange).toHaveBeenCalled();
  });
});
