import { useParams } from "react-router-dom";
import useFetchPopkeapi from "../../hooks/useFetchPopkeapi";
import { PokemonProps } from "../../models/pokemon/pokemon";
import Swiper from "../../components/swiper/Swiper";
import AboutPokemon from "../../components/sections/aboutPokemon/AboutPokemon";
import StatsProgress from "../../components/statsProgress/StatsProgress";
import styles from "./PokemonPage.module.scss";

const PokemonPage = () => {
  const { id } = useParams();

  const { data, isLoading } = useFetchPopkeapi<PokemonProps>(
    `https://pokeapi.co/api/v2/pokemon/${id}`
  );

  if (isLoading) return <p>LOADING.....</p>;

  if (!data) return <p>Could not get the pokemon</p>;

  return (
    <div className={styles.container}>
      <Swiper pokemon={data} />
      <div className={styles.container__types}>
        {data.types.map((type, index) => (
          <div
            key={index}
            className={styles.container__types_name}
            style={{ background: index === 0 ? "#201E43" : "#86D991" }}
          >
            {type.type.name}
          </div>
        ))}
      </div>
      <AboutPokemon pokemon={data} />
      <StatsProgress stats={data.stats} />
    </div>
  );
};

export default PokemonPage;
