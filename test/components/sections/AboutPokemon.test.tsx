import { render, screen } from "@testing-library/react";
import { PokemonProps } from "../../../src/models/pokemon/pokemon";
import AboutPokemon from "../../../src/components/sections/aboutPokemon/AboutPokemon";

const mockPokemon: PokemonProps = {
  abilities: [
    {
      ability: {
        name: "overgrow",
        url: "https://pokeapi.co/api/v2/ability/65/",
      },
      is_hidden: false,
      slot: 1,
    },
    {
      ability: {
        name: "chlorophyll",
        url: "https://pokeapi.co/api/v2/ability/34/",
      },
      is_hidden: true,
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
  types: [],
  weight: 69,
};

describe("Test on file AboutPokemon.tsx", () => {
  render(<AboutPokemon pokemon={mockPokemon} />);
  test("should render the component with the correct title ", () => {
    expect(screen.getByText(/About/i)).toBeInTheDocument();
  });
});
