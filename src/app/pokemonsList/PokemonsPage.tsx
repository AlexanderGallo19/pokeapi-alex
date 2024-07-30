import { useEffect, useState } from "react";
import PokemonsGrid from "../../components/pokemons/PokemonsGrid";
import FindPokemon from "../../components/sections/FindPokemon/FindPokemon";
import useFetchPopkeapi from "../../hooks/useFetchPopkeapi";
import { type PokemonsM } from "../../models/pokemon/Pokemons";
import styles from './PokemonsPage.module.scss';
import { SimplePokemon } from "../../models/pokemon/SimplePokemon";


const PokemonsPage = () => {

  const [allPokemons, setAllPokemons] = useState<SimplePokemon[]>([])
  const [offset, setOffset] = useState(0)
  const {data, isLoading} = useFetchPopkeapi<PokemonsM>(`https://pokeapi.co/api/v2/pokemon?limit=16&offset=${ offset }`);



  function removePokemonsDuplicate(pokemons: SimplePokemon[]) {
    const uniqueIDs = new Set();
    const uniquePokemons = [];

    for (const pokemon of pokemons) {
        if (!uniqueIDs.has(pokemon.id)) {
            uniqueIDs.add(pokemon.id);
            uniquePokemons.push(pokemon);
        }
    }

    return uniquePokemons;
}

  const addPokemonsToState = () => {
    if (data && data.results) {
      const pokemons: SimplePokemon[] = data!.results.map( pokemon =>  ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name
    
      }))

      setAllPokemons(removePokemonsDuplicate([ ...allPokemons, ...pokemons ]));
    }
  }

  useEffect(() => {
    addPokemonsToState();
  }, [offset])

  useEffect(() => {
    addPokemonsToState();
  }, [data])
  
  
  const handlePagination = () => {
    setOffset( offset + 16 );
  }

  return (
    <div className={ styles.container }>
      <FindPokemon />

      {
        isLoading ? (
          <p >Cargandooo......</p>
        ):
        (
          <PokemonsGrid pokemons={ allPokemons } />
        )
      }

      <button onClick={ handlePagination }>Cargar Pokemones</button>
    </div>
  )
}

export default PokemonsPage;
