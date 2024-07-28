import { IoHeartOutline } from 'react-icons/io5'
import { type SimplePokemon } from '../../models/pokemon/SimplePokemon'
import Button from '../button/Button'
import styles from './PokemonsGrid.module.scss'

interface Props {
    pokemons?: SimplePokemon[]
}

const PokemonsGrid = ({ pokemons = [] }: Props) => {
  return (
      <div className={ styles.container } >
          {
            pokemons?.map( pokemon => (
              <div key={ pokemon.id } className={ styles.container__card }>
                <div className={ styles.container__card_img }>
                  <img src ={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ pokemon.id }.svg`} alt={ pokemon.name } />
                </div>
                <div className={ styles.container__card_title }>
                  <p> { pokemon.name } </p>
                  <IoHeartOutline />
                </div>
                <Button children="See details" fontFamily="Press Start 2P" />
              </div>
            ))
          }
      </div>
  )
}

export default PokemonsGrid
