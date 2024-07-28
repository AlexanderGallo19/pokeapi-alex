import { type PokemonsM } from "../models/pokemon/Pokemons";
import { type SimplePokemon } from "../models/pokemon/SimplePokemon";


export const getPokemons = async (limit: string = '16' , offset: string = '0' ): Promise<SimplePokemon[] | undefined> => {

    try {
        
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${ limit }&offset=${ offset }`);

        const data: PokemonsM = await response.json()

        const pokemons: SimplePokemon[] = data.results.map( pokemon =>  ({
            id: pokemon.url.split('/').at(-2)!,
            name: pokemon.name,
        }))
        

        return pokemons;
        

    } catch (error) {
        console.log(error);
        
    }
    

}