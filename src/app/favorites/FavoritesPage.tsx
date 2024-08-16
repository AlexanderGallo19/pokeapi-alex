import PokemonsGrid from "../../components/pokemons/PokemonsGrid";
import NotFoundFavorites from "../../components/sections/notFoundFavorites/NotFoundFavorites";
import FavoritePokemon from "../../utils/pokemons/favoritePokemon";
import styles from "./FavoritesPage.module.scss";

const FavoritesPage = () => {
  const { pokemons } = FavoritePokemon();

  const favoritespokemons = pokemons();

  return (
    <div className={styles.container}>
      <h2>Favorites Pokemons</h2>
      {favoritespokemons.length < 1 ? (
        <NotFoundFavorites />
      ) : (
        <PokemonsGrid pokemons={favoritespokemons} />
      )}
    </div>
  );
};

export default FavoritesPage;
