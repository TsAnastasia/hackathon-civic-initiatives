import cl from "classnames";
import { FC } from "react";
import IconButton from "../../../../components/UI/buttons/IconButton/IconButton";

import scss from "./docContentPages.module.scss";

const DocContentPages: FC<{
  page: number;
  pages: number | null;
  handleBack: () => void;
  handleForward: () => void;
}> = ({ page, pages, handleBack, handleForward }) => {
  return (
    <div className={scss.root}>
      <IconButton
        className={cl(scss.button, scss.back)}
        onClick={handleBack}
        disabled={page === 1}
      />

      <p className={scss.pages}>{`${page} из ${pages || "?"}`}</p>

      <IconButton
        className={cl(scss.button, scss.next)}
        onClick={handleForward}
        disabled={page === pages}
      />
    </div>
  );
};

export default DocContentPages;
