import cl from "classnames";
import { FC } from "react";
import scss from "./loader.module.scss";

const Loader: FC<{
  blackout?: boolean;
  type?: "relative" | "absolute" | "fixed";
}> = ({ blackout = true, type = "relative" }) => {
  return (
    <div className={scss.root} style={{ position: type }}>
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

export default Loader;
