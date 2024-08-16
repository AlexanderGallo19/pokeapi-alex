import { Link } from "react-router-dom";
import { type cssVar } from "../../models/cssType";
import { type LinkActionProps } from "./LinkAction.model";
import {
  buttonPrimary,
  buttonPrimaryBlue,
  buttonSecondary,
} from "../../utils/styles/buttonStyles";
import styles from "./LinkAction.module.scss";

const LinkAction = ({ children, config }: LinkActionProps) => {
  const variantOptions: { [key: string]: cssVar } = {
    buttonPrimary,
    buttonPrimaryBlue,
    buttonSecondary,
  };

  const buttonStyles = variantOptions[config.variant];

  return (
    <Link
      role={"link"}
      to={config.route}
      className={styles.container}
      style={buttonStyles}
    >
      {children}
    </Link>
  );
};

export default LinkAction;
