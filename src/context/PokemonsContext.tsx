import { createContext } from "react";
import { SimplePokemon } from "../models/pokemon/SimplePokemon";

interface PokemonsContextType {
  pokemonsFiltered: SimplePokemon[];
  inputConfig: {
    formState: { [key: string]: string };
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  };
  favoritesState: {
    favorite: { [id: number]: boolean };
    toggleFavorite: (value: number) => void;
  };
}

export const PokemonsContext = createContext<PokemonsContextType | null>(null);
