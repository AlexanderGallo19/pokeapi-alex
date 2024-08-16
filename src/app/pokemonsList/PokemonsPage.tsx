import { useCallback, useContext, useEffect, useState } from "react";
import PokemonsGrid from "../../components/pokemons/PokemonsGrid";
import FindPokemon from "../../components/sections/findPokemon/FindPokemon";
import useFetchPokeapi from "../../hooks/useFetchPokeapi";
import { type SimplePokemon } from "../../models/pokemon/SimplePokemon";
import { type PokemonsResponse } from "../../models/pokemon/Pokemons";
import { PokemonsContext } from "../../context/PokemonsContext";
import styles from "./PokemonsPage.module.scss";

const OFFSET = 16;

const PokemonsPage = () => {
  const [pokemonsPagination, setPokemonsPagination] = useState<SimplePokemon[]>(
    []
  );
  const [offsetPagination, setOffsetPagination] = useState<number>(0);

  const context = useContext(PokemonsContext);

  if (!context) {
    return <div>Error: Context not available </div>;
  }

  const { inputConfig, pokemonsFiltered } = context;

  const handlePagination = useCallback(() => {
    setOffsetPagination(offsetPagination + OFFSET);
  }, [offsetPagination, setOffsetPagination]);

  const { data, isLoading } = useFetchPokeapi<PokemonsResponse>(
    `https://pokeapi.co/api/v2/pokemon?limit=16&offset=${offsetPagination}`
  );

  const removePokemonsDuplicate = (pokemons: SimplePokemon[]) => {
    const uniqueIDs = new Set();
    const uniquePokemons = [];

    for (const pokemon of pokemons) {
      if (!uniqueIDs.has(pokemon.id)) {
        uniqueIDs.add(pokemon.id);
        uniquePokemons.push(pokemon);
      }
    }

    return uniquePokemons;
  };

  const mapPokemons = () => {
    let pokemons: SimplePokemon[] = [];

    if (data?.results) {
      pokemons = data!.results.map((pokemon) => ({
        id: pokemon.url.split("/").at(-2)!,
        name: pokemon.name,
      }));
    }
    addPokemonsToState(pokemons);
  };

  const addPokemonsToState = (pokemons: SimplePokemon[]) => {
    setPokemonsPagination(
      removePokemonsDuplicate([...pokemonsPagination, ...pokemons])
    );
  };

  useEffect(() => {
    mapPokemons();
  }, [data]);

  return (
    <div className={styles.container}>
      <FindPokemon />

      {isLoading ? (
        <p>Loading......</p>
      ) : (
        <PokemonsGrid
          pokemons={
            inputConfig.formState.name === ""
              ? pokemonsPagination
              : pokemonsFiltered
          }
        />
      )}

      <button className={styles.container__button} onClick={handlePagination}>
        Load more pokemons
      </button>
    </div>
  );
};

export default PokemonsPage;
