import { Link } from "react-router-dom";
import { type cssVar } from "../../models/cssType";
import { type ButtonProps } from "./Button.model";
import {
  buttonPrimary,
  buttonSecondary,
} from "../../utils/styles/buttonStyles";
import styles from "./Button.module.scss";

const Button = ({ children, config }: ButtonProps) => {
  const variantOptions: { [key: string]: cssVar } = {
    buttonPrimary,
    buttonSecondary,
  };

  const buttonStyles = variantOptions[config.variant];

  return (
    <Link to={config.route} className={styles.container} style={buttonStyles}>
      {children}
    </Link>
  );
};

export default Button;
