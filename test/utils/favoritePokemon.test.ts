import { SimplePokemon } from "../../src/models/pokemon/SimplePokemon";
import FavoritePokemon from "../../src/utils/pokemons/favoritePokemon";



describe('FavoritePokemon function', () => {

    beforeEach(() => {
        localStorage.clear();
    });
  test('should add a new favorite pokemon to localStorage', () => {
    const favoritePokemon = FavoritePokemon();
    const pokemon: SimplePokemon = { id: "1", name: "bulbasaur" };

    favoritePokemon.onToggleFavorite(pokemon);

    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    expect(favorites).toEqual([pokemon]);
  });

  test('should remove an existing favorite pokemon from localStorage', () => {
    const favoritePokemon = FavoritePokemon();
    const pokemon: SimplePokemon = { id: "1", name: "bulbasaur" };

    localStorage.setItem("favorites", JSON.stringify([pokemon]));

    favoritePokemon.onToggleFavorite(pokemon);

    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    expect(favorites).toEqual([]);
  });

  test('should return the correct list of favorite pokemons', () => {
    const favoritePokemon = FavoritePokemon();
    const pokemon1: SimplePokemon = { id: "1", name: "bulbasaur" };
    const pokemon2: SimplePokemon = { id: "2", name: "ivysaur" };

    localStorage.setItem("favorites", JSON.stringify([pokemon1, pokemon2]));

    const favorites = favoritePokemon.pokemons();
    expect(favorites).toEqual([pokemon1, pokemon2]);
  });
});