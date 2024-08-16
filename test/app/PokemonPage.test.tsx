import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import PokemonPage from "../../src/app/pokemon/PokemonPage";
import useFetchPokeapi from "../../src/hooks/useFetchPokeapi";
import { jest } from "@jest/globals";

jest.mock("../../src/hooks/useFetchPokeapi");

const mockPokemon = {
  abilities: [
    {
      ability: {
        name: "overgrow",
        url: "https://pokeapi.co/api/v2/ability/65/",
      },
      is_hidden: false,
      slot: 1,
    },
  ],
  base_experience: 64,
  cries: {
    latest: "",
    legacy: "",
  },
  forms: [],
  game_indices: [],
  height: 7,
  held_items: [],
  id: 1,
  is_default: true,
  location_area_encounters: "",
  moves: [],
  name: "bulbasaur",
  order: 1,
  past_abilities: [],
  past_types: [],
  species: {
    name: "bulbasaur",
    url: "https://pokeapi.co/api/v2/pokemon-species/1/",
  },
  sprites: {
    back_default: "",
    back_female: null,
    back_shiny: "",
    back_shiny_female: null,
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
    front_female: null,
    front_shiny: "url_to_front_shiny_sprite",
    front_shiny_female: null,
    other: {
      dream_world: {
        front_default: "url_to_dream_world_sprite",
        front_female: null,
      },
      home: {
        front_default: "url_to_home_sprite",
        front_female: null,
        front_shiny: "url_to_home_shiny_sprite",
        front_shiny_female: null,
      },
      "official-artwork": {
        front_default: "url_to_official_artwork_sprite",
        front_shiny: "url_to_official_artwork_shiny_sprite",
      },
      showdown: {
        back_default: "",
        back_female: null,
        back_shiny: "",
        back_shiny_female: null,
        front_default: "",
        front_female: null,
        front_shiny: "string",
        front_shiny_female: null,
      },
    },
  },
  stats: [],
  types: [
    {
      slot: 1,
      type: {
        name: "grass",
        url: "https://pokeapi.co/api/v2/type/12/",
      },
    },
    {
      slot: 2,
      type: {
        name: "poison",
        url: "https://pokeapi.co/api/v2/type/4/",
      },
    },
  ],
  weight: 69,
};

describe("Test on file PokemonPage.tsx", () => {
  test("should show loading message", () => {
    (useFetchPokeapi as jest.Mock).mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });
    render(
      <MemoryRouter initialEntries={["/pokemon/1"]}>
        <PokemonPage />
      </MemoryRouter>
    );

    expect(screen.getByText("LOADING.....")).toBeInTheDocument();
  });

  test("should show pokemon information", () => {
    (useFetchPokeapi as jest.Mock).mockReturnValue({
      data: mockPokemon,
      isLoading: false,
      hasError: null,
    });
    render(
      <MemoryRouter initialEntries={["/pokemon/1"]}>
        <PokemonPage />
      </MemoryRouter>
    );

    expect(screen.getByText("grass")).toBeInTheDocument();
    expect(screen.getByText("poison")).toBeInTheDocument();
  });

  test("should show error message", () => {
    (useFetchPokeapi as jest.Mock).mockReturnValue({
      data: null,
      isLoading: false,
      hasError: true,
    });

    render(
      <MemoryRouter initialEntries={["/pokemon/1"]}>
        <PokemonPage />
      </MemoryRouter>
    );

    expect(screen.getByText("Could not get the pokemon")).toBeInTheDocument();
  });
});
