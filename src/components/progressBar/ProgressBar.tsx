import styles from "./ProgressBar.module.scss";

interface Props {
  baseStat: number;
}

const ProgressBar = ({ baseStat }: Props) => {
  return (
    <div
      className={styles.container}
      style={{ width: baseStat > 100 ? `${baseStat}%` : "100%" }}
    >
      <div
        className={styles.container__fillprogress}
        style={{ width: `${baseStat}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
