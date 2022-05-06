import cl from "classnames";
import { FC } from "react";
import scss from "./appLoader.module.scss";

const AppLoader: FC<{ blackout?: boolean; fixed?: boolean }> = ({
  blackout = true,
  fixed = false,
}) => {
  return (
    <div className={cl(scss.root, fixed && scss.root_fixed)}>
      <div className={cl(scss.loader, blackout && scss.loader_blackout)}>
        <div className={scss.roller}>
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
