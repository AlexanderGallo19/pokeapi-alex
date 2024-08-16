import LinkAction from "../../link/LinkAction";
import styles from "./InfoLandingPage.module.scss";

const InfoLandingPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__title}>
        <img
          className={styles.container__title_imgbulbasur}
          src="/img/bulbasaur.png"
          alt="Image-bulbasur"
        />
        <h1>Immerse yourself in the world of pokemons!</h1>
      </div>
      <div className={styles.container__description}>
        <div className={styles.container__description_button}>
          <p>Select your favorite pokemon and explore its abilities</p>
          <LinkAction
            children="See Pokemons"
            config={{
              variant: "buttonPrimary",
              route: "/pokemons",
            }}
          />
        </div>
        <img
          className={styles.container__description_imgdewjemg}
          src="img/dewjemg.png"
          alt="Image-dewjemg"
        />
      </div>
    </div>
  );
};

export default InfoLandingPage;
