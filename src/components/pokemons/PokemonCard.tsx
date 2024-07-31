import { IoHeartOutline } from "react-icons/io5";
import Button from "../button/Button";
import { type SimplePokemon } from "../../models/pokemon/SimplePokemon";
import styles from "./PokemonCard.module.scss";

interface Prop {
  pokemon: SimplePokemon;
}

const PokemonCard = ({ pokemon }: Prop) => {
  return (
    <div className={styles.container}>
      <div className={styles.container__img}>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
          alt={pokemon.name}
        />
      </div>
      <div className={styles.container__title}>
        <p> {pokemon.name} </p>
        <IoHeartOutline />
      </div>
      <Button
        children="See details"
        config={{
          variant: "buttonSecondary",
          route: `/pokemons/pokemon/${pokemon.id}`,
        }}
      />
    </div>
  );
};

export default PokemonCard;
