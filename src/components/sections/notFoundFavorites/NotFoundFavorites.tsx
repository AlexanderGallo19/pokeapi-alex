import { useEffect, useRef } from "react";
import useFetchPokeapi from "../../../hooks/useFetchPokeapi";
import { type PokemonsResponse } from "../../../models/pokemon/Pokemons";
import LinkAction from "../../link/LinkAction";
import styles from "./NotFoundFavorites.module.scss";

const URL_IMAGE =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";

const NotFoundFavorites = () => {
  const scrollerInnerRef = useRef<HTMLDivElement>(null);

  const { data, isLoading } = useFetchPokeapi<PokemonsResponse>(
    `https://pokeapi.co/api/v2/pokemon?limit=16&offset=$0`
  );

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduce-motion: reduce)").matches) {
      const innerCounter = Array.from(
        scrollerInnerRef?.current?.children ?? []
      );
      innerCounter.forEach((item) => {
        const duplicateItem = item.cloneNode(true) as HTMLElement;
        duplicateItem.setAttribute("aria-hidden", "true");
        scrollerInnerRef?.current?.appendChild(duplicateItem);
      });
    }
  }, []);

  return (
    <div className={styles.container}>
      <h3>You have not selected favorite pokemons</h3>
      {isLoading ? (
        <p>Loading........</p>
      ) : (
        <div className={styles.container__scroll} data-animated="true">
          <div
            className={styles.container__scroll_inner}
            ref={scrollerInnerRef}
          >
            {data.results.map((item, index) => (
              <div key={index} className={styles.container__image}>
                <h4>{item.name}</h4>
                <img
                  src={`${URL_IMAGE}${item.url.split("/").at(-2)!}.svg`}
                  alt={item.name}
                />
              </div>
            ))}
          </div>
        </div>
      )}
      <div className={styles.container__back}>
        <p>Go back to select</p>
        <LinkAction
          children="Pokemons page"
          config={{
            variant: "buttonPrimaryBlue",
            route: "/pokemons",
          }}
        />
      </div>
    </div>
  );
};

export default NotFoundFavorites;
