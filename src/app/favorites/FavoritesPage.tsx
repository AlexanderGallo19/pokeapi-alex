import PokemonsGrid from "../../components/pokemons/PokemonsGrid";
import useFavoritePokemon from "../../utils/pokemons/favoritePokemon";
import styles from "./FavoritesPage.module.scss";

const FavoritesPage = () => {
  const { pokemons } = useFavoritePokemon();

  const favoritespokemons = pokemons();

  return (
    <div className={styles.container}>
      <h2>Favorites Pokemons</h2>
      <PokemonsGrid pokemons={favoritespokemons} />
    </div>
  );
};

export default FavoritesPage;
