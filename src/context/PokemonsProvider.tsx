import { ReactNode, useState } from "react";

import { PokemonsContext } from "./PokemonsContext";
import usePokemonFiltered from "../hooks/usePokemonFiltered";

interface PokemonsProviderProps {
  children: ReactNode;
}

const PokemonsProvider = ({ children }: PokemonsProviderProps) => {
  const { pokemonsFiltered, formState, handleInputChange } =
    usePokemonFiltered();

  const [favorites, setFavorites] = useState<{ [id: number]: boolean }>({});

  const toggleFavorite = (pokemonId: number) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [pokemonId]: !prevFavorites[pokemonId],
    }));
  };

  return (
    <PokemonsContext.Provider
      value={{
        pokemonsFiltered: pokemonsFiltered,
        inputConfig: {
          formState: formState,
          handleInputChange: handleInputChange,
        },
        favoritesState: {
          favorite: favorites,
          toggleFavorite: toggleFavorite,
        },
      }}
    >
      {children}
    </PokemonsContext.Provider>
  );
};

export default PokemonsProvider;
