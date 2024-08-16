import { useContext } from "react";
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import { PokemonsContext } from "../../context/PokemonsContext";
import FavoritePokemon from "../../utils/pokemons/favoritePokemon";
import { type SimplePokemon } from "../../models/pokemon/SimplePokemon";
import ToolTip from "../toolTip/ToolTip";
import styles from "./PokemonCard.module.scss";
import LinkAction from "../link/LinkAction";

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

  const { onToggleFavorite } = FavoritePokemon();

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
        <p>{pokemon.name}</p>
        <div
          onClick={() => handleFavoritePokemon(pokemon)}
          data-testid="favorite-icon"
          className={styles.container__title_icon}
        >
          <ToolTip infoText="Add to favorite">
            {!isFavorite ? <IoHeartOutline /> : <IoHeart />}
          </ToolTip>
        </div>
      </div>
      <LinkAction
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
