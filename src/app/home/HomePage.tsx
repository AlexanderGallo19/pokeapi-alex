import InfoCommunity from "../../components/sections/infoCommunity/InfoCommunity";
import InfoLandingPage from "../../components/sections/infoLandingPage/InfoLandingPage";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <main className={styles.container}>
      <InfoLandingPage />
      <InfoCommunity />
    </main>
  );
};

export default HomePage;
