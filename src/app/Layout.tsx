
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import HomePage from "./home/HomePage";
import PokemonsPage from "./pokemonsList/PokemonsPage";
import PokemonPage from "./pokemon/PokemonPage";
import styles from "./Layout.module.scss";


const Layout = () => {
  return (
    <div className={ styles.container }>
      <Navbar />





      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/pokemons" element={ <PokemonsPage /> } />
        <Route path="/pokemons/pokemon/:id" element={ <PokemonPage /> } />
      </Routes>
    </div>
  )
}

export default Layout
