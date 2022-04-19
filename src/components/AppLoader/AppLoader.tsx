import cl from "classnames";
import { FC } from "react";
import styles from "./appLoader.module.scss";

const AppLoader: FC<{ blackout?: boolean }> = ({ blackout = true }) => {
  return (
    <div className={styles.root}>
      <div className={cl(styles.loader, blackout && styles.loader_blackout)}>
        <div className={styles.roller}>
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    </div>
  );
};

export default AppLoader;
