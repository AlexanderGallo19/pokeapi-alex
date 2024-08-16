import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { PokemonsContext } from "../../../src/context/PokemonsContext";
import PokemonCard from "../../../src/components/pokemons/PokemonCard";
import { type SimplePokemon } from "../../../src/models/pokemon/SimplePokemon";

jest.mock(".../../../src/utils/pokemons/favoritePokemon", () => ({
  __esModule: true,
  default: () => ({
    onToggleFavorite: jest.fn(),
  }),
}));

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

const mockPokemonCard: SimplePokemon = {
  name: "bulbasaur",
  id: "1",
};

describe("Test on file PokemonCard.tsx", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <PokemonsContext.Provider value={mockContextValue}>
          <PokemonCard pokemon={mockPokemonCard} />
        </PokemonsContext.Provider>
      </MemoryRouter>
    );
  });

  test("should render the component with the mockPokemon correct data", () => {
    expect(screen.getByText("bulbasaur")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
    );
  });

  test("should toggle favorite icon on click", () => {
    const favoriteIconDiv = screen.getByTestId("favorite-icon");
    expect(favoriteIconDiv).toBeInTheDocument();
    expect(favoriteIconDiv.querySelector("svg")).toBeTruthy();

    fireEvent.click(favoriteIconDiv);

    expect(mockContextValue.favoritesState.toggleFavorite).toHaveBeenCalledWith(
      1
    );
  });
});
