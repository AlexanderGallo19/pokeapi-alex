import PokemonsGrid from "../../components/pokemons/PokemonsGrid";
import useFetchPopkeapi from "../../hooks/useFetchPopkeapi";
import { type PokemonsM } from "../../models/pokemon/Pokemons";
import styles from './PokemonsPage.module.scss';


const PokemonsPage = () => {




  const {data} = useFetchPopkeapi<PokemonsM>('https://pokeapi.co/api/v2/pokemon?limit=16&offset=0')

  const pokemons = data?.results.map( pokemon =>  ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name
  }))
    
  
  

  return (
    <div className={ styles.container }>
      <PokemonsGrid pokemons={pokemons} />
    </div>
  )
}

export default PokemonsPage;
