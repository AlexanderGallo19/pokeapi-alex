import { useContext } from "react";
import InputSearch from "../../InputSearch/InputSearch";
import { PokemonsContext } from "../../../context/PokemonsContext";
import styles from "./FindPokemon.module.scss";

const FindPokemon = () => {
  const context = useContext(PokemonsContext);

  if (!context) {
    return <div>Error: Context not available </div>;
  }

  const { inputConfig } = context;

  return (
    <div className={styles.container}>
      <div className={styles.container__search}>
        <p>Find your Favorite Pokemon</p>
        <InputSearch
          value={inputConfig.formState.name}
          onInputChange={inputConfig.handleInputChange}
        />
      </div>
      <img src="../../../../public/img/charizar.png" alt="Image-charizar" />
    </div>
  );
};

export default FindPokemon;
