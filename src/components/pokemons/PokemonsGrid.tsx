import { type SimplePokemon } from "../../models/pokemon/SimplePokemon";
import PokemonCard from "./PokemonCard";
import styles from "./PokemonsGrid.module.scss";

interface Props {
  pokemons?: SimplePokemon[];
}

const PokemonsGrid = ({ pokemons = [] }: Props) => {
  return (
    <div className={styles.container}>
      {pokemons?.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonsGrid;
