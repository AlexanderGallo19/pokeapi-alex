import { useEffect, useState } from "react";
import useForm from "./useForm";
import useFetchPopkeapi from "./useFetchPopkeapi";
import { type PokemonsResponse } from "../models/pokemon/Pokemons";
import { SimplePokemon } from "../models/pokemon/SimplePokemon";


const initialState = {
  name: "",
};

const usePokemonFiltered = () => {


const [pokemonsFiltered, setPokemonsFiltered] = useState<SimplePokemon[]>([]);

  const { data } = useFetchPopkeapi<PokemonsResponse>(
    "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
  );

  const { formState, handleInputChange, debouncedInputValue } = useForm(initialState);

  const filterPokemons = () => {
    let pokemonsMap:SimplePokemon[] = [];
    if (data?.results) {
      pokemonsMap = data.results
        .filter((pokemon) =>
          pokemon.name
            .toLocaleLowerCase()
            .includes(formState.name.toLocaleLowerCase())
        )
        .map((poke) => ({
          name: poke.name,
          id: poke.url.split("/").at(-2)!,
        }));
    }
    setPokemonsFiltered(pokemonsMap);
  };

  useEffect(() => {
    filterPokemons();
  }, [debouncedInputValue.name]);

  return {
    ...pokemonsFiltered,
    pokemonsFiltered,
    formState,
    handleInputChange
  }
}

export default usePokemonFiltered
