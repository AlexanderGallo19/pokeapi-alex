import { useParams } from "react-router-dom";
import styles from "./PokemonPage.module.scss";
import useFetchPopkeapi from "../../hooks/useFetchPopkeapi";

const PokemonPage = () => {

  const { id } = useParams()

  const { data, isLoading } = useFetchPopkeapi(`https://pokeapi.co/api/v2/pokemon/${ id }`);


  return (
    <div className={ styles.container }>
      <h1>Pokemon page { id }</h1>

      {
        isLoading ? (
          <p>CARGANDOOOOOOOO.....</p>
        ):
        
        JSON.stringify( { data, isLoading } )

      }

    </div>
  )
}

export default PokemonPage
