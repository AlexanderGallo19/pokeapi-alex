import { SimplePokemon } from "../../models/pokemon/SimplePokemon"

const FavoritePokemon = () => {

    const onToggleFavorite = (pokemon: SimplePokemon) => {

        let favorites: SimplePokemon[] = JSON.parse( localStorage.getItem("favorites") || "[]" );

        if (favorites.some(poke => poke.id === pokemon.id)) {
            favorites = favorites.filter( poke => poke.id != pokemon.id );
        } else {
            favorites.push( pokemon );
        }


        localStorage.setItem("favorites", JSON.stringify( favorites ));
    }

    const pokemons = (): SimplePokemon[] => {
        return JSON.parse( localStorage.getItem("favorites") || "[]" );
    }

  return {
    onToggleFavorite,
    pokemons
  }
}

export default FavoritePokemon
