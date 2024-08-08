import { useState } from "react";
import {
  IoChevronForwardCircleOutline,
  IoChevronBackCircleOutline,
} from "react-icons/io5";

import { PokemonProps } from "../../models/pokemon/pokemon";
import styles from "./Swiper.module.scss";

interface Props {
  pokemon: PokemonProps;
}

const Swiper = ({ pokemon }: Props) => {
  const [currentImage, setCurrentImage] = useState(0);

  const images: string[] = [
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`,
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`,
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${pokemon.id}.png`,
  ];

  const imagesLength = images.length;

  const handleNextImage = () => {
    setCurrentImage(currentImage === imagesLength - 1 ? 0 : currentImage + 1);
  };

  const handleBackImage = () => {
    setCurrentImage(currentImage === 0 ? imagesLength - 1 : currentImage - 1);
  };

  return (
    <div className={styles.container}>
      <button onClick={handleBackImage}>
        <IoChevronBackCircleOutline />
      </button>
      {images.map((image, index) => (
        <div key={index} className={styles.container__images}>
          {currentImage === index && <img src={image} alt={pokemon.name} />}
        </div>
      ))}
      <button onClick={handleNextImage}>
        <IoChevronForwardCircleOutline />
      </button>
    </div>
  );
};

export default Swiper;
