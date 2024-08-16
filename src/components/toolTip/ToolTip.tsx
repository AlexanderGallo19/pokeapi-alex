import { ReactNode, useState } from "react";
import styles from "./ToolTip.module.scss";

interface Props {
  infoText: string;
  children: ReactNode;
}

const ToolTip = ({ children, infoText }: Props) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className={styles.container}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}

      <div
        className={`${styles.container__tooltip} ${
          showTooltip ? styles.container__tooltip_open : ""
        }`}
      >
        {infoText}
      </div>
    </div>
  );
};

export default ToolTip;
