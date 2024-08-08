import { PokemonProps } from "../../../models/pokemon/pokemon";
import styles from "./AboutPokemon.module.scss";

interface Props {
  pokemon: PokemonProps;
}

const AboutPokemon = ({ pokemon }: Props) => {
  return (
    <div className={styles.container}>
      <h2> About </h2>
      <div className={styles.container__info}>
        <div className={styles.container__info_weight}>
          <p> Weight </p>
          <span> {pokemon.weight} </span>
        </div>
        <hr />
        <div className={styles.container__info_height}>
          <p> Height </p>
          <span> {pokemon.height} </span>
        </div>
        <hr />
        <div className={styles.container__info_abilities}>
          <p> Abilities </p>
          {pokemon.abilities.map((ability, index) => (
            <span key={index}> {ability.ability.name} </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPokemon;
