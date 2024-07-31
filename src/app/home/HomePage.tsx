import InfoCommunity from "../../components/sections/InfoCommunity/InfoCommunity"
import InfoLandingPage from "../../components/sections/InfoLandingPage/InfoLandingPage"
import styles from "./HomePage.module.scss"

const HomePage = () => {
  return (
    <main className={ styles.container }>
      <InfoLandingPage />
      <InfoCommunity />
    </main>
  )
}

export default HomePage
