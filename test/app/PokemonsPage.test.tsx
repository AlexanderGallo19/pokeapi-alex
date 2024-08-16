import { render, screen } from "@testing-library/react";
import PokemonsPage from "../../src/app/pokemonsList/PokemonsPage";
import { type PokemonsResponse } from "../../src/models/pokemon/Pokemons";
import { PokemonsContext } from "../../src/context/PokemonsContext";
import useFetchPokeapi from "../../src/hooks/useFetchPokeapi";

jest.mock("../../src/hooks/useFetchPokeapi");

const useFetchPokeapiMock = useFetchPokeapi as jest.Mock;

const mockContextValue = {
  pokemonsFiltered: [],
  inputConfig: {
    formState: { name: "" },
    handleInputChange: jest.fn(),
  },

  favoritesState: {
    favorite: { 1: true, 2: false },
    toggleFavorite: jest.fn(),
  },
};

const mockData: PokemonsResponse = {
  count: 1302,
  next: "https://pokeapi.co/api/v2/pokemon?offset=16&limit=16",
  previous: null,
  results: [
    { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
    { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
  ],
};

describe("Test on file PokemonsPage.tsx", () => {
  test("should show the component by default", () => {
    useFetchPokeapiMock.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });

    render(
      <PokemonsContext.Provider value={mockContextValue}>
        <PokemonsPage />
      </PokemonsContext.Provider>
    );

    expect(screen.getByText("Loading......")).toBeInTheDocument();
    expect(screen.getByText("Load more pokemons")).toBeInTheDocument();
  });

  // test("should show pokemons in the page", () => {
  //   useFetchPokeapiMock.mockReturnValue({
  //     data: null,
  //     isLoading: true,
  //     hasError: null,
  //   });

  //   render(
  //     <MemoryRouter>
  //       <PokemonsContext.Provider value={mockContextValue}>
  //         <PokemonsPage />
  //       </PokemonsContext.Provider>
  //     </MemoryRouter>
  //   );

  //   expect(screen.getByText("Loading......")).toBeInTheDocument();

  //   useFetchPokeapiMock.mockReturnValue({
  //     data: mockData,
  //     isLoading: false,
  //     hasError: null,
  //   });

  //   expect(screen.getByText("bulbasaur")).toBeInTheDocument();
  //   expect(screen.getByText("ivysaur")).toBeInTheDocument();
  // });

  test("should call useFetchPokeapi with the correct URL", () => {
    useFetchPokeapiMock.mockReturnValue({
      data: mockData,
      isLoading: true,
    });

    render(
      <PokemonsContext.Provider value={mockContextValue}>
        <PokemonsPage />
      </PokemonsContext.Provider>
    );

    expect(useFetchPokeapi).toHaveBeenCalledWith(
      "https://pokeapi.co/api/v2/pokemon?limit=16&offset=0"
    );
  });
});
