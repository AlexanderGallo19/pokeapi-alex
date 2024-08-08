import { Stat } from "../../models/pokemon/pokemon";
import ProgressBar from "../progressBar/ProgressBar";
import styles from "./StatsProgress.module.scss";

interface Props {
  stats: Stat[];
}

const StatsProgress = ({ stats }: Props) => {
  return (
    <div className={styles.container}>
      {stats.map((stat, index) => (
        <div key={index} className={styles.container__indicators}>
          <div className={styles.container__indicators_title}>
            <h3> {stat.stat.name} </h3>
            <span> {stat.base_stat} </span>
          </div>
          <div className={styles.container__indicators_bar}>
            <ProgressBar baseStat={stat.base_stat} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsProgress;
