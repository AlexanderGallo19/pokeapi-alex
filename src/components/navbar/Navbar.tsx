import { Link } from "react-router-dom";
import { type Links } from "../../models/links.model";
import NavbarResponsive from "./NavbarResponsive";
import styles from "./Navbar.module.scss";
import ToolTip from "../toolTip/ToolTip";

const links: Links[] = [
  {
    url: "/favorites",
    name: "Favorites",
  },
];

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <Link className={styles.container__logo} to={"/"}>
        <ToolTip infoText="Home">
          <img src="../../../public/img/logo.png" alt="Logo-page" />
        </ToolTip>
      </Link>
      <Link className={styles.container__logoresponsive} to={"/"}>
        <img
          src="../../../public/img/pokeball.png"
          alt="Logo-page-responsive"
        />
      </Link>
      <ul className={styles.container__ul}>
        <Link className={styles.container__ul_linkpokemons} to={"/pokemons"}>
          Find your pokemon
        </Link>
        {links.map((link) => (
          <Link
            className={styles.container__ul_linksfull}
            key={link.url}
            to={link.url}
          >
            {link.name}
          </Link>
        ))}
        <NavbarResponsive links={links} />
      </ul>
    </nav>
  );
};

export default Navbar;
