import { render, screen } from "@testing-library/react";
import { SimplePokemon } from "../../../src/models/pokemon/SimplePokemon";
import PokemonsGrid from "../../../src/components/pokemons/PokemonsGrid";
import { PokemonsContext } from "../../../src/context/PokemonsContext";
import { MemoryRouter } from "react-router-dom";

const mockPokemons: SimplePokemon[] = [
  { id: "1", name: "bulbasaur" },
  { id: "2", name: "ivysaur" },
];

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

describe("Test on file PokemonsGrid.tsx", () => {
  test("should render the mockPokemons", () => {
    render(
      <MemoryRouter>
        <PokemonsContext.Provider value={mockContextValue}>
          <PokemonsGrid pokemons={mockPokemons} />
        </PokemonsContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByAltText("bulbasaur")).toBeInTheDocument();
    expect(screen.getByAltText("ivysaur")).toBeInTheDocument();
  });

  test("should have the attribute corrects the links to see details", () => {
    render(
      <MemoryRouter>
        <PokemonsContext.Provider value={mockContextValue}>
          <PokemonsGrid pokemons={mockPokemons} />
        </PokemonsContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getAllByText("See details")[0]).toHaveAttribute(
      "href",
      "/pokemons/1"
    );
    expect(screen.getAllByText("See details")[1]).toHaveAttribute(
      "href",
      "/pokemons/2"
    );
  });

  test("should not render any Pokémon if list is empty", () => {
    render(
      <MemoryRouter>
        <PokemonsGrid pokemons={[]} />
      </MemoryRouter>
    );

    expect(screen.queryByAltText("bulbasaur")).not.toBeInTheDocument();
    expect(screen.queryByAltText("ivysaur")).not.toBeInTheDocument();

    expect(screen.queryByText("bulbasaur")).not.toBeInTheDocument();
    expect(screen.queryByText("ivysaur")).not.toBeInTheDocument();
  });
});
