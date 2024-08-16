import { fireEvent, render, screen } from "@testing-library/react";
import { type PokemonProps } from "../../src/models/pokemon/pokemon";
import Swiper from "../../src/components/swiper/Swiper";

const mockPokemon: PokemonProps = {
  abilities: [],
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

describe("Test on file Swiper.tsx", () => {
  beforeEach(() => {
    render(<Swiper pokemon={mockPokemon} />);
  });
  test("should render the Swiper component with the first image ", () => {
    const images = screen.getAllByAltText(mockPokemon.name);
    expect(images).toHaveLength(1);

    expect(images[0]).toHaveAttribute(
      "src",
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${mockPokemon.id}.svg`
    );
  });

  test("should change the image after press the next button", () => {
    const nextButton = screen.getByTestId("next-button");

    fireEvent.click(nextButton);

    const images = screen.getByRole("img");

    expect(images).toHaveAttribute(
      "src",
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${mockPokemon.id}.png`
    );
  });
});
