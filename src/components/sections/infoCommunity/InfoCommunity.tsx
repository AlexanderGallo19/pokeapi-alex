import LinkAction from "../../link/LinkAction";
import styles from "./InfoCommunity.module.scss";

const urlGitHub = "https://github.com/AlexanderGallo19/pokeapi-alex";

const InfoCommunity = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.container__logocommunity}
        src="/img/logo-comunity.png"
        alt="logo-community"
      />
      <div className={styles.container__description}>
        <div className={styles.container__description_button}>
          <p>
            Join the UNITE community, go clone the repo and feel free to add
            whatever you want
          </p>
          <LinkAction
            children="Pokemon GO"
            config={{
              variant: "buttonPrimary",
              route: urlGitHub,
            }}
          />
        </div>
        <img
          className={styles.container__description_imgswiper}
          src="/img/swipper-type.png"
          alt="Image-swiper"
        />
      </div>
    </div>
  );
};

export default InfoCommunity;
