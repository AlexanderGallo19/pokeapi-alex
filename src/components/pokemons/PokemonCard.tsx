import { useContext } from "react";
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import Button from "../button/Button";
import { type SimplePokemon } from "../../models/pokemon/SimplePokemon";
import useFavoritePokemon from "../../utils/pokemons/favoritePokemon";
import { PokemonsContext } from "../../context/PokemonsContext";
import styles from "./PokemonCard.module.scss";

interface Prop {
  pokemon: SimplePokemon;
}

const URL_IMAGE =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";

const PokemonCard = ({ pokemon }: Prop) => {
  const context = useContext(PokemonsContext);

  if (!context) {
    return <div>Error: Context not available </div>;
  }

  const { favoritesState } = context;
  const pokemonId = Number(pokemon.id);
  const isFavorite = favoritesState.favorite[pokemonId] || false;

  const { onToggleFavorite } = useFavoritePokemon();

  const handleFavoritePokemon = (pokemon: SimplePokemon) => {
    onToggleFavorite(pokemon);
    favoritesState.toggleFavorite(pokemonId);
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__img}>
        <img src={`${URL_IMAGE}${pokemon.id}.svg`} alt={pokemon.name} />
      </div>
      <div className={styles.container__title}>
        <p> {pokemon.name} </p>
        <div
          onClick={() => handleFavoritePokemon(pokemon)}
          className={styles.container__title_icon}
        >
          {!isFavorite ? <IoHeartOutline /> : <IoHeart />}
        </div>
      </div>
      <Button
        children="See details"
        config={{
          variant: "buttonSecondary",
          route: `/pokemons/${pokemon.id}`,
        }}
      />
    </div>
  );
};

export default PokemonCard;
