import cl from "classnames";
import { FC } from "react";
import styles from "./appLoader.module.scss";

const AppLoader: FC<{ blackout?: boolean; fixed?: boolean }> = ({
  blackout = true,
  fixed = false,
}) => {
  return (
    <div className={cl(styles.root, fixed && styles.root_fixed)}>
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
