import { useParams } from "react-router-dom"

const PokemonPage = () => {

  const { id } = useParams()

  return (
    <div>
      <h1>Pokemon page { id }</h1>
    </div>
  )
}

export default PokemonPage
