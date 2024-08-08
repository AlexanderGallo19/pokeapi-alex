import { Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import HomePage from "./home/HomePage";
import PokemonsPage from "./pokemonsList/PokemonsPage";
import PokemonPage from "./pokemon/PokemonPage";
import PokemonsProvider from "../context/PokemonsProvider";
import FavoritesPage from "./favorites/FavoritesPage";
import styles from "./Layout.module.scss";

const Layout = () => {
  return (
    <PokemonsProvider>
      <div className={styles.container}>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pokemons" element={<PokemonsPage />} />
          <Route path="/pokemons/:id" element={<PokemonPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </div>
    </PokemonsProvider>
  );
};

export default Layout;
